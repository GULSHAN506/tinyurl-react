import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FOOTER_COLUMNS } from "../data/content";

const SOCIALS = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "X (Twitter)", icon: FaXTwitter },
];

export default function Footer() {
  // TODO: replace "#" with real destinations.
  return (
    <footer id="resources" className="bg-footer-grad px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:flex lg:gap-[70px] xl:gap-[100px]">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xl font-bold lg:text-2xl">{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="mb-2 block text-[15px] hover:underline"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:text-right">
          <div className="mb-4 flex gap-4 lg:justify-end">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sm transition hover:bg-white/25"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="lg:text-center">
            <div className="text-3xl font-bold tracking-[2px]">TINYURL</div>
            <p className="mt-1 text-[13px] leading-normal">
              © 2006 TinyURL LLC
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
