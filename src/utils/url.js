// Same rules as the original script.js.
// Returns { ok: true, url } or { ok: false, message }.
export function validateUrl(input) {
  const value = (input || "").trim();

  if (!value) {
    return { ok: false, message: "Please enter a long URL." };
  }

  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    return { ok: false, message: "Please enter a valid URL (include http:// or https://)." };
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { ok: false, message: "Please enter a valid HTTP or HTTPS URL." };
  }

  return { ok: true, url: value };
}

export function isHttpUrl(value) {
  try {
    const { protocol } = new URL(value);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
