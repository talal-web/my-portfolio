"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // current route
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-purple-500">
          Talal Malik
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative text-white font-medium transition-all hover:text-purple-400 ${
                  pathname === item.href ? "text-purple-500" : ""
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <MobileMenu pathname={pathname} />
      </div>
    </nav>
  );
}

// Mobile menu
function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl focus:outline-none"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-2 w-40 bg-gray-900 rounded-lg shadow-lg py-2 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-white hover:bg-purple-600 rounded-md ${
                  pathname === item.href ? "bg-purple-700" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
