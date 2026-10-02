import { FaArrowUpRightFromSquare, FaCheck, FaQrcode, FaRegCopy, FaShareNodes } from "react-icons/fa6";
import useCopy from "../hooks/useCopy";

// The four actions for a short link: Visit URL, QR Code, Share, Copy.
// variant="tile"   -> horizontal aligned buttons with real TinyURL colors (result box)
// variant="inline" -> compact inline buttons (recent links)
export default function LinkActions({ shortUrl, onQR, onShare, variant = "tile" }) {
  const { copied, failed, copy } = useCopy();

  const base =
    variant === "tile"
      ? "flex items-center justify-center gap-1.5 rounded bg-[#0073b1] hover:bg-[#005f93] px-2 py-2 text-xs font-bold text-white transition cursor-pointer"
      : "inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-ink transition hover:border-sky hover:bg-sky/5";

  const copyBase =
    variant === "tile"
      ? `flex items-center justify-center gap-1.5 rounded px-2 py-2 text-xs font-bold text-white transition cursor-pointer ${
          copied ? "bg-emerald-600" : "bg-[#2d3748] hover:bg-[#1a202c]"
        }`
      : `${base} ${copied ? "!border-go !text-go" : ""}`;

  const iconClass = variant === "tile" ? "text-xs text-white flex-shrink-0" : "text-[13px] text-teal";
  const wrapper = variant === "tile" ? "mt-3 grid grid-cols-4 gap-2 w-full" : "flex flex-wrap gap-2";

  return (
    <div className={wrapper}>
      {/* 1. Visit URL */}
      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className={base}>
        <FaArrowUpRightFromSquare className={iconClass} aria-hidden="true" />
        <span className="truncate">Visit URL</span>
      </a>

      {/* 2. QR Code */}
      <button type="button" onClick={() => onQR(shortUrl)} className={base}>
        <FaQrcode className={iconClass} aria-hidden="true" />
        <span>QR</span>
      </button>

      {/* 3. Share */}
      <button type="button" onClick={() => onShare(shortUrl)} className={base}>
        <FaShareNodes className={iconClass} aria-hidden="true" />
        <span>Share</span>
      </button>

      {/* 4. Copy Button */}
      <button
        type="button"
        onClick={() => copy(shortUrl)}
        className={copyBase}
      >
        {copied ? (
          <FaCheck className={variant === "tile" ? "text-xs text-white" : "text-base text-go"} aria-hidden="true" />
        ) : (
          <FaRegCopy className={iconClass} aria-hidden="true" />
        )}
        <span aria-live="polite">{copied ? "Copied!" : failed ? "Failed" : "Copy"}</span>
      </button>
    </div>
  );
}