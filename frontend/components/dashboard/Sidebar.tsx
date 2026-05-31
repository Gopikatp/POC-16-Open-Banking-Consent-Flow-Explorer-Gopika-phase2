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
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Why This Matters
          </CardTitle>
        </CardHeader>

        <CardContent>
          Open Banking enables customers to
          securely share financial data across
          institutions while maintaining
          consent control.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Who Controls The Rail
          </CardTitle>
        </CardHeader>

        <CardContent>
          Banks, regulators, consent providers,
          and aggregators collectively govern
          access to financial data.
        </CardContent>
      </Card>

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

      <TokenSimulator
        selectedConsent={selectedConsent}
      />

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

      <Card className="bg-slate-950 border-slate-800 text-white">
  <CardHeader>
    <CardTitle>
      Download Sample Data
    </CardTitle>
  </CardHeader>

  <CardContent>
    <button
      onClick={() =>
  downloadSampleData(filteredConsents)
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
  </CardContent>
</Card>
    </div>
  );
}