"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icons";
import { pkr, serviceMeta, categoryBlurbs } from "@/data/site";

export default function ServicesExplorer({ categories }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(categories[0].id);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return categories
      .map((c) => ({
        ...c,
        items: s
          ? c.items.filter((i) => `${i.name} ${i.desc} ${c.name}`.toLowerCase().includes(s))
          : c.items,
      }))
      .filter((c) => c.items.length);
  }, [q, categories]);

  const total = filtered.reduce((n, c) => n + c.items.length, 0);

  useEffect(() => {
    const secs = document.querySelectorAll(".sx-section");
    if (!secs.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [filtered]);

  return (
    <div className="sx">
      <aside className="sx-side">
        <div className="sx-search">
          <Icon name="search" size={18} />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services"
            aria-label="Search services"
          />
        </div>
        <nav className="sx-nav" aria-label="Service categories">
          {filtered.map((c) => (
            <a key={c.id} href={`#${c.id}`} className={active === c.id ? "on" : ""} aria-current={active === c.id ? "true" : undefined}>
              <span>{c.name}</span>
              <em>{c.items.length}</em>
            </a>
          ))}
        </nav>
        <div className="sx-help">
          <p>Not sure what suits you?</p>
          <Link href="/contact#book" className="btn btn-gold btn-sm">Ask our stylists</Link>
        </div>
      </aside>

      <div className="sx-main">
        <p className="sx-count" role="status">
          {q ? `${total} result${total === 1 ? "" : "s"} for “${q}”` : `${total} services across ${filtered.length} categories`}
        </p>

        {filtered.length === 0 && (
          <div className="sx-empty">
            <h3>No services match your search</h3>
            <p>Try a different word, or clear the search to see the full menu.</p>
            <button className="btn btn-ghost btn-sm" onClick={() => setQ("")}>Clear search</button>
          </div>
        )}

        {filtered.map((c) => (
          <section key={c.id} id={c.id} className="sx-section">
            <header className="sx-head">
              <h2>{c.name}</h2>
              <p>{categoryBlurbs[c.id]}</p>
            </header>
            <ul className="sx-grid">
              {c.items.map((it) => {
                const meta = serviceMeta[it.name] || {};
                return (
                  <li key={it.name} className="sx-card">
                    <div className="sx-card-top">
                      <h3>{it.name}</h3>
                      {meta.popular && <span className="sx-badge"><Icon name="star" size={12} fill="currentColor" /> Most booked</span>}
                    </div>
                    <p>{it.desc}</p>
                    <div className="sx-card-foot">
                      <div>
                        <strong>{pkr(it.price)}</strong>
                        {meta.time && <small><Icon name="clock" size={13} /> {meta.time}</small>}
                      </div>
                      <Link href={`/contact?service=${encodeURIComponent(it.name)}#book`} className="sx-book" aria-label={`Book ${it.name}`}>
                        Book
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
