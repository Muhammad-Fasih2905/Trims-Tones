import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="gold-text">Page not found</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="btn btn-gold">Back to home</Link>
      </div>
    </section>
  );
}
