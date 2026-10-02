import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShortenerCard from "../components/ShortenerCard";
import RecentLinks from "../components/RecentLinks";
import FeatureCard from "../components/FeatureCard";
import DynamicFeatures from "../components/DynamicFeatures";
import QRModal from "../components/QRModal";
import ShareModal from "../components/ShareModal";
import Footer from "../components/Footer";
import useRecentLinks from "../hooks/useRecentLinks";
import useLiveCounter from "../hooks/useLiveCounter";
import { PLAN_ITEMS } from "../data/content";

const scrollToPlans = () =>
  document.getElementById("plans")?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const navigate = useNavigate();
  const { links, addLink, clearLinks } = useRecentLinks();
  const [qrUrl, setQrUrl] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);
  const counter = useLiveCounter();

  const closeQR = useCallback(() => setQrUrl(null), []);
  const closeShare = useCallback(() => setShareUrl(null), []);
  const goSignup = () => navigate("/signup");

  return (
    <>
      {/* HERO */}
      <section className="px-5 pb-12 pt-[110px] md:px-10 lg:px-[60px] lg:pt-[140px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="min-w-0 lg:w-[55%]">
            <h1 className="text-[34px] font-bold leading-[1.2] sm:text-[44px]">
              URL Shortener,
              <br />
              Branded Short Links
              <br />
              &amp; Analytics
            </h1>

            <p className="my-5 max-w-[500px] text-[#e0e0e0]">
              Welcome to the original link shortener — simplifying the Internet through the power of
              the URL since 2002.
              <br />
              <br />
              You can use branded domains for fully custom links, track link analytics, and enjoy
              other powerful features with our paid plans.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToPlans}
                className="rounded-md bg-white px-5 py-2.5 font-semibold text-teal-dark transition hover:bg-slate-100"
              >
                View Plans
              </button>
              <button
                type="button"
                onClick={goSignup}
                className="rounded-md bg-teal px-5 py-2.5 font-semibold text-white transition hover:bg-teal-hero"
              >
                Create Free Account
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[420px] lg:shrink-0">
            <ShortenerCard onShortened={addLink} onQR={setQrUrl} onShare={setShareUrl} />
          </div>

        </div>

        {/* Recent links (browser localStorage) - full width under the hero on every screen size */}
        <RecentLinks
          links={links}
          onQR={setQrUrl}
          onShare={setShareUrl}
          onClear={clearLinks}
          className="mx-auto mt-10 max-w-[1400px]"
        />
      </section>

      {/* PLANS INCLUDE */}
      <section id="plans" className="bg-mist px-5 py-16 text-center text-[#333] md:px-10 lg:px-[60px] lg:py-20">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-10 text-3xl font-extrabold text-ink">TinyURL Plans Include:</h2>
          <div className="mx-auto grid max-w-md gap-8 md:max-w-none md:grid-cols-2 xl:grid-cols-4">
            {PLAN_ITEMS.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO FEATURE (split) */}
      <section id="domains" className="w-full bg-mist">
        <div className="flex min-h-[550px] flex-col md:flex-row md:items-stretch">
          <div className="h-[260px] overflow-hidden bg-black sm:h-[320px] md:h-auto md:flex-[1.2]">
            <video autoPlay loop muted playsInline className="block h-full w-full object-cover">
              <source src="/assets/shortener-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex items-center justify-center bg-teal-bright px-5 py-10 text-center text-white md:flex-1 md:px-10 md:py-[60px] md:text-left">
            <div className="max-w-[450px]">
              <h2 className="mb-5 text-[28px] font-bold leading-[1.2] md:text-[34px]">
                Link Shortening Done Quick and Easy
              </h2>
              <p className="mb-5 leading-relaxed opacity-95">
                Our URL shortener is not only among the first-ever link shorteners on the Internet —
                it&apos;s the best out there.
              </p>
              <p className="mb-5 leading-relaxed opacity-95">
                Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off-
                and online.
              </p>
              <p className="mb-5 leading-relaxed opacity-95">
                Wave goodbye to long, clunky links and give your audiences the experiences they
                deserve!
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start">
                <button
                  type="button"
                  onClick={scrollToPlans}
                  className="rounded bg-white px-7 py-3.5 text-[15px] font-bold text-ink transition hover:bg-slate-200"
                >
                  View Plans
                </button>
                {/* TODO: link to a real sales contact page/form. */}
                <button
                  type="button"
                  className="rounded bg-ink px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-black"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist px-5 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-ink md:text-[32px]">
            Your One-Stop Solution for Branding and Managing Links
          </h2>
          <p className="mx-auto mb-9 max-w-3xl text-base text-slate-600 md:text-lg">
            We offer a comprehensive suite of premium features to allow users to brand and manage
            links conveniently and confidently.
          </p>
          <button
            type="button"
            onClick={scrollToPlans}
            className="rounded-md bg-teal-dark px-9 py-3.5 font-semibold text-white transition hover:bg-[#04354d]"
          >
            View Plans
          </button>
        </div>
      </section>

      {/* DYNAMIC FEATURES */}
      <DynamicFeatures />

      {/* STATS + VIDEO */}
      <section className="w-full overflow-hidden bg-navy">
        <div className="flex min-h-[550px] flex-col md:flex-row">
          <div className="flex items-center justify-center px-6 py-14 md:flex-1 md:p-[60px]">
            <div className="max-w-[550px]">
              <h2 className="mb-6 text-[30px] font-extrabold leading-[1.1] md:text-[38px]">
                Transforming the Digital Landscape Since ‘02
              </h2>
              <p className="mb-12 text-lg opacity-90">
                TinyURL has created billions of short links for marketers, influencers, small
                business owners, and large businesses.
              </p>

              <div className="flex flex-col gap-1 sm:gap-0">
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <div className="text-[32px] font-extrabold sm:min-w-[280px]">Billions</div>
                  <div className="opacity-80">of redirects per month</div>
                </div>
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <div className="text-[32px] font-extrabold sm:min-w-[280px]">24 years</div>
                  <div className="opacity-80">of shortening URLs</div>
                </div>
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <div
                    id="live-tiny-counter"
                    className="whitespace-nowrap text-[28px] font-extrabold tabular-nums sm:min-w-[280px] sm:text-[32px]"
                  >
                    {counter.toLocaleString()}
                  </div>
                  <div className="opacity-80">TinyURLs created</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[260px] sm:h-[320px] md:h-auto md:flex-1">
            <video autoPlay loop muted playsInline className="block h-full w-full object-cover">
              <source src="/assets/platform-highlight-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* READY CTA + FOOTER */}
      <div className="bg-ready-grad">
        <section className="px-5 py-20 text-center">
          <h2 className="mb-5 text-[28px] font-extrabold md:text-[32px]">
            Ready for Shorter, Smarter Links?
          </h2>
          <p className="mx-auto mb-8 max-w-[850px] leading-normal opacity-90">
            Transform a long link into a short, trackable one using our platform. Create a free
            account or subscribe to a paid plan today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={scrollToPlans}
              className="rounded bg-white px-8 py-3 text-[15px] font-bold text-slate-600 transition hover:bg-slate-100"
            >
              View Plans
            </button>
            <button
              type="button"
              onClick={goSignup}
              className="rounded bg-teal-hero px-8 py-3 text-[15px] font-bold text-white transition hover:bg-teal"
            >
              Create Free Account
            </button>
          </div>
        </section>
        <Footer />
      </div>

      <QRModal url={qrUrl} onClose={closeQR} />
      <ShareModal url={shareUrl} onClose={closeShare} />
    </>
  );
}
