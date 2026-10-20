import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icons";
import HeroSection from "@/components/HeroSection";
import DealCard from "@/components/DealCard";
import ServiceTabs from "@/components/ServiceTabs";
import {
  site, deals, serviceCategories, membership, testimonials, products, prepaid, mapQuery, pkr,
} from "@/data/site";

const marquee = ["Royal Haircut", "Beard Grooming", "Hydra Facial", "Derma Clear", "Manicure & Pedicure", "Hair Protein", "JC Buckman Massage", "Korean Vitamin C"];

const why = [
  { icon: "award", title: "Premium services", text: "Professional-grade products and techniques on every chair." },
  { icon: "scissors", title: "Expert stylists", text: "Trained hands for precision cuts, fades and beard work." },
  { icon: "crown", title: "Royal experience", text: "Hot towels, balm and a calm, comfortable space." },
  { icon: "sparkle", title: "Real savings", text: "Bundled deals and membership that lower the cost of every visit." },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="after-hero" className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}<i /></span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Why Karachi comes to Trims &amp; Tones</h2>
            <p>A barber&apos;s precision with a spa&apos;s patience, under one roof.</p>
          </div>
          <div className="grid-4" data-stagger>
            {why.map((w) => (
              <div className="feature" key={w.title}>
                <span className="feature-icon"><Icon name={w.icon} size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head split" data-reveal>
            <div>
              <h2>Indulge more, spend less</h2>
              <p>Bundled grooming deals that cover hair, skin, hands and a massage.</p>
            </div>
            <Link href="/deals" className="btn btn-ghost">All 8 deals</Link>
          </div>
          <div className="grid-3" data-stagger>
            {[deals[0], deals[4], deals[1]].map((d, i) => (
              <DealCard key={d.no} deal={d} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Our services</h2>
            <p>Sample menu. Final prices are confirmed at the saloon.</p>
          </div>
          <ServiceTabs categories={serviceCategories} />
        </div>
      </section>

      <section className="section pad-0">
        <div className="container">
          <div className="member" data-reveal>
            <div>
              <p className="kicker dark">One card. One year.</p>
              <h2>{membership.name}</h2>
              <p className="member-lead">
                Pay {pkr(membership.price)} once and get {pkr(membership.freeValue)} of services free,
                plus {membership.discount.toLowerCase()} for a full year.
              </p>
              <Link href="/membership" className="btn btn-dark">See what is included</Link>
            </div>
            <div className="member-price">
              <small>Card price</small>
              <strong>{pkr(membership.price)}</strong>
              <span>Valid for 1 year</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product" data-stagger>
          <div className="product-img">
            <Image src="/products.jpg" alt="CAREis Professional protein shampoo, hair mask and serum" width={900} height={1141} sizes="(max-width: 860px) 100vw, 460px" />
          </div>
          <div>
            <p className="kicker">Take the salon home</p>
            <h2>{products.name} hair care routine</h2>
            <p className="lead">Made for {products.for}. A complete routine to keep treated hair soft, protected and frizz-free.</p>
            <ul className="ticks">
              {products.items.map((i) => (
                <li key={i}><Icon name="check" size={18} />{i}</li>
              ))}
            </ul>
            <p className="product-price">{pkr(products.price)} <small>for the full set</small></p>
            <a className="btn btn-gold" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I would like to order the CAREis hair care routine.")}`} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container prepaid" data-stagger>
          <div>
            <h2>Pay now, save more</h2>
            <p className="lead">Lock your next {prepaid.services} services for {pkr(prepaid.price)} instead of {pkr(prepaid.was)}.</p>
          </div>
          <div className="prepaid-box">
            <s>{pkr(prepaid.was)}</s>
            <strong>{pkr(prepaid.price)}</strong>
            <span>You save {pkr(prepaid.save)}</span>
            <Link href="/contact#book" className="btn btn-gold btn-sm">Buy now</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>What our clients say</h2>
            <p>Sample reviews. Replace with real ones.</p>
          </div>
          <div className="grid-3" data-stagger>
            {testimonials.map((t) => (
              <figure className="quote" key={t.name}>
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => <Icon key={s} name="star" size={16} fill="currentColor" />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.service}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section pad-top-0">
        <div className="container visit" data-stagger>
          <div className="visit-info">
            <h2>Visit the saloon</h2>
            <ul className="contact-list">
              <li><Icon name="pin" size={20} /><address>{site.address.street}, {site.address.area}, {site.address.city}, {site.address.country}</address></li>
              <li><Icon name="clock" size={20} />{site.hours}</li>
              <li><Icon name="phone" size={20} /><a href={site.phoneHref}>{site.phone}</a></li>
              <li><Icon name="mail" size={20} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
            <a className="btn btn-gold" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
          <div className="map">
            <iframe title="Trims & Tones location map" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
