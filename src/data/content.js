// Copy and asset paths from the original index.html. Assets live in /public/assets.
export const NAV_LINKS = [
  { label: "Plans", href: "#plans" },
  { label: "Features", href: "#features" },
  { label: "Domains", href: "#domains" },
  { label: "Resources", href: "#resources" },
];

export const PLAN_ITEMS = [
  {
    title: "Detailed Link Analytics",
    text: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
    img: "/assets/feature-1.webp",
    alt: "Analytics",
  },
  {
    title: "Fully Branded Domains",
    text: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
    img: "/assets/feature-2.webp",
    alt: "Domains",
  },
  {
    title: "Bulk Short URLs",
    text: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
    img: "/assets/feature-3.webp",
    alt: "Bulk",
  },
  {
    title: "Link Management",
    text: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
    img: "/assets/feature-4.webp",
    alt: "Management",
  },
];

// Index order matches the image order (left column 0-2, right column 3-5).
export const DYNAMIC_FEATURES = [
  {
    title: "Unlimited Tracked Clicks",
    text: "We don't believe in making you suffer for your success: track as many clicks as you earn!",
    img: "/assets/card-feature-0.webp",
    alt: "Analytics",
  },
  {
    title: "Detailed Link Analytics",
    text: "Get actionable, detailed insights into your social media, emails, and ads performance.",
    img: "/assets/card-feature-1.webp",
    alt: "Charts",
  },
  {
    title: "Branded Domains",
    text: "Links shortened using your own custom domain are more professional and trustworthy.",
    img: "/assets/card-feature-2.webp",
    alt: "Branding",
  },
  {
    title: "Fully Custom Links",
    text: "Create short links that put your brand front-and-center with quick attaching tools.",
    img: "/assets/card-feature-3.webp",
    alt: "Custom",
  },
  {
    title: "Bulk Short URLs",
    text: "Shorten several links in a single go using our platform or powerful API.",
    img: "/assets/card-feature-4.webp",
    alt: "Bulk",
  },
  {
    title: "Link Management",
    text: "Manage thousands of links with intuitive features from a convenient dashboard.",
    img: "/assets/card-feature-5.webp",
    alt: "Management",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Features",
    links: ["Link Editor", "Link Management", "Branded Links", "Short URL Tracking", "QR Code Generator", "Short URL API"],
  },
  { title: "Resources", links: ["Blog", "For Developers", "Our Proven Process", "About Us"] },
  { title: "Contact Us", links: ["Help Desk", "Contact Sales", "Contact Support", "Report Abuse"] },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility Statement", "Privacy Manager"],
  },
];
