import { FaDownload } from "react-icons/fa6";
import useQrDataUrl from "../hooks/useQrDataUrl";

// Renders a QR code for `value` and a Download PNG button.
export default function QRCodeImage({ value, fileName = "tinyurl-qr-code.png" }) {
  const { dataUrl, error } = useQrDataUrl(value);

  if (error) {
    return (
      <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
        Couldn&apos;t generate the QR code. Please try again.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid h-60 w-60 max-w-full place-items-center rounded-xl border border-slate-200 bg-white p-2 shadow-soft">
        {dataUrl ? (
          <img src={dataUrl} alt={`QR code for ${value}`} className="h-full w-full" />
        ) : (
          <span className="text-sm text-slate-500">Generating…</span>
        )}
      </div>

      <a
        href={dataUrl || undefined}
        download={fileName}
        aria-disabled={!dataUrl}
        className={`mt-4 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark ${
          dataUrl ? "" : "pointer-events-none opacity-50"
        }`}
      >
        <FaDownload aria-hidden="true" />
        Download PNG
      </a>
    </div>
  );
}
