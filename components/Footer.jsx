import Link from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import { site, nav, serviceCategories } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Walk in sharp. Walk out royal.</h2>
            <p>Book your chair today and let our stylists take care of the rest.</p>
          </div>
          <div className="footer-cta-actions">
            <Link href="/contact#book" className="btn btn-dark">
              Book an appointment
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} /> WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Image src="/logo.png" alt="" width={64} height={64} className="brand-logo" />
            <span className="brand-text">
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </Link>
          <p>
            A premium saloon and spa in Karachi for precision cuts, beard grooming, skin care and
            full-body relaxation.
          </p>
          <div className="socials">
            <a href={site.social.instagram} aria-label="Instagram"><Icon name="instagram" /></a>
            <a href={site.social.facebook} aria-label="Facebook"><Icon name="facebook" /></a>
            <a href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
            </a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            {serviceCategories.map((c) => (
              <li key={c.id}><Link href={`/services#${c.id}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Visit us</h3>
          <ul className="contact-list">
            <li>
              <Icon name="pin" size={18} />
              <address>
                {site.address.street},<br />
                {site.address.area}, {site.address.city}, {site.address.country}
              </address>
            </li>
            <li><Icon name="phone" size={18} /><a href={site.phoneHref}>{site.phone}</a></li>
            <li><Icon name="mail" size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="clock" size={18} />{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>Premium care. Premium you.</span>
        </div>
      </div>
    </footer>
  );
}
