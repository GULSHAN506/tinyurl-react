import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareXTwitter, FaMicrosoft, FaEye, FaEyeSlash, FaXmark } from "react-icons/fa6";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password) {
      setNotice("Fill in your name, email and password.");
      return;
    }
    if (password.length < 8) {
      setNotice("Password must be at least 8 characters.");
      return;
    }
    // TODO(auth): send { name, email, password } to registration endpoint
    setNotice("Sign up isn't available yet — the backend has no registration endpoint.");
  };

  // Close / Cross button function to return home
  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-white flex overflow-hidden font-sans">
      {/* Left Side: Form Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-8 overflow-y-auto relative">
        
        {/* Brand Logo - Top Left Corner */}
        <div className="w-full pt-2 pb-4">
          <Link 
            to="/" 
            className="inline-block text-2xl font-black italic tracking-wider uppercase text-[#0D7391] hover:opacity-80 transition duration-200"
          >
            TINYURL
          </Link>
        </div>

        {/* Form Container */}
        <div className="my-auto w-full max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-1">Sign Up</h2>
          <p className="text-sm text-slate-600 mb-5">
            Already a user?{" "}
            <Link to="/login" className="font-bold text-[#0D7391] hover:underline">
              Log In
            </Link>
          </p>

          <p className="text-xs text-center text-slate-400 mb-4">continue with</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="signup-name" className="block text-xs font-bold text-slate-700 mb-1">
                Name
              </label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D7391] focus:bg-white transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="signup-email" className="block text-xs font-bold text-slate-700 mb-1">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D7391] focus:bg-white transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="signup-password" className="block text-xs font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password (Min. 8 characters)"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D7391] focus:bg-white transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-sm focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Terms Disclaimer */}
            <p className="text-[11px] text-slate-500 leading-tight pt-1">
              By Signing Up, you agree to our{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#0D7391] underline">Terms of Service</a>,{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#0D7391] underline">Privacy Policy</a>, and{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#0D7391] underline">Use of Cookies</a>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#5a6370] hover:bg-[#012A49] text-white font-bold text-sm rounded-md transition duration-200 shadow-sm cursor-pointer mt-1"
            >
              Sign Up
            </button>

            {/* Error/Notice Message */}
            {notice && (
              <p role="status" className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                {notice}
              </p>
            )}
          </form>

          {/* Divider */}
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <span className="relative bg-white px-3 text-xs text-slate-400 font-medium">or</span>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            >
              <FcGoogle className="text-base flex-shrink-0" />
              <span>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            >
              <FaFacebook className="text-base text-[#1877f2] flex-shrink-0" />
              <span>Facebook</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            >
              <FaSquareXTwitter className="text-base text-black flex-shrink-0" />
              <span>X (Twitter)</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 py-2 px-2 border border-slate-200 rounded hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            >
              <FaMicrosoft className="text-base text-[#f25022] flex-shrink-0" />
              <span>Microsoft</span>
            </button>
          </div>
        </div>

        {/* Empty Footer spacing */}
        <div className="pb-2"></div>
      </div>

      {/* Right Side: Banner Side with Cross (Close) Icon */}
      <div 
        className="hidden md:flex w-1/2 h-full p-8 text-white flex-col justify-center items-center text-center relative overflow-y-auto"
        style={{
          background: "radial-gradient(circle at center, #0D7391 0%, #012A49 100%)"
        }}
      >
        {/* Top Right Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close"
          className="absolute top-6 right-6 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition duration-200 cursor-pointer focus:outline-none"
        >
          <FaXmark className="text-2xl" />
        </button>

        <div className="relative z-10 space-y-4 max-w-lg flex flex-col items-center">
          {/* Public Folder Image for Sign Up */}
          <div className="w-full max-w-md flex justify-center">
            <img 
              src="/sign-up-image.png" 
              alt="Amplify Your Success Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl max-h-[420px]"
            />
          </div>

          {/* Banner Text */}
          <div className="space-y-1">
            <h3 className="text-3xl font-extrabold tracking-tight">Amplify Your Success</h3>
            <p className="text-base font-medium opacity-90">
              with Data-Driven Shortened Links
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}