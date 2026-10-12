const items = [
  { title: "Modest by design", body: "Thoughtfully designed for comfortable coverage." },
  { title: "Made for everyday", body: "Pieces you can actually live in." },
  { title: "Western inspired", body: "Modern silhouettes without compromising modesty." },
  { title: "Made in Pakistan", body: "Designed with our community in mind." },
];

export default function WhyHudum() {
  return (
    <section className="why-section">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">Why HUDUM</h2>
        </div>
        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
