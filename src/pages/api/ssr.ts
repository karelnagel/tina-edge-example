import type { APIRoute } from "astro";
import client from "../../../tina/__generated__/client";

export const prerender = false;

export const get: APIRoute = async () => {
  const global = await client.queries.global({ relativePath: "index.json" });
  return new Response(JSON.stringify(global, null, 2));
};
