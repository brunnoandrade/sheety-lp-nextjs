"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Início",
      to: "home",
    },
    {
      title: "Recursos",
      to: "features",
    },
    {
      title: "FAQ",
      to: "faq",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-[#0a0f0b] border-b border-green-800/30 transition-all duration-300 ${isScrolled ? "shadow-lg shadow-green-900/10" : ""
        }`}
    >
      <div className="flex items-center text-white justify-between mx-auto w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-2 z-10">
          <b className="bi bi-send-fill text-xl text-[#a2f25c]">Sheety</b>{" "}
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex text-sm gap-8">
          {navigationItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={800}
              offset={-60}
              className="hover:underline transition-all cursor-pointer text-green-100/90 hover:text-[#a2f25c]"
              spy={true}
              activeClass="underline text-[#a2f25c]"
            >
              {item.title}
            </ScrollLink>
          ))}
        </nav>

        <ScrollLink
          to="hero"
          smooth={true}
          duration={800}
          offset={-70}
          className="text-sm py-1 px-4 border rounded-lg hover:bg-[#a2f25c] hover:text-[#0a0f0b] transition-all z-10 cursor-pointer border-[#a2f25c]/70 text-green-50 font-medium"
        >
          Acesso antecipado
        </ScrollLink>
      </div>
    </header>
  );
}
