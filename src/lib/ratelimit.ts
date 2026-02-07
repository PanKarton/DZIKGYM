import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { requireEnv } from "./utils/requireEnv";

// jeden Redis dla całej appki
const redis = new Redis({
  url: requireEnv("UPSTASH_REDIS_REST_URL"),
  token: requireEnv("UPSTASH_REDIS_REST_TOKEN")!,
});

// IP: 5 req / 60s
export const ipRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  prefix: "rl_ip",
});

// EMAIL: 3 req / 1h
export const emailRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  prefix: "rl_email",
});
