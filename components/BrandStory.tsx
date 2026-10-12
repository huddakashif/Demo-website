import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="story-section" id="story">
      <div className="story-visual">
        <Image
          src="/story.jpg"
          alt="The HUDUM Design Philosophy"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="story-text">
        <h2 className="section-title">We wanted something different.</h2>
        <p>
          Finding clothes that felt stylish, comfortable and genuinely modest
          shouldn&apos;t have to mean choosing between traditional Eastern wear
          and an abaya.
        </p>
        <p>
          So we created HUDUM — modern, Western-inspired pieces made for girls
          who want to dress modestly and still feel like themselves.
        </p>
      </div>
    </section>
  );
}
