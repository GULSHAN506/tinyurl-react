// "TinyURL Plans Include" card: Large sharp images, 4-line dark text, transparent bg and non-cutting zoom
export default function FeatureCard({ title, text, img, alt }) {
  return (
    <article className="group flex-1 text-center sm:text-left flex flex-col justify-between transition-all duration-300 py-2">
      {/* Top Text Section: Larger font size, dark black/navy text, exact 4 lines */}
      <div>
        <h3 className="text-xl font-extrabold text-[#012A49] group-hover:text-[#0D7391] transition-colors duration-200 mb-2.5">
          {title}
        </h3>
        <p className="text-[15px] font-semibold leading-relaxed text-slate-900 max-w-[280px] mx-auto sm:mx-0 min-h-[5.5rem]">
          {text}
        </p>
      </div>

      {/* Image Container: Large image height (h-56) with non-cutting overflow-visible */}
      <div className="mt-8 flex h-56 items-center justify-center overflow-visible bg-transparent pt-2">
        <img
          src={img}
          alt={alt}
          loading="eager"
          decoding="async"
          className="w-full h-full max-h-56 object-contain mix-blend-multiply transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-3 drop-shadow-sm group-hover:drop-shadow-lg"
        />
      </div>
    </article>
  );
}