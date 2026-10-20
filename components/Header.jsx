"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icons";
import { site, nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Image src="/logo.png" alt="" width={52} height={52} className="brand-logo" priority />
            <span className="brand-text">
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={pathname === n.href ? "active" : ""}
                aria-current={pathname === n.href ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/contact#book" className="btn btn-gold btn-sm nav-cta">
              Book now
            </Link>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1} className={pathname === n.href ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-foot">
          <Link href="/contact#book" className="btn btn-gold" tabIndex={open ? 0 : -1}>
            Book an appointment
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost" tabIndex={open ? 0 : -1}>
            <Icon name="phone" size={18} /> {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
