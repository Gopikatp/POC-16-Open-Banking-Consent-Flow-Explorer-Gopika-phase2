import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
}

export default function Sidebar({
  selectedConsent,
}: SidebarProps) {
  return (
    <div className="space-y-4">
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          Open Banking enables customers to securely
          share financial data across institutions
          while maintaining consent control.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Who Controls The Rail</CardTitle>
        </CardHeader>
        <CardContent>
          Banks, regulators, consent providers,
          and aggregators collectively govern
          access to financial data.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Selected Consent</CardTitle>
        </CardHeader>

        <CardContent>
          {selectedConsent ? (
            <div className="space-y-2 text-sm">
              <p>
                <strong>ID:</strong> {selectedConsent.id}
              </p>

              <p>
                <strong>Bank:</strong> {selectedConsent.bank}
              </p>

              <p>
                <strong>Scope:</strong> {selectedConsent.scope}
              </p>

              <p>
                <strong>Status:</strong> {selectedConsent.status}
              </p>

              <p>
                <strong>Created:</strong> {selectedConsent.created_at}
              </p>

              <p>
                <strong>Expires:</strong> {selectedConsent.expires_at}
              </p>

              <p>
                <strong>Refresh Count:</strong> {selectedConsent.refresh_count}
              </p>
            </div>
          ) : (
            <p>No consent selected</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Dashboard Filters</CardTitle>
        </CardHeader>

        <CardContent>
          Bank Filter
          <br />
          Consent Status
          <br />
          Permission Scope
        </CardContent>
      </Card>
    </div>
  );
}