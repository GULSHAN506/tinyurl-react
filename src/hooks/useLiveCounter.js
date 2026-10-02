import { useEffect, useState } from "react";

// Same behaviour as the original script: +2..+8 every 800ms from a fixed start.
export default function useLiveCounter(start = 30606131800) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 7) + 2);
    }, 800);
    return () => clearInterval(id);
  }, []);

  return count;
}
