import { createClient, type SanityClient } from "@sanity/client";
import { sanityDataset, sanityConfigured, sanityProjectId } from "./env";

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!sanityConfigured) return null;
  if (!client) {
    client = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: "2024-05-01",
      useCdn: true,
    });
  }
  return client;
}

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  const c = getSanityClient();
  if (!c) return null;
  try {
    return await c.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
