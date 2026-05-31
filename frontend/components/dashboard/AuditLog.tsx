interface Consent {
  id: string;
  bank: string;
  scope: string;
  status: string;
  created_at: string;
  expires_at: string;
  refresh_count: number;
}

interface AuditLogProps {
  consents: Consent[];
  onSelectConsent: (consent: Consent) => void;
}

export default function AuditLog({
  consents,
  onSelectConsent,
}: AuditLogProps) {
  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Audit Log
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="pb-3">Consent ID</th>
              <th className="pb-3">Bank</th>
              <th className="pb-3">Scope</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {consents.map((consent) => (
              <tr
                key={consent.id}
                onClick={() => onSelectConsent(consent)}
                className="border-b border-slate-800 hover:bg-slate-900 cursor-pointer"
              >
                <td className="py-3">
                  {consent.id}
                </td>

                <td>{consent.bank}</td>

                <td>{consent.scope}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      consent.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : consent.status === "expired"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {consent.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}