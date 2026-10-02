// Backend configuration.
// Only the endpoint that exists in the original project is used: POST {API_BASE_URL}/save
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://tiny-url-backend-ashen.vercel.app"
).replace(/\/+$/, "");

export const SHORTEN_ENDPOINT = `${API_BASE_URL}/save`;

// The original script rewrote this origin to the production host
// (the backend sometimes returns a localhost short URL).
export const LOCAL_BACKEND_ORIGIN = "http://localhost:5050";
