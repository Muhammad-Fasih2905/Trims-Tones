"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, serviceCategories, deals } from "@/data/site";

export default function BookingForm() {
  const params = useSearchParams();
  const dealNo = params.get("deal");
  const svc = params.get("service");
  const preDeal = deals.find((d) => d.no === dealNo);
  const [sent, setSent] = useState(false);

  const options = [
    ...(preDeal ? [`Deal ${preDeal.no}: ${preDeal.name}`] : []),
    ...serviceCategories.flatMap((c) => c.items.map((i) => i.name)),
    ...deals.filter((d) => d.no !== dealNo).map((d) => `Deal ${d.no}: ${d.name}`),
    "Silver Membership",
  ];

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Hello ${site.name}, I would like to book an appointment.\n` +
      `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n` +
      `Service: ${f.get("service")}\nPreferred date: ${f.get("date") || "Flexible"}\n` +
      `Preferred time: ${f.get("time") || "Flexible"}\n` +
      (f.get("note") ? `Note: ${f.get("note")}` : "");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
      </div>
      <div className="field field-wide">
        <label htmlFor="service">Service or deal</label>
        <select id="service" name="service" defaultValue={svc && options.includes(svc) ? svc : dealNo === "membership" ? "Silver Membership" : options[0]}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="date">Preferred date</label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="field">
        <label htmlFor="time">Preferred time</label>
        <input id="time" name="time" type="time" />
      </div>
      <div className="field field-wide">
        <label htmlFor="note">Anything we should know? (optional)</label>
        <textarea id="note" name="note" rows={3} />
      </div>
      <button className="btn btn-gold field-wide" type="submit">Send booking on WhatsApp</button>
      <p className="form-note field-wide" role="status">
        {sent
          ? "WhatsApp opened with your details. Send the message to confirm your slot."
          : "Your request opens in WhatsApp so our team can confirm your slot quickly."}
      </p>
    </form>
  );
}
