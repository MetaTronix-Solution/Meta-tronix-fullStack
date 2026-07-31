/**
 * User agents that receive an explicit Allow: / rule.
 * Covers major web search, social previews, and common AI/indexing crawlers.
 */
export const ROBOTS_EXPLICIT_USER_AGENTS: string[] = [
  "*",
  /* Web search */
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "Google-Extended",
  "Bingbot",
  "Slurp",
  "DuckDuckBot",
  "Baiduspider",
  "YandexBot",
  "Amazonbot",
  "Applebot",
  /* Social / link previews */
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "Pinterestbot",
  "Slackbot",
  "Discordbot",
  /* AI / LLM / research crawlers (allowed for discovery) */
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "cohere-ai",
  "Bytespider",
  "Diffbot",
  "omgili",
  "YouBot",
  "Applebot-Extended",
  "ImagesiftBot",
  "Meta-ExternalAgent",
];
