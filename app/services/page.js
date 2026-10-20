import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesExplorer from "@/components/ServicesExplorer";
import Icon from "@/components/Icons";
import { serviceCategories } from "@/data/site";

export const metadata = {
  title: "Services & Price Menu",
  description:
    "Haircuts, beard grooming, hydra and derma facials, manicure, pedicure and massage at Trims & Tones, Batha Town, Karachi.",
  alternates: { canonical: "/services" },
};

const notes = [
  { icon: "clock", text: "Book ahead to skip the wait" },
  { icon: "award", text: "Prices in PKR, confirmed at the saloon" },
  { icon: "crown", text: "Members get 30% off the menu" },
];

export default function Services() {
  return (
    <>
      <PageHero title="Services & menu" text="Find the right service, see the price and time, and book in one tap." />
      <div className="sx-notes">
        <div className="container sx-notes-in">
          {notes.map((n) => (
            <span key={n.text}><Icon name={n.icon} size={16} /> {n.text}</span>
          ))}
        </div>
      </div>
      <section className="section sx-wrap">
        <div className="container">
          <ServicesExplorer categories={serviceCategories} />
          <div className="sx-bundle" data-reveal>
            <div>
              <h2>Want it all in one visit?</h2>
              <p>Our deals bundle a haircut, facial, hair protein and massage for less.</p>
            </div>
            <Link href="/deals" className="btn btn-dark">See the deals</Link>
          </div>
        </div>
      </section>
    </>
  );
}
