/**
 * Windows-safe Next.js starter:
 * - frees port 3000 if an old Next process is stuck there
 * - clears a corrupted .next cache
 * - starts a single next dev server
 */
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const PORT = process.env.PORT || "3000";

function getPidsOnPort(port) {
  try {
    const out = execSync(`netstat -ano | findstr ":${port} "`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const pids = new Set();
    for (const line of out.split(/\r?\n/)) {
      if (!line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = Number(parts[parts.length - 1]);
      if (pid > 0) pids.add(pid);
    }
    return [...pids];
  } catch {
    return [];
  }
}

function stopPids(pids) {
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore" });
      console.log(`Stopped process ${pid} on port ${PORT}`);
    } catch {
      // already gone
    }
  }
}

function clearNextCache() {
  const nextDir = path.join(ROOT, ".next");
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log("Cleared .next cache");
  } catch (err) {
    console.warn("Could not fully clear .next:", err.message);
  }
}

const existing = getPidsOnPort(PORT);
if (existing.length) {
  console.log(`Port ${PORT} busy (${existing.join(", ")}). Freeing it...`);
  stopPids(existing);
  // give Windows a moment to release file handles
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1500);
}

clearNextCache();

const child = spawn("npx", ["next", "dev", "-p", PORT], {
  cwd: ROOT,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));
