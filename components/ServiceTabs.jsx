"use client";

import { useState } from "react";
import Link from "next/link";
import { pkr } from "@/data/site";

export default function ServiceTabs({ categories, showAll = false }) {
  const [active, setActive] = useState(categories[0].id);
  const list = showAll ? categories : categories.filter((c) => c.id === active);

  return (
    <div className="tabs">
      {!showAll && (
        <div className="tab-list" role="tablist" aria-label="Service categories">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={active === c.id}
              aria-controls="tab-panel"
              className={`tab ${active === c.id ? "on" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div id="tab-panel" role={showAll ? undefined : "tabpanel"} aria-labelledby={showAll ? undefined : `tab-${active}`}>
        {list.map((c) => (
          <section key={c.id} id={c.id} className="menu-group">
            {showAll && <h2 className="menu-title">{c.name}</h2>}
            <ul className="menu">
              {c.items.map((it) => (
                <li key={it.name} className="menu-row">
                  <div>
                    <h3>{it.name}</h3>
                    <p>{it.desc}</p>
                  </div>
                  <span className="dots" aria-hidden="true" />
                  <strong className="price">{pkr(it.price)}</strong>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {!showAll && (
        <div className="center mt">
          <Link href="/services" className="btn btn-ghost">View the full menu</Link>
        </div>
      )}
    </div>
  );
}
