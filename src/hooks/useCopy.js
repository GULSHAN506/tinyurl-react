import { useCallback, useEffect, useRef, useState } from "react";
import { copyText } from "../utils/clipboard";

// Returns { copied, failed, copy }. `copied` stays true for ~2s after a successful copy.
export default function useCopy(resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text) => {
      const ok = await copyText(text);
      setCopied(ok);
      setFailed(!ok);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setCopied(false);
        setFailed(false);
      }, resetMs);
      return ok;
    },
    [resetMs]
  );

  return { copied, failed, copy };
}
