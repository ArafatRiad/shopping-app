import Link from "next/link";
import BG from "@/public/bg.jpg";

export default function Home() {
  return (
    <header
      className="relative text-white px-6 shadow-lg min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>{" "}
      {/* Optional dark overlay */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Site Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Shopping Site
          </h1>
        </div>

        {/* Login & Register Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link
            href="/login"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
      {/* Footer at Bottom */}
      <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-full bg-gray-800/80 py-3 text-sm">
        © 2025 MyWebsite. All rights reserved.
      </footer>
    </header>
  );
}
