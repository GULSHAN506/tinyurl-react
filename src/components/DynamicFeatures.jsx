import { useEffect, useRef, useState } from "react";
import { DYNAMIC_FEATURES } from "../data/content";

// Behaviour preserved from the original script:
//  - the active feature auto-advances every 3s
//  - hovering a feature stops rotation and shows its image
//  - leaving a feature restarts rotation
// Added: focus/click also select a feature, so it works with keyboard and touch.
export default function DynamicFeatures() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(0);
  activeRef.current = active;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((activeRef.current + 1) % DYNAMIC_FEATURES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const renderBox = (feature, index) => {
    const isActive = index === active;
    return (
      <div
        key={feature.title}
        tabIndex={0}
        role="button"
        aria-pressed={isActive}
        onMouseEnter={() => {
          setPaused(true);
          setActive(index);
        }}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => {
          setPaused(true);
          setActive(index);
        }}
        onBlur={() => setPaused(false)}
        onClick={() => setActive(index)}
        className={`cursor-pointer rounded-xl border border-transparent p-5 text-left transition hover:bg-[#e9ecef] ${
          isActive ? "bg-[#e9ecef]" : ""
        }`}
      >
        <h3 className="mb-2 text-lg font-bold text-ink">{feature.title}</h3>
        <p className="text-sm leading-normal text-slate-600">{feature.text}</p>
      </div>
    );
  };

  return (
    <section id="features" className="bg-mist px-5 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-stretch gap-5 min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-center">
        <div className="order-2 flex flex-1 flex-col gap-2.5 min-[1100px]:order-none">
          {DYNAMIC_FEATURES.slice(0, 3).map((f, i) => renderBox(f, i))}
        </div>

        <div className="relative order-1 h-[300px] flex-[1.5] sm:h-[400px] min-[1100px]:order-none min-[1100px]:h-[500px]">
          {DYNAMIC_FEATURES.map((f, i) => (
            <img
              key={f.img}
              src={f.img}
              alt={f.alt}
              aria-hidden={i !== active}
              className={`absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[600ms] ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="order-3 flex flex-1 flex-col gap-2.5 min-[1100px]:order-none">
          {DYNAMIC_FEATURES.slice(3).map((f, i) => renderBox(f, i + 3))}
        </div>
      </div>
    </section>
  );
}
