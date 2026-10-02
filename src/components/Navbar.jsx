import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  // TODO: point these at real pages/sections once they exist. They keep the original "#" behaviour.
  const navLink =
    "text-[15px] text-white/90 transition hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-header-grad shadow-md">
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-5 md:px-10 lg:px-[60px]">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-medium tracking-wide text-white">
            TINYURL
          </Link>
          <nav className="ml-6 hidden items-center gap-5 md:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => e.preventDefault()} className={navLink}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="text-white hover:underline">
            Log In
          </Link>
          <Link
            to="/signup"
            className="rounded bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded text-xl text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/15 bg-[#033958] px-5 pb-5 pt-2 md:hidden"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => e.preventDefault()}
              className="block border-b border-white/10 py-3 text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link to="/login" className="rounded border border-white/40 py-2.5 text-center font-semibold text-white">
              Log In
            </Link>
            <Link to="/signup" className="rounded bg-teal py-2.5 text-center font-semibold text-white">
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
