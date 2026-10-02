import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareXTwitter, FaMicrosoft, FaEye, FaEyeSlash, FaXmark } from "react-icons/fa6";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setNotice("Enter your email and password.");
      return;
    }
    setNotice("Log in isn't available yet — the backend has no authentication endpoint.");
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
        <div className="w-full pt-2 pb-6">
          <Link 
            to="/" 
            className="inline-block text-2xl font-black italic tracking-wider uppercase text-[#0D7391] hover:opacity-80 transition duration-200"
          >
            TINYURL
          </Link>
        </div>

        {/* Form Container */}
        <div className="my-auto w-full max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-1">Log In</h2>
          <p className="text-sm text-slate-600 mb-6">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-[#0D7391] hover:underline">
              Sign Up
            </Link>
          </p>

          <p className="text-xs text-center text-slate-400 mb-4">continue with</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-bold text-slate-700 mb-1">
                Email
              </label>
              <input
                id="login-email"
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
              <label htmlFor="login-password" className="block text-xs font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
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

            {/* Checkbox & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#0D7391] focus:ring-[#0D7391] mr-2"
                />
                Keep me logged in
              </label>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-bold text-[#0D7391] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#5a6370] hover:bg-[#012A49] text-white font-bold text-sm rounded-md transition duration-200 shadow-sm cursor-pointer"
            >
              Log In
            </button>

            {/* Error/Notice Message */}
            {notice && (
              <p role="status" className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                {notice}
              </p>
            )}
          </form>

          {/* Divider */}
          <div className="relative my-5 text-center">
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

        {/* Empty Footer spacing to keep logo on top left */}
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
          {/* Public Folder Image */}
          <div className="w-full max-w-md flex justify-center">
            <img 
              src="/login-image.png" 
              alt="Welcome Back Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl max-h-[420px]"
            />
          </div>

          {/* Banner Text */}
          <div className="space-y-1">
            <h3 className="text-3xl font-extrabold tracking-tight">Welcome Back!</h3>
            <p className="text-base font-medium opacity-90">
              Your Links Have Missed You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}