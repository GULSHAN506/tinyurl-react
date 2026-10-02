import { useEffect, useState } from "react";
import QRCode from "qrcode";

// Generates a PNG data URL for `value`. Re-runs whenever `value` changes.
export default function useQrDataUrl(value, width = 640) {
  const [state, setState] = useState({ dataUrl: "", error: false });

  useEffect(() => {
    let cancelled = false;

    if (!value) {
      setState({ dataUrl: "", error: false });
      return undefined;
    }

    QRCode.toDataURL(value, {
      width,
      margin: 2,
      errorCorrectionLevel: "M",
      color: { dark: "#002342", light: "#ffffff" },
    })
      .then((dataUrl) => {
        if (!cancelled) setState({ dataUrl, error: false });
      })
      .catch(() => {
        if (!cancelled) setState({ dataUrl: "", error: true });
      });

    return () => {
      cancelled = true;
    };
  }, [value, width]);

  return state;
}
