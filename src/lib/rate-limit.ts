type RateLimitState = {
  count: number;
  resetAtMs: number;
};

const buckets = new Map<string, RateLimitState>();

export type RateLimitResult =
  | { ok: true; remaining: number; resetAtMs: number }
  | { ok: false; remaining: 0; resetAtMs: number };

export function rateLimit({
  key,
  limit,
  windowMs,
  nowMs = Date.now(),
}: {
  key: string;
  limit: number;
  windowMs: number;
  nowMs?: number;
}): RateLimitResult {
  const existing = buckets.get(key);

  if (!existing || nowMs >= existing.resetAtMs) {
    const resetAtMs = nowMs + windowMs;
    buckets.set(key, { count: 1, resetAtMs });
    return { ok: true, remaining: Math.max(0, limit - 1), resetAtMs };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAtMs: existing.resetAtMs };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return { ok: true, remaining: Math.max(0, limit - existing.count), resetAtMs: existing.resetAtMs };
}

