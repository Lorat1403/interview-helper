const fs = require("fs");
const p = "./node_modules/json-server-auth/dist/guards.js";

if (!fs.existsSync(p)) {
  console.error("File not found:", p);
  process.exit(1);
}

let s = fs.readFileSync(p, "utf8");
const before = s;

s = s.replace(/\/(600|660|664|666)\/\*/g, "/$1/:path*");

if (s === before) {
  console.log("No changes needed (no /600/* /660/* /664/* /666/* found).");
} else {
  fs.writeFileSync(p, s, "utf8");
  console.log("Patched", p);
}
