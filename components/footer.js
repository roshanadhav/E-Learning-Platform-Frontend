import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="w-full px-6 md:px-12 py-8">

        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Coaching Logo"
              width={106}
              height={76}
            />
          </div>

          {/* Middle: Quote */}
          <p className="text-center text-sm md:text-base text-gray-600 italic max-w-xl">
            “Discipline and consistency create extraordinary results.”
          </p>

          {/* Right: Social Links */}
          <div className="flex items-center gap-5 text-gray-600">
            {/* LinkedIn */}
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-900 transition"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.5a2.48 2.48 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
              </svg>
            </Link>


            {/* YouTube */}
            <Link
              href="#"
              aria-label="YouTube"
              className="hover:text-gray-900 transition"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Core Academy
        </div>
      </div>
    </footer>
  );
}
