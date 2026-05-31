"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";
import ConsentFlowChart from "@/components/dashboard/ConsentFlowChart";
import AuditLog from "@/components/dashboard/AuditLog";
import ConsentFlowDiagram from "@/components/dashboard/ConsentFlowDiagram";

import api from "@/lib/api";

interface Metrics {
  active_consents: number;
  revoked_consents: number;
  expired_consents: number;
}

interface ScopeData {
  scope: string;
  count: number;
}

interface Consent {
  id: string;
  bank: string;
  scope: string;
  status: string;
  created_at: string;
  expires_at: string;
  refresh_count: number;
}

export default function Home() {
  const [metrics, setMetrics] = useState<Metrics>({
    active_consents: 0,
    revoked_consents: 0,
    expired_consents: 0,
  });

  const [scopeData, setScopeData] = useState<ScopeData[]>([]);

  const [consents, setConsents] = useState<Consent[]>([]);

  const [selectedConsent, setSelectedConsent] =
    useState<Consent | null>(null);

  const [bankFilter, setBankFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [scopeFilter, setScopeFilter] =
    useState("All");

  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      const metricsResponse = await api.get(
        "/metrics"
      );

      setMetrics(metricsResponse.data);

      const scopesResponse = await api.get(
        "/scopes"
      );

      const formattedScopes = Object.entries(
        scopesResponse.data
      ).map(([scope, count]) => ({
        scope,
        count: Number(count),
      }));

      setScopeData(formattedScopes);

      const consentsResponse =
        await api.get("/consents");

      setConsents(consentsResponse.data);

      if (consentsResponse.data.length > 0) {
        setSelectedConsent(
          consentsResponse.data[0]
        );
      }
    } catch (error) {
      console.error(
        "Dashboard data load failed:",
        error
      );
    }
  }

  const filteredConsents = consents.filter(
    (consent) => {
      const bankMatch =
        bankFilter === "All" ||
        consent.bank === bankFilter;

      const statusMatch =
        statusFilter === "All" ||
        consent.status === statusFilter;

      const scopeMatch =
        scopeFilter === "All" ||
        consent.scope === scopeFilter;

      return (
        bankMatch &&
        statusMatch &&
        scopeMatch
      );
    }
  );

  function revokeConsent() {
    if (!selectedConsent) return;

    const updatedConsents = consents.map(
      (consent) =>
        consent.id === selectedConsent.id
          ? {
              ...consent,
              status: "revoked",
            }
          : consent
    ) as Consent[];

    setConsents(updatedConsents);

    const updatedSelected =
      updatedConsents.find(
        (c) => c.id === selectedConsent.id
      ) || null;

    setSelectedConsent(updatedSelected);
  }

  return (
    <DashboardLayout
      sidebar={
        <Sidebar
          selectedConsent={selectedConsent}
          bankFilter={bankFilter}
          statusFilter={statusFilter}
          scopeFilter={scopeFilter}
          setBankFilter={setBankFilter}
          setStatusFilter={setStatusFilter}
          setScopeFilter={setScopeFilter}
          revokeConsent={revokeConsent}
          filteredConsents={filteredConsents}
        />
      }
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Open Banking Consent Flow Explorer
        </h1>

        <p className="text-slate-400 mb-8">
          Real Rails Intelligence Dashboard
        </p>

        <MetricsCards
          active={
            consents.filter(
              (c) => c.status === "active"
            ).length
          }
          revoked={
            consents.filter(
              (c) => c.status === "revoked"
            ).length
          }
          expired={
            consents.filter(
              (c) => c.status === "expired"
            ).length
          }
        />

        <ConsentFlowChart data={scopeData} />
        <ConsentFlowDiagram />

        <AuditLog
          consents={filteredConsents}
          onSelectConsent={setSelectedConsent}
        />
      </div>
    </DashboardLayout>
  );
}