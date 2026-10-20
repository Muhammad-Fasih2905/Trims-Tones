import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icons";
import { membership, pkr } from "@/data/site";

export const metadata = {
  title: "Silver Membership",
  description:
    "One card, one year. Silver Membership at Trims & Tones gives free services worth Rs. 3,100 and 30% off the entire menu.",
  alternates: { canonical: "/membership" },
};

export default function Membership() {
  return (
    <>
      <PageHero title={membership.name} text="One card. One year. Exclusive discounts on every visit." />
      <section className="section">
        <div className="container grid-2" data-stagger>
          <div className="silver-card">
            <p className="silver-top">Trims &amp; Tones</p>
            <h2>Silver</h2>
            <p className="silver-price">{pkr(membership.price)}</p>
            <p>{membership.term}</p>
          </div>
          <div>
            <h2>What you get</h2>
            <p className="lead">Free services worth {pkr(membership.freeValue)}, included with your card:</p>
            <ul className="ticks">
              {membership.freeServices.map((s) => <li key={s}><Icon name="check" size={18} />{s}</li>)}
            </ul>
            <p className="lead"><strong>Plus {membership.discount.toLowerCase()} for 1 year.</strong></p>
            <Link href="/contact?deal=membership#book" className="btn btn-gold">Get the card</Link>
          </div>
        </div>
      </section>
    </>
  );
}
