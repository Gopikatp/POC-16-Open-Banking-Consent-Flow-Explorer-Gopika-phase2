export default function ConsentFlowDiagram() {
  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Open Banking Consent Flow
      </h2>

      <div className="flex flex-col items-center gap-3">
        <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold">Customer</h3>
          <p className="text-sm text-slate-400">
            Controls Data Access
          </p>
        </div>

        <div className="text-cyan-400 text-2xl">↓</div>

        <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold">
            Consent Granted
          </h3>
          <p className="text-sm text-slate-400">
            Permission Approved
          </p>
        </div>

        <div className="text-cyan-400 text-2xl">↓</div>

        <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold">Bank</h3>
          <p className="text-sm text-slate-400">
            Stores Financial Data
          </p>
        </div>

        <div className="text-cyan-400 text-2xl">↓</div>

        <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold">
            Aggregator
          </h3>
          <p className="text-sm text-slate-400">
            Processes Consent Requests
          </p>
        </div>

        <div className="text-cyan-400 text-2xl">↓</div>

        <div className="w-72 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold">
            Third Party App
          </h3>
          <p className="text-sm text-slate-400">
            Consumes Authorized Data
          </p>
        </div>
      </div>
    </div>
  );
}