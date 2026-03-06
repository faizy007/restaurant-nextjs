"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

type NavItem = {
  name: string;
  href?: string;
  children?: NavItem[];
};

const Navbar = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openDesktopChild, setOpenDesktopChild] = useState<string | null>(null);
  const [openMobileKey, setOpenMobileKey] = useState<string | null>(null);
  const [openMobileChildKey, setOpenMobileChildKey] = useState<string | null>(null);

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const childCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "HOME", href: "/" },
      { name: "ABOUT US", href: "/about-us" },
      {
        name: "MENU",
        href: "/menu",
        children: [{ name: "CATERING", href: "/menu/catering" }],
      },
      {
        name: "CATERING",
        href: "/catering",
        children: [
          {
            name: "PRIVATE CATERING",
            children: [
              { name: "WEDDING CATERING", href: "/catering/private/wedding" },
              { name: "YACHT PARTY CATERING", href: "/catering/private/yacht" },
            ],
          },
          { name: "CORPORATE CATERING", href: "/catering/corporate" },
        ],
      },
      { name: "CONTACT US", href: "/contact-us" },
    ],
    []
  );

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!desktopRef.current) return;
      if (!desktopRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
        setOpenDesktopChild(null);
      }
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setOpenDesktopChild(null);
        setMobileOpen(false);
        setOpenMobileKey(null);
        setOpenMobileChildKey(null);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (childCloseTimeoutRef.current) clearTimeout(childCloseTimeoutRef.current);
    };
  }, []);

  const clearDesktopClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const clearChildClose = () => {
    if (childCloseTimeoutRef.current) {
      clearTimeout(childCloseTimeoutRef.current);
      childCloseTimeoutRef.current = null;
    }
  };

  const scheduleDesktopClose = () => {
    clearDesktopClose();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDesktop(null);
      setOpenDesktopChild(null);
    }, 180);
  };

  const scheduleChildClose = () => {
    clearChildClose();
    childCloseTimeoutRef.current = setTimeout(() => {
      setOpenDesktopChild(null);
    }, 180);
  };

  const isRouteActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkBase =
    "text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors";
  const linkDefault = "text-gold hover:text-[#333]";
  const linkActive = "text-[#333]";
  const dropdownBox =
    "absolute left-0 top-full mt-3 w-56 rounded-xl border border-black/10 bg-white shadow-lg";
  const dropdownItem =
    "flex w-full items-center justify-between px-4 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#333] hover:text-gold transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={desktopRef}>
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Ricky's Restaurant"
                width={220}
                height={70}
                className="h-14 w-auto object-contain md:h-16"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const parentActive = isRouteActive(item.href);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={`${linkBase} ${parentActive ? linkActive : linkDefault}`}
                  >
                    {item.name}
                  </Link>
                );
              }

              const isOpen = openDesktop === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    clearDesktopClose();
                    setOpenDesktop(item.name);
                    setOpenDesktopChild(null);
                  }}
                  onMouseLeave={scheduleDesktopClose}
                >
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href!}
                      className={`${linkBase} ${parentActive ? linkActive : linkDefault}`}
                    >
                      {item.name}
                    </Link>

                    <button
                      type="button"
                      className={`${linkBase} ${parentActive ? linkActive : linkDefault} inline-flex items-center`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDesktop((prev) => (prev === item.name ? null : item.name));
                        setOpenDesktopChild(null);
                      }}
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                    >
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      className={dropdownBox}
                      role="menu"
                      onMouseEnter={clearDesktopClose}
                      onMouseLeave={scheduleDesktopClose}
                    >
                      <div className="py-2">
                        {item.children!.map((child) => {
                          const hasGrandChildren = !!child.children?.length;
                          const childActive = isRouteActive(child.href);

                          if (!hasGrandChildren) {
                            return (
                              <Link
                                key={child.name}
                                href={child.href!}
                                className={`${dropdownItem} ${childActive ? "!text-gold" : ""}`}
                                onClick={() => {
                                  setOpenDesktop(null);
                                  setOpenDesktopChild(null);
                                }}
                              >
                                <span>{child.name}</span>
                              </Link>
                            );
                          }

                          const childOpen = openDesktopChild === child.name;

                          return (
                            <div
                              key={child.name}
                              className="relative"
                              onMouseEnter={() => {
                                clearChildClose();
                                setOpenDesktopChild(child.name);
                              }}
                              onMouseLeave={scheduleChildClose}
                            >
                              <button
                                type="button"
                                className={`${dropdownItem}`}
                                onClick={() =>
                                  setOpenDesktopChild((prev) =>
                                    prev === child.name ? null : child.name
                                  )
                                }
                                aria-haspopup="menu"
                                aria-expanded={childOpen}
                              >
                                <span>{child.name}</span>
                                <ChevronRight className="h-4 w-4 opacity-70" />
                              </button>

                              {childOpen && (
                                <div
                                  className="absolute left-full top-0 ml-2 w-64 rounded-xl border border-black/10 bg-white shadow-lg"
                                  role="menu"
                                  onMouseEnter={clearChildClose}
                                  onMouseLeave={scheduleChildClose}
                                >
                                  <div className="py-2">
                                    {child.children!.map((gc) => {
                                      const grandChildActive = isRouteActive(gc.href);

                                      return (
                                        <Link
                                          key={gc.name}
                                          href={gc.href!}
                                          className={`${dropdownItem} ${
                                            grandChildActive ? "!text-gold" : ""
                                          }`}
                                          onClick={() => {
                                            setOpenDesktop(null);
                                            setOpenDesktopChild(null);
                                          }}
                                        >
                                          <span>{gc.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/reservation"
              className="bg-gold text-white px-9 py-3 rounded-md text-xs font-bold tracking-[0.18em] uppercase hover:bg-gold-hover transition-colors"
            >
              Reservation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-[#333] hover:text-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const parentActive = isRouteActive(item.href);

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href!}
                      className={`py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-colors ${
                        parentActive ? "text-gold" : "text-[#333] hover:text-gold"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }

                const open = openMobileKey === item.name;

                return (
                  <div key={item.name} className="py-2">
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={item.href!}
                        className={`py-2 text-sm font-semibold tracking-[0.14em] uppercase transition-colors ${
                          parentActive ? "text-gold" : "text-[#333] hover:text-gold"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>

                      <button
                        type="button"
                        className={`${parentActive ? "text-gold" : "text-[#333] hover:text-gold"}`}
                        onClick={() => {
                          setOpenMobileKey((prev) => (prev === item.name ? null : item.name));
                          setOpenMobileChildKey(null);
                        }}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {open && (
                      <div className="mt-2 flex flex-col border-l border-black/10 pl-3">
                        {item.children!.map((child) => {
                          const hasGrand = !!child.children?.length;
                          const childActive = isRouteActive(child.href);

                          if (!hasGrand) {
                            return (
                              <Link
                                key={child.name}
                                href={child.href!}
                                className={`py-2 text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                                  childActive ? "text-gold" : "text-[#333] hover:text-gold"
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.name}
                              </Link>
                            );
                          }

                          const childOpen = openMobileChildKey === child.name;

                          return (
                            <div key={child.name} className="py-1">
                              <button
                                type="button"
                                className="flex w-full items-center justify-between py-2 text-[13px] font-semibold tracking-[0.12em] uppercase text-[#333] hover:text-gold"
                                onClick={() =>
                                  setOpenMobileChildKey((prev) =>
                                    prev === child.name ? null : child.name
                                  )
                                }
                              >
                                <span>{child.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    childOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {childOpen && (
                                <div className="mt-1 flex flex-col border-l border-black/10 pl-3">
                                  {child.children!.map((gc) => {
                                    const grandChildActive = isRouteActive(gc.href);

                                    return (
                                      <Link
                                        key={gc.name}
                                        href={gc.href!}
                                        className={`py-2 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                                          grandChildActive
                                            ? "text-gold"
                                            : "text-[#333] hover:text-gold"
                                        }`}
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {gc.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/reservation"
                className="mt-4 inline-flex w-full justify-center rounded-md bg-gold px-6 py-3 text-xs font-bold tracking-[0.18em] uppercase text-white hover:bg-gold-hover"
                onClick={() => setMobileOpen(false)}
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;