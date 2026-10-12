"use client";

import { useState } from "react";

type Reel = {
  label: string;
  src?: string;
  poster?: string;
  instaUrl?: string;
};

const reels: Reel[] = [
  {
    label: "Styling the Amal Shirt",
    instaUrl: "https://instagram.com/hudum.pk",
  },
  {
    label: "Get ready with us",
    instaUrl: "https://instagram.com/hudum.pk",
  },
  {
    label: "Behind the first drop",
    instaUrl: "https://instagram.com/hudum.pk",
  },
  {
    label: "How it fits, 3 ways",
    instaUrl: "https://instagram.com/hudum.pk",
  },
  {
    label: "Fabric & drape close-up",
    instaUrl: "https://instagram.com/hudum.pk",
  },
  {
    label: "Customer favourites",
    instaUrl: "https://instagram.com/hudum.pk",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <polygon points="6 4 20 12 6 20" />
    </svg>
  );
}

function ReelCard({ reel }: { reel: Reel }) {
  if (reel.src) {
    return (
      <div className="reel-card">
        <video
          src={reel.src}
          poster={reel.poster}
          muted
          loop
          playsInline
          autoPlay
        />
        <div className="reel-label">{reel.label}</div>
      </div>
    );
  }

  return (
    <a
      href={reel.instaUrl || "https://instagram.com/hudum.pk"}
      target="_blank"
      rel="noopener noreferrer"
      className="reel-card"
      style={{ textDecoration: "none", cursor: "pointer" }}
      title={`Watch "${reel.label}" on Instagram`}
    >
      <div className="reel-placeholder">
        <div className="reel-play">
          <PlayIcon />
        </div>
      </div>
      <div className="reel-label">{reel.label}</div>
    </a>
  );
}

export default function VideoCorner() {
  return (
    <section className="video-section">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">The video corner</h2>
          <p className="section-note">
            Styling, get-ready-with-us, and behind-the-scenes — straight from
            our Instagram reels.
          </p>
        </div>
        <div className="reel-row">
          {reels.map((reel) => (
            <ReelCard key={reel.label} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
