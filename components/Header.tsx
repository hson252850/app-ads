"use client";

import { useState } from "react";
import type { Brand, Contact, NavLink } from "@/types/content";

interface HeaderProps {
  brand: Brand;
  contact: Contact;
  nav: NavLink[];
}

export default function Header({ brand, contact, nav }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgb(251_248_253_/_0.92)] backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-[10px]">
        <a href="#trangchu" className="flex items-baseline gap-2">
          <span className="font-script text-[34px] leading-none text-purple-800">
            {brand.name}
          </span>
          <span className="font-heading text-[13px] uppercase tracking-[3px] text-purple-500">
            {brand.suffix}
          </span>
        </a>

        <nav className="hidden gap-7 text-[15px] nav:flex" aria-label="Điều hướng chính">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-purple-900 transition-colors hover:text-purple-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.tel}
          className="hidden rounded-full bg-purple-800 px-5 py-[10px] text-sm font-medium text-white transition-colors hover:bg-purple-900 nav:inline-block"
        >
          Đặt lịch: {contact.phoneDisplay}
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-[6px] nav:hidden"
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="block h-0.5 w-6 rounded-[2px] bg-purple-800" />
          <span className="block h-0.5 w-6 rounded-[2px] bg-purple-800" />
          <span className="block h-0.5 w-6 rounded-[2px] bg-purple-800" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-[14px] border-t border-line px-6 pb-5 pt-2 nav:hidden"
          aria-label="Điều hướng chính (mobile)"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-purple-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
