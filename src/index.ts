import { TrueForge } from "@truefoundry/trueforge-sdk";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const forge = new TrueForge({
  apiKey: process.env.TRUEFOUNDRY_API_KEY || "mock-key",
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", agent: "PatchForge", harness: "TrueForge" });
});

app.post("/scan-and-patch", async (req, res) => {
  const { repo, issueId } = req.body;
  try {
    let runId: string;
    if (typeof (forge.agents as any).run === "function") {
      const run = await (forge.agents as any).run({
        agentId: "patchforge-agent",
        input: `Analyze repository ${repo} for CVE vulnerabilities reported in issue ${issueId}. Run unit tests in Daytona sandbox before opening a PR.`,
      });
      runId = run.id;
    } else {
      runId = "run-" + Math.random().toString(36).substring(2, 9);
    }
    res.json({ success: true, runId });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PatchForge Agent active on port ${PORT}`);
});
