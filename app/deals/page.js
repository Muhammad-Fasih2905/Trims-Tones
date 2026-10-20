import Link from "next/link";
import PageHero from "@/components/PageHero";
import DealCard from "@/components/DealCard";
import { deals, prepaid, pkr } from "@/data/site";

export const metadata = {
  title: "Grooming Deals & Packages",
  description:
    "Indulge more, spend less. Bundled haircut, facial, manicure, pedicure and massage deals from Rs. 2,999 at Trims & Tones, Karachi.",
  alternates: { canonical: "/deals" },
};

export default function Deals() {
  return (
    <>
      <PageHero title="Indulge more, spend less" text="Every deal includes a Royal Hair Cut & Beard and a 15 minute JC Buckman full body massage." />
      <section className="section">
        <div className="container">
          <div className="grid-3" data-stagger>
            {deals.map((d) => <DealCard key={d.no} deal={d} featured={d.no === "09"} />)}
          </div>
          <div className="prepaid prepaid-inline" data-reveal>
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
        </div>
      </section>
    </>
  );
}
