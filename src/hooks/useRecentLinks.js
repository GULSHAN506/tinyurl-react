import { useCallback, useEffect, useState } from "react";
import { isHttpUrl } from "../utils/url";

// The backend has no history endpoint, so recent links live in the browser.
const STORAGE_KEY = "tinyurl_recent_links";
const MAX_LINKS = 10;

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (l) =>
          l &&
          typeof l.id === "string" &&
          typeof l.longUrl === "string" &&
          typeof l.shortUrl === "string" &&
          isHttpUrl(l.longUrl) &&
          isHttpUrl(l.shortUrl)
      )
      .slice(0, MAX_LINKS);
  } catch {
    return [];
  }
}

export default function useRecentLinks() {
  const [links, setLinks] = useState(readStored);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
    } catch {
      // storage unavailable (private mode / quota) - keep working in memory
    }
  }, [links]);

  const addLink = useCallback(({ longUrl, shortUrl }) => {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      longUrl,
      shortUrl,
      createdAt: Date.now(),
    };
    setLinks((prev) =>
      [entry, ...prev.filter((l) => l.shortUrl !== shortUrl)].slice(0, MAX_LINKS)
    );
  }, []);

  const clearLinks = useCallback(() => setLinks([]), []);

  return { links, addLink, clearLinks };
}
