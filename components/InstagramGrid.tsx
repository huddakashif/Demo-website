export default function InstagramGrid() {
  const posts = [
    { tag: "The Amal Shirt", color: "Butter" },
    { tag: "The Zaina Twill", color: "Charcoal" },
    { tag: "The Noor Tunic", color: "Beige" },
    { tag: "The Sana Dress", color: "Deep Blue" },
    { tag: "The Iman Poplin", color: "Burgundy" },
    { tag: "The Layla Co-ord", color: "Off-White" },
    { tag: "Behind the drop", color: "Studio" },
    { tag: "Fabric details", color: "Close-up" },
    { tag: "The Farah Kaftan", color: "Butter" },
    { tag: "Everyday styling", color: "Lahore" },
    { tag: "The Haya Trench", color: "Sand" },
    { tag: "The Safa Skirt", color: "Navy" },
  ];

  return (
    <section className="insta-section">
      <div className="section-inner">
        <div className="insta-head">
          <div>
            <h2 className="section-title">@hudum.pk</h2>
            <p style={{ fontSize: "13px", color: "rgba(250,246,239,0.65)", marginTop: "6px" }}>
              Follow our journey on Instagram for styling edits & community features.
            </p>
          </div>
          <a
            className="insta-follow"
            href="https://instagram.com/hudum.pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW ALONG →
          </a>
        </div>
        <div className="insta-grid">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/hudum.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-cell"
              style={{ display: "flex", alignItems: "flex-end", padding: "10px", textDecoration: "none" }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.05em", color: "rgba(250,246,239,0.7)", zIndex: 2 }}>
                {post.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
