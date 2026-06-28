"use client";

import { useState } from "react";

interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  isPanelOpen?: boolean;
  onClosePanel?: () => void;
}

export default function DashboardLayout({
  sidebar,
  children,
  isPanelOpen = false,
  onClosePanel,
}: DashboardLayoutProps) {
  const [showInfo, setShowInfo] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#070B16] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-cyan-900/30 backdrop-blur-md bg-black/20">
        <div className="px-6 py-2 flex items-center justify-between">
          <div>

            <h1 className="text-xs text-slate-400 tracking-widest uppercase">
              INFOCREON INTERNSHIP - OPEN BANKING CONSENT FLOW EXPLORER
            </h1>
          </div>

          <button
            onClick={() => setShowInfo(true)}
            className="w-8 h-8 rounded-full border border-cyan-500/40 hover:bg-cyan-500/10 transition"
            title="Session Information"
          >
            i
          </button>
        </div>
      </header>

      {/* Main Stage */}
      <main className="pt-16 h-screen overflow-auto">
        {children}
      </main>

      {/* Intelligence Panel */}
      <div
        className={`
          fixed
          top-16
          right-0
          h-[calc(100vh-64px)]
          w-[420px]
          bg-[#0B1117]
          border-l
          border-cyan-900/30
          shadow-2xl
          z-50
          transform
          transition-transform
          duration-300
          ${
            isPanelOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h2 className="font-semibold text-cyan-300">
            Intelligence Panel
          </h2>

          <button
            onClick={onClosePanel}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full pb-20">
          {sidebar}
        </div>
      </div>

        {/* Developer Signature Modal */}
      {showInfo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[650px] bg-[#0B1117] border border-cyan-900/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500" />

            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-300">
                    Developer Signature
                  </h2>

                </div>

                <button
                  onClick={() => setShowInfo(false)}
                  className="text-slate-400 hover:text-white text-2xl transition"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400 mb-1">
                    Architect
                  </p>

                  <p className="text-lg font-semibold text-white">
                    Gopika T P
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400 mb-1">
                    Batch
                  </p>

                  <p className="text-lg font-semibold text-white">
                    Batch 3 Interns
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400 mb-1">
                    Stack
                  </p>

                  <p className="text-white leading-relaxed">
                    Next.js • FastAPI • Tailwind CSS • React Flow • Recharts
                  </p>
                </div>

                

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-center text-xs text-slate-500 tracking-wider uppercase">
                    Open Banking Consent Flow Explorer - Infocreon Internship 
                     
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}