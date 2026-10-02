import Modal from "./Modal";
import QRCodeImage from "./QRCodeImage";

export default function QRModal({ url, onClose }) {
  return (
    <Modal open={Boolean(url)} onClose={onClose} title="QR Code">
      {url && (
        <>
          <QRCodeImage value={url} />
          <p className="mt-4 break-all text-center text-sm font-semibold text-link">{url}</p>
          <p className="mt-1 text-center text-xs text-slate-500">
            Scan with a phone camera to open this Tiny URL.
          </p>
        </>
      )}
    </Modal>
  );
}
