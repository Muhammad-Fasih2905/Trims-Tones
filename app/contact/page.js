import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import Icon from "@/components/Icons";
import { site, mapQuery } from "@/data/site";

export const metadata = {
  title: "Book an Appointment & Contact",
  description:
    "Book your visit at Trims & Tones, Jama Masjid Batha, Batha Town Green House Street, Karachi. Call +92 334 6663792 or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero title="Book your chair" text="Send your details and we will confirm your slot on WhatsApp." />
      <section className="section">
        <div className="container grid-2 top" data-stagger>
          <div id="book" className="panel">
            <h2>Appointment request</h2>
            <Suspense fallback={null}><BookingForm /></Suspense>
          </div>
          <div>
            <h2>Find us</h2>
            <ul className="contact-list big">
              <li><Icon name="pin" size={22} /><address>{site.address.street}, {site.address.area}, {site.address.city}, {site.address.country}</address></li>
              <li><Icon name="phone" size={22} /><a href={site.phoneHref}>{site.phone}</a></li>
              <li><Icon name="mail" size={22} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Icon name="clock" size={22} />{site.hours}</li>
            </ul>
            <div className="map map-sm">
              <iframe title="Trims & Tones location map" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
