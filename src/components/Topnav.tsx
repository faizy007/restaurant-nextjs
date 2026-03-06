"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about-us" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Contact Us", href: "/contact-us" },
];

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "text-sm transition",
        active ? "text-amber-800 font-semibold" : "text-neutral-700 hover:text-amber-800",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-amber-500/20 ring-1 ring-amber-700/30" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">RICKY&apos;S</div>
            <div className="text-xs text-neutral-500">RESTAURANT</div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname === l.href}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="hidden rounded-full bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800 md:inline-flex"
          >
            Reservation
          </Link>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} active={pathname === l.href}>
                  {l.label}
                </NavLink>
              ))}
              <Link
                href="/contact-us"
                className="mt-2 inline-flex w-fit rounded-full bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800"
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}