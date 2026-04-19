export function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function nl2br(input: string): string {
  return input.replace(/\r\n|\r|\n/g, "<br/>");
}

export function safeText(input: unknown, maxLen = 5000): string {
  const s = typeof input === "string" ? input : "";
  return s.trim().slice(0, maxLen);
}

export function labelProjectType(value: string): string {
  const map: Record<string, string> = {
    ai: "AI / Machine Learning",
    blockchain: "Blockchain / Web3",
    data: "Data & Analytics",
    product: "Product Engineering",
    audit: "Technical Audit",
    consulting: "Consulting / Strategy",
    other: "Other",
  };
  return map[value] ?? (value ? value : "-");
}

export function labelBudget(value: string): string {
  const map: Record<string, string> = {
    "under-25k": "Under $25K",
    "25k-50k": "$25K – $50K",
    "50k-100k": "$50K – $100K",
    "100k-250k": "$100K – $250K",
    "250k+": "$250K+",
    unsure: "Not sure yet",
  };
  return map[value] ?? (value ? value : "-");
}

