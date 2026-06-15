"use client";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

const nodeStyle = {
  background: "#0F172A",
  color: "#FFFFFF",
  border: "1px solid #38BDF8",
  borderRadius: "12px",
  width: 220,
  padding: "10px",
  textAlign: "center" as const,
  fontSize: "13px",
};

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: {
      label: (
        <div>
          <strong>Customer</strong>
          <br />
          Controls Access
        </div>
      ),
    },
    style: nodeStyle,
  },

  {
    id: "2",
    position: { x: 250, y: 130 },
    data: {
      label: (
        <div>
          <strong>Consent Granted</strong>
          <br />
          Permission Approved
        </div>
      ),
    },
    style: nodeStyle,
  },

  {
    id: "3",
    position: { x: 250, y: 260 },
    data: {
      label: (
        <div>
          <strong>Bank</strong>
          <br />
          Stores Financial Data
        </div>
      ),
    },
    style: nodeStyle,
  },

  {
    id: "4",
    position: { x: 250, y: 390 },
    data: {
      label: (
        <div>
          <strong>Aggregator</strong>
          <br />
          Processes Consent
        </div>
      ),
    },
    style: nodeStyle,
  },

  {
    id: "5",
    position: { x: 250, y: 520 },
    data: {
      label: (
        <div>
          <strong>Third Party App</strong>
          <br />
          Consumes Data
        </div>
      ),
    },
    style: nodeStyle,
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
  },

  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
  },
];

export default function ConsentFlowDiagram() {
  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">
        Open Banking Consent Flow
      </h2>

      <div className="h-[650px] rounded-lg overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}