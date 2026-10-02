import { LOCAL_BACKEND_ORIGIN, API_BASE_URL, SHORTEN_ENDPOINT } from "../config";

/**
 * Shortens a URL using the existing backend: POST /save  ->  { ok, shortURL }
 *
 * TODO(alias): The original frontend only ever sent { longUrl } and the backend source
 * was not included in the project ZIP, so alias support could not be confirmed.
 * When the backend supports custom aliases, send it here:
 *
 *   body: JSON.stringify({ longUrl, alias })
 *
 * `alias` is already collected by ShortenerCard and passed into this function.
 */
// eslint-disable-next-line no-unused-vars
export async function shortenUrl({ longUrl, alias }) {
  const response = await fetch(SHORTEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl }),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    // handled below
  }

  if (!response.ok || !data || !data.ok || !data.shortURL) {
    throw new Error("Unable to shorten URL.");
  }

  // Same production fix as the original script.
  return String(data.shortURL).replace(LOCAL_BACKEND_ORIGIN, API_BASE_URL);
}
