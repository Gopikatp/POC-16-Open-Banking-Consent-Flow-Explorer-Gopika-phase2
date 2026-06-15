import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TokenSimulator from "./TokenSimulator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Consent {
  id: string;
  bank: string;
  scope: string;
  status: string;
  created_at: string;
  expires_at: string;
  refresh_count: number;
}

interface SidebarProps {
  selectedConsent: Consent | null;

  bankFilter: string;
  statusFilter: string;
  scopeFilter: string;

  setBankFilter: (value: string) => void;
  setStatusFilter: (value: string) => void;
  setScopeFilter: (value: string) => void;

  revokeConsent: () => void;

  filteredConsents: Consent[];
}

function downloadSampleData(
  consents: Consent[]
) {
  const blob = new Blob(
    [JSON.stringify(consents, null, 2)],
    {
      type: "application/json",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = "consents.json";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
}

function downloadCSVData(
  consents: Consent[]
) {
  const headers = [
    "id",
    "bank",
    "scope",
    "status",
    "created_at",
    "expires_at",
    "refresh_count",
  ];

  const rows = consents.map(
    (consent) => [
      consent.id,
      consent.bank,
      consent.scope,
      consent.status,
      consent.created_at,
      consent.expires_at,
      consent.refresh_count,
    ]
  );

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      row.join(",")
    ),
  ].join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download = "consents.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
}

export default function Sidebar({
  selectedConsent,
  bankFilter,
  statusFilter,
  scopeFilter,
  setBankFilter,
  setStatusFilter,
  setScopeFilter,
  revokeConsent,
  filteredConsents,
}: SidebarProps) {
  return (
    <div className="space-y-4">
      {/* Why This Matters */}
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Why This Matters
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              • Customers retain control over
              financial data sharing.
            </li>

            <li>
              • Access is granted only through
              explicit consent.
            </li>

            <li>
              • Revoked consents immediately
              terminate access rights.
            </li>

            <li>
              • Expired tokens require renewed
              authorization.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Who Controls The Rail */}
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Who Controls The Rail
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Banks</strong>

              <p className="text-slate-400">
                Store customer financial data.
              </p>
            </div>

            <div>
              <strong>Aggregators</strong>

              <p className="text-slate-400">
                Manage consent and data exchange.
              </p>
            </div>

            <div>
              <strong>Third Party Apps</strong>

              <p className="text-slate-400">
                Consume authorized data.
              </p>
            </div>

            <div>
              <strong>Regulators</strong>

              <p className="text-slate-400">
                Define compliance frameworks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Consent */}
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Selected Consent
          </CardTitle>
        </CardHeader>

        <CardContent>
          {selectedConsent ? (
            <div className="space-y-2 text-sm">
              <p>
                <strong>ID:</strong>{" "}
                {selectedConsent.id}
              </p>

              <p>
                <strong>Bank:</strong>{" "}
                {selectedConsent.bank}
              </p>

              <p>
                <strong>Scope:</strong>{" "}
                {selectedConsent.scope}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {selectedConsent.status}
              </p>

              <p>
                <strong>Created:</strong>{" "}
                {selectedConsent.created_at}
              </p>

              <p>
                <strong>Expires:</strong>{" "}
                {selectedConsent.expires_at}
              </p>

              <p>
                <strong>Refresh Count:</strong>{" "}
                {selectedConsent.refresh_count}
              </p>

              <button
                onClick={revokeConsent}
                disabled={
                  selectedConsent.status ===
                  "revoked"
                }
                className="
                  mt-4
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  disabled:bg-slate-700
                  disabled:cursor-not-allowed
                  px-4
                  py-2
                  rounded
                  text-sm
                  font-medium
                "
              >
                Revoke Consent
              </button>
            </div>
          ) : (
            <p>No consent selected</p>
          )}
        </CardContent>
      </Card>

      {/* Token Simulator */}
      <TokenSimulator
        selectedConsent={selectedConsent}
      />

      {/* Dashboard Intelligence */}
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Dashboard Intelligence
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-2 text-sm">
            <p>
              Active Status:{" "}
              {selectedConsent
                ? selectedConsent.status
                : "N/A"}
            </p>

            <p>
              Current Focus: Open Banking
              Consent Monitoring
            </p>

            <p>
              Export: JSON Download Enabled
            </p>

            <p>
              Risk Indicator:{" "}
              {selectedConsent?.status ===
              "revoked"
                ? "High"
                : selectedConsent?.status ===
                  "expired"
                ? "Medium"
                : "Low"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Dashboard Filters
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="text-sm mb-2">
              Bank
            </p>

            <Select
              value={bankFilter}
              onValueChange={setBankFilter}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="All">
                  All
                </SelectItem>

                <SelectItem value="HSBC">
                  HSBC
                </SelectItem>

                <SelectItem value="Barclays">
                  Barclays
                </SelectItem>

                <SelectItem value="Lloyds">
                  Lloyds
                </SelectItem>

                <SelectItem value="Monzo">
                  Monzo
                </SelectItem>

                <SelectItem value="Santander">
                  Santander
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm mb-2">
              Status
            </p>

            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="All">
                  All
                </SelectItem>

                <SelectItem value="active">
                  Active
                </SelectItem>

                <SelectItem value="expired">
                  Expired
                </SelectItem>

                <SelectItem value="revoked">
                  Revoked
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm mb-2">
              Scope
            </p>

            <Select
              value={scopeFilter}
              onValueChange={setScopeFilter}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="All">
                  All
                </SelectItem>

                <SelectItem value="accounts.read">
                  accounts.read
                </SelectItem>

                <SelectItem value="balances.read">
                  balances.read
                </SelectItem>

                <SelectItem value="transactions.read">
                  transactions.read
                </SelectItem>

                <SelectItem value="payments.write">
                  payments.write
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Download Sample Data */}
<Card className="bg-slate-950 border-slate-800 text-white">
  <CardHeader>
    <CardTitle>
      Download Sample Data
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-3">
    <button
      onClick={() =>
        downloadSampleData(
          filteredConsents
        )
      }
      className="
        w-full
        bg-cyan-600
        hover:bg-cyan-700
        px-4
        py-2
        rounded
        text-sm
        font-medium
      "
    >
      Download JSON
    </button>

    <button
      onClick={() =>
        downloadCSVData(
          filteredConsents
        )
      }
      className="
        w-full
        bg-emerald-600
        hover:bg-emerald-700
        px-4
        py-2
        rounded
        text-sm
        font-medium
      "
    >
      Download CSV
    </button>
  </CardContent>
</Card>
    </div>
  );
}