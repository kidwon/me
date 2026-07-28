import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

/*
 * Sliding-window rate limiter backed by a table, so limits survive across
 * function instances (unlike the in-memory Map of the old Next.js route).
 * Returns true if the request is allowed.
 */
export const check = internalMutation({
  args: {
    key: v.string(),
    windowMs: v.number(),
    maxRequests: v.number(),
  },
  handler: async (ctx, { key, windowMs, maxRequests }) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("rateLimits")
      .withIndex("by_key", (q) => q.eq("key", key))
      .unique();

    const timestamps = (existing?.timestamps ?? []).filter(
      (t) => now - t < windowMs,
    );

    const allowed = timestamps.length < maxRequests;
    if (allowed) timestamps.push(now);

    if (existing) {
      await ctx.db.patch(existing._id, { timestamps });
    } else {
      await ctx.db.insert("rateLimits", { key, timestamps });
    }
    return allowed;
  },
});
