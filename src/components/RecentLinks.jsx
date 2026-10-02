import { FaCircleExclamation, FaLink } from "react-icons/fa6";
import LinkActions from "./LinkActions";

export default function RecentLinks({ links, onQR, onShare, onClear, className = "" }) {
  return (
    <section className={className} aria-labelledby="recent-links-title">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 id="recent-links-title" className="text-xl font-bold text-white">
          Your Recent Links:
        </h3>
        {links.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-sm text-white/80 underline-offset-2 transition hover:text-white hover:underline"
          >
            Clear history
          </button>
        )}
      </div>

      {links.length === 0 ? (
        <div className="flex items-center gap-2.5 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-md">
          <FaCircleExclamation aria-hidden="true" className="text-base text-slate-700" />
          <span>No links yet in your history</span>
        </div>
      ) : (
        <ul className="divide-y divide-slate-200 overflow-hidden rounded-xl bg-white text-ink shadow-md">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs text-slate-500" title={link.longUrl}>
                  {link.longUrl}
                </p>
                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-start gap-2 break-all text-[15px] font-semibold text-link hover:underline"
                >
                  <FaLink aria-hidden="true" className="mt-1 shrink-0 text-xs text-slate-500" />
                  {link.shortUrl}
                </a>
              </div>

              <div className="md:shrink-0">
                <LinkActions
                  shortUrl={link.shortUrl}
                  onQR={onQR}
                  onShare={onShare}
                  variant="inline"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
