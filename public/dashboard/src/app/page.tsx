export default function PatchForgeDashboard() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif", background: "#0f172a", color: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#38bdf8" }}>PatchForge Live Audit & Patch Monitor</h1>
      <p style={{ color: "#94a3b8" }}>Harness: TrueForge | Sandbox: Daytona | Quality Guard: Qodo</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "24px" }}>
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155" }}>
          <h2 style={{ fontSize: "18px", color: "#f43f5e" }}>Detected Vulnerabilities</h2>
          <div style={{ marginTop: "12px", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
            <strong>CVE-2026-2137</strong> — express @ 4.16.0
            <p style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0 0" }}>Severity: HIGH | ReDoS in route matching logic</p>
          </div>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155" }}>
          <h2 style={{ fontSize: "18px", color: "#10b981" }}>Daytona Sandbox Execution</h2>
          <div style={{ marginTop: "12px", background: "#0f172a", padding: "12px", borderRadius: "6px" }}>
            <p style={{ fontSize: "13px", color: "#34d399", margin: 0 }}>? Container booted in 1.2s</p>
            <p style={{ fontSize: "13px", color: "#34d399", margin: "4px 0 0 0" }}>? express@4.21.2 passed 42/42 unit tests</p>
          </div>
        </div>
      </div>
    </div>
  );
}
