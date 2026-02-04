"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="w-full h-16 px-6 md:px-12 flex items-center justify-between">

        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Coaching Logo"
            width={106}
            height={76}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>
          <Link href="/faculty" className="hover:text-gray-900 transition">
            Faculty
          </Link>
          <Link
            href="/student-login"
            className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-100 transition"
          >
            Student Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M4 7h18M4 13h18M4 19h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full border-t border-gray-100 bg-white">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/faculty" onClick={() => setOpen(false)}>
              Faculty
            </Link>
            <Link
              href="/student-login"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-full border border-gray-300 text-gray-900 text-center"
            >
              Student Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
