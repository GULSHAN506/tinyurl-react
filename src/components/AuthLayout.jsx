import { Link } from "react-router-dom";

// Shared shell for Log In / Sign Up.
export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-navy-deep via-navy to-teal-dark px-4 pb-12 pt-[100px]">
      <div className="w-full max-w-[440px]">
        <div className="rounded-2xl bg-white p-6 text-ink shadow-card sm:p-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
        <p className="mt-5 text-center text-sm text-white/85">{footer}</p>
        <p className="mt-2 text-center text-sm">
          <Link to="/" className="text-white/70 hover:text-white hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}

export function Field({ id, label, type = "text", value, onChange, placeholder, autoComplete, hint }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-[#dcdcdc] px-3 py-2.5 text-sm text-black focus:border-teal-bright focus:outline-none focus:ring-2 focus:ring-teal-bright/30"
      />
      {hint && <p className="mt-1 text-[11px] text-slate-500">{hint}</p>}
    </div>
  );
}
