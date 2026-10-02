import { useState } from "react";
import QRCodeImage from "./QRCodeImage";
import { validateUrl } from "../utils/url";

// "Generate QR Code" tab: builds a QR code for any http(s) URL entered by the user.
// No backend call is needed - the QR code is generated in the browser.
export default function QRGenerator() {
  const [value, setValue] = useState("");
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = validateUrl(value);
    if (!check.ok) {
      setTarget("");
      setError(check.message);
      return;
    }
    setError("");
    setTarget(check.url);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="qr-url" className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold">
        URL
        <span className="text-red-600">*</span>
      </label>
      <input
        id="qr-url"
        type="text"
        inputMode="url"
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste a URL to turn into a QR code"
        className="w-full rounded-md border border-[#dcdcdc] px-3 py-2.5 text-sm text-black focus:border-teal-bright focus:outline-none focus:ring-2 focus:ring-teal-bright/30"
      />

      <button
        type="submit"
        className="mt-[18px] w-full rounded-lg bg-go py-3.5 text-base font-bold text-white transition hover:bg-go-dark"
      >
        Generate QR Code
      </button>

      {error && (
        <p role="alert" className="mt-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      {target && (
        <div className="mt-5 border-t border-slate-200 pt-5">
          <QRCodeImage value={target} />
          <p className="mt-3 line-clamp-2 break-all text-center text-xs text-slate-500" title={target}>
            {target}
          </p>
        </div>
      )}
    </form>
  );
}
