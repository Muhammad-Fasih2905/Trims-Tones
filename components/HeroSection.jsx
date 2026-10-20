"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import CountUp from "./CountUp";

export default function HeroSection() {
  const ref = useRef(null);

  function onMove(e) {
    if (e.pointerType === "touch" || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
    el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  return (
    <section className="hx" ref={ref} onPointerMove={onMove}>
      <div className="hx-glow" aria-hidden="true" />
      <div className="hx-grid" aria-hidden="true" />

      <div className="container hx-inner">
        <div className="hx-copy">
          <h1 className="hx-title">
            <span className="hx-line"><span style={{ "--d": "0.1s" }}>Look sharp.</span></span>
            <span className="hx-line"><span className="gold-text" style={{ "--d": "0.28s" }}>Feel royal.</span></span>
          </h1>
          <p className="lead hx-fade" style={{ "--d": "0.55s" }}>
            Precision haircuts, beard grooming, hydra facials and a full-body massage, all in one
            premium visit.
          </p>
          <div className="hero-actions hx-fade" style={{ "--d": "0.7s" }}>
            <Link href="/contact#book" className="btn btn-gold">Book an appointment</Link>
            <Link href="/deals" className="btn btn-ghost">See current deals</Link>
          </div>
          <dl className="hx-stats hx-fade" style={{ "--d": "0.85s" }}>
            <div><dd><CountUp to={540} prefix="Rs. " /></dd><dt>Haircuts from</dt></div>
            <div><dd><CountUp to={8} /></dd><dt>Signature deals</dt></div>
            <div><dd><CountUp to={30} suffix="%" /></dd><dt>Off for members</dt></div>
          </dl>
        </div>

        <div className="hx-stage" aria-hidden="true">
          <div className="hx-seal">
            <svg viewBox="0 0 200 200" className="hx-ringtext">
              <defs>
                <path id="hx-circ" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
              </defs>
              <text textLength="535" lengthAdjust="spacing">
                <textPath href="#hx-circ">PREMIUM SALOON &amp; SPA • KARACHI • BATHA TOWN • </textPath>
              </text>
            </svg>
            <Image src="/logo.png" alt="" width={420} height={420} priority sizes="(max-width: 700px) 50vw, 300px" />
          </div>

          <div className="hx-card hx-c1" style={{ "--k": 38 }}>
            <div className="hx-card-in">
              <span className="hx-ic"><Icon name="scissors" size={20} /></span>
              <div><strong>Royal Cut &amp; Beard</strong><small>Hot towel and balm</small></div>
              <b>Rs. 1,200</b>
            </div>
          </div>
          <div className="hx-card hx-c2" style={{ "--k": -46 }}>
            <div className="hx-card-in">
              <span className="hx-ic"><Icon name="drop" size={20} /></span>
              <div><strong>Hydra Facial</strong><small>Deep cleanse and hydration</small></div>
              <b>Rs. 4,500</b>
            </div>
          </div>
          <div className="hx-card hx-c3" style={{ "--k": 28 }}>
            <div className="hx-card-in">
              <span className="hx-ic"><Icon name="crown" size={20} /></span>
              <div><strong>Silver Membership</strong><small>30% off for a full year</small></div>
              <span className="hx-shine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
