import CopyIconButton from "./CopyIconButton";
import LinkActions from "./LinkActions";

export default function ResultBox({ result, onQR, onShare, onReset }) {
  const { longUrl, shortUrl } = result;

  return (
    <div aria-live="polite" className="space-y-4">
      {/* 1. Long URL Section */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-1.5">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
          Long URL
        </label>
        <div className="relative">
          <input
            type="text"
            readOnly
            value={longUrl}
            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md text-gray-700 whitespace-nowrap overflow-x-auto focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 2. TinyURL Link Section */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-1.5">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          TinyURL Link
        </label>
        <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-300 rounded-md">
          <input
            type="text"
            readOnly
            value={shortUrl}
            className="w-full bg-transparent text-sm font-semibold text-blue-600 outline-none whitespace-nowrap overflow-x-auto"
          />
          <CopyIconButton text={shortUrl} />
        </div>
      </div>

      {/* 3. Action Buttons (Visit URL, QR, Share, Copy) */}
      <div className="pt-1">
        <LinkActions shortUrl={shortUrl} onQR={onQR} onShare={onShare} variant="tile" />
      </div>

      {/* 4. Shorten Another Link (Green Button) */}
      <button
        type="button"
        onClick={onReset}
        className="w-full mt-2 py-3 px-4 bg-[#2e7d32] hover:bg-[#256627] text-white text-sm font-bold rounded-md transition duration-200 shadow-sm"
      >
        Shorten Another Link
      </button>
    </div>
  );
}