import { useState } from "react";
import { FaGlobe, FaLink, FaPencil, FaQrcode, FaRegPaperPlane } from "react-icons/fa6";
import ResultBox from "./ResultBox";
import QRGenerator from "./QRGenerator";
import { shortenUrl } from "../utils/api";
import { validateUrl } from "../utils/url";

const inputClass =
  "w-full rounded-md border border-[#dcdcdc] px-3 py-2.5 text-sm text-black focus:border-teal-bright focus:outline-none focus:ring-2 focus:ring-teal-bright/30";

function PlaceholderLink({ children }) {
  // TODO: link to the real legal pages once they exist.
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-600 hover:underline">
      {children}
    </a>
  );
}

export default function ShortenerCard({ onShortened, onQR, onShare }) {
  const [tab, setTab] = useState("shorten");
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const check = validateUrl(longUrl);
    if (!check.ok) {
      setError(check.message);
      return;
    }

    setError("");
    setLoading(true);

    try {
      // `alias` is passed along, but is NOT sent to the backend yet - see TODO(alias) in utils/api.js.
      const shortUrl = await shortenUrl({ longUrl: check.url, alias: alias.trim() });
      const entry = { longUrl: check.url, shortUrl };
      setResult(entry);
      onShortened(entry);
      setLongUrl("");
      setAlias("");
    } catch (err) {
      console.error("TinyURL API Error:", err);
      setError("Something went wrong. Unable to shorten the URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const tabClass = (active) =>
    `flex flex-1 items-center justify-center gap-2 px-3 py-3.5 text-sm font-semibold transition ${
      active ? "bg-white text-[#111]" : "bg-teal-bright text-white hover:bg-[#2784a8]"
    }`;

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white text-black shadow-card">
      <div role="tablist" aria-label="Link tools" className="flex">
        <button
          type="button"
          role="tab"
          id="tab-shorten"
          aria-selected={tab === "shorten"}
          aria-controls="panel-shorten"
          onClick={() => setTab("shorten")}
          className={tabClass(tab === "shorten")}
        >
          <FaLink aria-hidden="true" />
          Shorten a Link
        </button>
        <button
          type="button"
          role="tab"
          id="tab-qr"
          aria-selected={tab === "qr"}
          aria-controls="panel-qr"
          onClick={() => setTab("qr")}
          className={tabClass(tab === "qr")}
        >
          <FaQrcode aria-hidden="true" />
          Generate QR Code
        </button>
      </div>

      <div className="p-[22px]">
        {tab === "shorten" ? (
          <div role="tabpanel" id="panel-shorten" aria-labelledby="tab-shorten">
            {result ? (
              <ResultBox
                result={result}
                onQR={onQR}
                onShare={onShare}
                onReset={() => {
                  setResult(null);
                  setError("");
                }}
              />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label
                  htmlFor="longUrl"
                  className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold"
                >
                  Long URL
                  <span className="text-red-600">*</span>
                </label>
                <div className="relative mb-3.5">
                  <FaRegPaperPlane
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    id="longUrl"
                    type="text"
                    inputMode="url"
                    autoComplete="off"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Paste long URL here"
                    className={`${inputClass} pl-9`}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <label
                      htmlFor="domain"
                      className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold"
                    >
                      <FaGlobe aria-hidden="true" className="text-[13px] text-slate-600" />
                      Domain
                    </label>
                    <select id="domain" className={inputClass} defaultValue="tinyurl.com">
                      <option>tinyurl.com</option>
                    </select>
                  </div>

                  <div className="pt-8 text-[22px] leading-[38px] text-slate-500" aria-hidden="true">
                    /
                  </div>

                  <div className="min-w-0 flex-1">
                    <label
                      htmlFor="alias"
                      className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold"
                    >
                      <FaPencil aria-hidden="true" className="text-[13px] text-slate-600" />
                      Alias
                    </label>
                    <input
                      id="alias"
                      type="text"
                      autoComplete="off"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="Add alias here"
                      className={inputClass}
                    />
                    <small className="text-[11px] text-slate-600">Must be at least 5 characters</small>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-[18px] w-full rounded-lg bg-go py-3.5 text-base font-bold text-white transition hover:bg-go-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Shortening..." : "Shorten Link"}
                </button>

                {error && (
                  <p
                    role="alert"
                    className="mt-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}

                <p className="mt-3.5 text-[11px] italic text-slate-500">
                  By clicking <strong>Shorten Link</strong>, you agree with our{" "}
                  <PlaceholderLink>Terms of Service</PlaceholderLink>,{" "}
                  <PlaceholderLink>Privacy Policy</PlaceholderLink>, and{" "}
                  <PlaceholderLink>Use of Cookies</PlaceholderLink>.
                </p>
              </form>
            )}
          </div>
        ) : (
          <div role="tabpanel" id="panel-qr" aria-labelledby="tab-qr">
            <QRGenerator />
          </div>
        )}
      </div>
    </div>
  );
}
