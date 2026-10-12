"use client";

import { FormEvent, useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      const stored = localStorage.getItem("hudum_subscribers") || "[]";
      const list = JSON.parse(stored);
      if (!list.includes(email.trim())) {
        list.push(email.trim());
        localStorage.setItem("hudum_subscribers", JSON.stringify(list));
      }
    } catch {
      // Storage unavailable
    }

    setJoined(true);
    setEmail("");
  }

  return (
    <section className="signup-section">
      <div className="section-inner">
        <h2 className="section-title">Don&apos;t miss the next drop.</h2>
        <p>
          {joined
            ? "✨ Thank you for joining! You are now first in line for our next private drop."
            : "Sign up for first access to new collections, restocks and private sales."}
        </p>
        {!joined ? (
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            <button type="submit">JOIN US</button>
          </form>
        ) : (
          <div style={{ marginTop: "24px", fontSize: "13px", color: "var(--butter)", letterSpacing: "0.08em" }}>
            WELCOME TO HUDUM
          </div>
        )}
      </div>
    </section>
  );
}
