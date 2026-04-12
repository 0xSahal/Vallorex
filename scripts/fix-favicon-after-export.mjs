import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");
const defaultIcoLink =
  '<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>';
const defaultIcoLinkRe =
  /<link\s+rel="icon"\s+href="\/favicon\.ico"\s+type="image\/x-icon"\s+sizes="16x16"\s*\/>/g;

function walkHtmlFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkHtmlFiles(full, acc);
    else if (name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

let changed = 0;
for (const file of walkHtmlFiles(outDir)) {
  const src = fs.readFileSync(file, "utf8");
  let next = src.replace(defaultIcoLinkRe, "");
  if (next === src && src.includes("/favicon.ico")) {
    next = src.split(defaultIcoLink).join("");
  }
  if (next !== src) {
    fs.writeFileSync(file, next);
    changed++;
  }
}

const icoPath = path.join(outDir, "favicon.ico");
if (fs.existsSync(icoPath)) {
  fs.unlinkSync(icoPath);
}

console.log(
  changed > 0
    ? `fix-favicon-after-export: stripped default favicon.ico link from ${changed} HTML file(s) and removed out/favicon.ico`
    : "fix-favicon-after-export: no HTML changes (pattern may differ from this Next.js version); removed out/favicon.ico if present",
);
