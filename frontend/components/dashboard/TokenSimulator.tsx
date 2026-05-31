"use client";

import { useMemo, useState } from "react";

interface Consent {
  id: string;
  bank: string;
  scope: string;
  status: string;
  created_at: string;
  expires_at: string;
  refresh_count: number;
}

interface TokenSimulatorProps {
  selectedConsent: Consent | null;
}

export default function TokenSimulator({
  selectedConsent,
}: TokenSimulatorProps) {
  const [daysForward, setDaysForward] =
    useState(0);

  const result = useMemo(() => {
    if (!selectedConsent) return null;

    const today = new Date();

    const simulatedDate = new Date(today);

    simulatedDate.setDate(
      simulatedDate.getDate() + daysForward
    );

    const expiryDate = new Date(
      selectedConsent.expires_at
    );

    const diff =
      expiryDate.getTime() -
      simulatedDate.getTime();

    const daysRemaining = Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    );

    let tokenStatus = "Active";

    if (daysRemaining <= 0) {
      tokenStatus = "Expired";
    } else if (daysRemaining <= 30) {
      tokenStatus = "Expiring Soon";
    }

    return {
      daysRemaining,
      tokenStatus,
    };
  }, [selectedConsent, daysForward]);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-white">
      <h3 className="font-semibold mb-4">
        Token Expiry Simulator
      </h3>

      {selectedConsent ? (
        <>
          <p className="mb-2">
            <strong>Expires:</strong>{" "}
            {selectedConsent.expires_at}
          </p>

          <p className="mb-2">
            <strong>Refresh Count:</strong>{" "}
            {selectedConsent.refresh_count}
          </p>

          <p className="mb-4">
            <strong>Move Forward:</strong>{" "}
            {daysForward} days
          </p>

          <input
            type="range"
            min="0"
            max="365"
            value={daysForward}
            onChange={(e) =>
              setDaysForward(
                Number(e.target.value)
              )
            }
            className="w-full mb-4"
          />

          <p className="mb-2">
            <strong>
              Days Remaining:
            </strong>{" "}
            {result?.daysRemaining}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {result?.tokenStatus}
          </p>
        </>
      ) : (
        <p>No consent selected</p>
      )}
    </div>
  );
}