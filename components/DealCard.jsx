import Link from "next/link";
import Icon from "./Icons";
import { pkr } from "@/data/site";

export default function DealCard({ deal, featured = false }) {
  return (
    <article className={`deal ${featured ? "deal-featured" : ""}`}>
      <p className="deal-no">Deal {deal.no}</p>
      <h3>{deal.name}</h3>
      <ul>
        {deal.includes.map((i) => (
          <li key={i}><Icon name="check" size={16} />{i}</li>
        ))}
      </ul>
      <div className="deal-foot">
        <div>
          <small>Now only</small>
          <strong>{pkr(deal.price)}</strong>
        </div>
        <Link href={`/contact?deal=${deal.no}#book`} className="btn btn-gold btn-sm">Book this deal</Link>
      </div>
    </article>
  );
}
