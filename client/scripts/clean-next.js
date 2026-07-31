/* Remove stale .next output (fixes "e[o] is not a function" / missing chunk errors). */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", ".next");
if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log("[clean-next] removed .next");
}
