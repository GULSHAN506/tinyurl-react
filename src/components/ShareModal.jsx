import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Modal from "./Modal";
import CopyIconButton from "./CopyIconButton";

function buildTargets(url) {
  const encoded = encodeURIComponent(url);
  const message = "Check out this link:";

  return [
    {
      name: "Facebook",
      icon: FaFacebookF,
      color: "#1877F2",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      name: "X / Twitter",
      icon: FaXTwitter,
      color: "#000000",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodeURIComponent(message)}`,
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "#25D366",
      href: `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      color: "#0A66C2",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      name: "Email",
      icon: FaEnvelope,
      color: "#5b6b7b",
      href: `mailto:?subject=${encodeURIComponent("Check out this link")}&body=${encodeURIComponent(url)}`,
      sameTab: true,
    },
  ];
}

export default function ShareModal({ url, onClose }) {
  const targets = url ? buildTargets(url) : [];

  return (
    <Modal open={Boolean(url)} onClose={onClose} title="Share Tiny URL">
      {url && (
        <>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {targets.map(({ name, icon: Icon, color, href, sameTab }) => (
              <li key={name}>
                <a
                  href={href}
                  {...(sameTab ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 px-2 py-4 text-sm font-semibold text-ink transition hover:border-sky hover:bg-sky/5"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full text-lg text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-mist px-3 py-2.5">
            <span className="min-w-0 break-all text-sm font-semibold text-link">{url}</span>
            <CopyIconButton text={url} />
          </div>
        </>
      )}
    </Modal>
  );
}
