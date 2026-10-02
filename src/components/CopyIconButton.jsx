import { FaCheck, FaRegCopy } from "react-icons/fa6";
import useCopy from "../hooks/useCopy";

// Small "Copy" button (icon + label) that switches to "Copied!" after copying.
export default function CopyIconButton({ text, className = "" }) {
  const { copied, failed, copy } = useCopy();

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={copied ? "Copied" : "Copy Tiny URL"}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-semibold transition ${
        copied ? "text-go" : "text-teal hover:bg-teal/10"
      } ${className}`}
    >
      {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied!" : failed ? "Copy failed" : "Copy"}</span>
    </button>
  );
}
