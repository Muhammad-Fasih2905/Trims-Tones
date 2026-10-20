export default function PageHero({ title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="gold-text">{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
