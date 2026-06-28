"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    scope: string;
    count: number;
  }[];
}

export default function ConsentFlowChart({ data }: Props) {
  return (
    <div 
      id="scope-chart"
      data-testid="scope-chart"
      className="bg-[#0B1117] border border-slate-800 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-6">
        Permission Scope Distribution
      </h2>

      <div className="w-full h-[350px] min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="scope" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#38BDF8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}