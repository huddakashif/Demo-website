'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

export default function EmailHostingPage() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[1024px]" data-stitch-vh="min-h-[1024px]===min-h-screen"><div className="flex flex-col w-full">

<section className="relative w-full pt-14 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-surface-container-low via-surface-container-low/70 to-surface motion-fade-in border-b border-outline-variant/20">
<div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
<div className="absolute -bottom-10 -left-20 w-80 h-80 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col space-y-6">
<div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-wide uppercase shadow-sm">
<span className="material-symbols-outlined text-sm text-primary">verified_user</span>
<span>ENTERPRISE-GRADE SECURE EMAIL HOSTING</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.12]">
          Enterprise-Grade Secure <br />
<span className="text-primary">
            Email Hosting for Fast Teams
          </span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Elevate your corporate identity with lightning-fast cloud webmail, 99.999% SLA uptime, dedicated anti-spam filtering, DKIM/SPF auto-setup, and zero data leakage.
        </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-on-primary bg-primary rounded-xl shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-200" href="#pricing">
            Explore Email Plans
            <span className="material-symbols-outlined ml-2 text-base">arrow_downward</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-primary bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 rounded-xl shadow-sm transition-all duration-200" data-path="contact" href="/contact">
            Talk to Specialist
            <span className="material-symbols-outlined ml-2 text-base">support_agent</span>
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-outline-variant/30">
<div className="p-3 bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/30">
<span className="text-xs text-on-surface-variant block">SLA Uptime</span>
<span className="text-lg font-black text-primary">99.999%</span>
</div>
<div className="p-3 bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/30">
<span className="text-xs text-on-surface-variant block">Spam Filter</span>
<span className="text-lg font-black text-on-surface">&gt; 99.99%</span>
</div>
<div className="p-3 bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/30">
<span className="text-xs text-on-surface-variant block">Encryption</span>
<span className="text-lg font-black text-primary">256-Bit SSL</span>
</div>
<div className="p-3 bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl border border-outline-variant/30">
<span className="text-xs text-on-surface-variant block">Authentication</span>
<span className="text-xs font-bold text-on-surface flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-sm text-primary">verified</span> DKIM/SPF
            </span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative w-full rounded-2xl overflow-hidden bg-surface-container-lowest shadow-2xl p-6 md:p-8 border border-outline-variant/30">
<div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider text-on-surface">Reputation Health &amp; Relay</span>
</div>
<span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">99.98% INBOX</span>
</div>
<div className="py-6 space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-on-surface-variant font-medium">SPF / DKIM / DMARC</span>
<span className="font-bold text-primary flex items-center gap-1"><span className="material-symbols-outlined text-base">check_circle</span> Active Auto-Setup</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-on-surface-variant font-medium">Global Blacklist Status</span>
<span className="font-bold text-primary flex items-center gap-1"><span className="material-symbols-outlined text-base">verified_user</span> 0 Listings (Clean)</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-on-surface-variant font-medium">Global Relay Latency</span>
<span className="font-bold text-on-surface font-mono">&lt; 14ms</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-on-surface-variant font-medium">Encryption Standard</span>
<span className="font-bold text-on-surface font-mono">TLS 1.3 / AES-256</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-on-surface-variant font-medium">Data Tracking Policy</span>
<span className="font-bold text-primary font-mono text-xs uppercase px-2 py-0.5 bg-primary/10 rounded">Zero Tracking</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30">
<div className="p-3 bg-surface-container-low rounded-xl text-center">
<p className="text-xs text-on-surface-variant">Spam Filter Rate</p>
<p className="text-base font-bold text-on-surface mt-0.5">99.999%</p>
</div>
<div className="p-3 bg-surface-container-low rounded-xl text-center">
<p className="text-xs text-on-surface-variant">Service SLA</p>
<p className="text-base font-bold text-primary mt-0.5">99.999%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="pricing">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Scalable Corporate Pricing</p>
<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">Select your email tier</h2>
<p className="text-sm text-on-surface-variant mt-3">
      High-speed mailboxes equipped with custom webmail, automated backup sync, and enterprise anti-spam.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

<div className="flex flex-col justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm transition-all duration-300 hover:shadow-md tier-card-hover">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Starter</span>
<span className="material-symbols-outlined text-on-surface-variant">mail</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-1">Starter Mail</h3>
<p className="text-xs text-on-surface-variant mb-6">Essential custom inbox for sole proprietors and lean startups.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-black text-on-surface tracking-tight">$2.99</span>
<span className="text-xs font-semibold text-on-surface-variant">/mo</span>
</div>
<ul className="space-y-3 text-xs text-on-surface">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium"><strong>10GB SSD</strong> storage</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Custom @yourdomain email</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Webmail, IMAP/POP3 sync</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Spam &amp; Virus filter</span></li>
</ul>
</div>
<a className="mt-8 w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-primary bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors border border-outline-variant/30" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="relative flex flex-col justify-between p-6 rounded-2xl bg-surface-container-lowest border-2 border-primary shadow-xl -mt-2 md:-mt-4 tier-card-hover">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-on-primary text-[11px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap">
        Most Popular
      </div>
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Standard</span>
<span className="material-symbols-outlined text-primary">corporate_fare</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-1">Business Mail</h3>
<p className="text-xs text-on-surface-variant mb-6">Collaborative suite with shared calendars and automated DKIM sync.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-black text-primary tracking-tight">$5.99</span>
<span className="text-xs font-semibold text-on-surface-variant">/mo</span>
</div>
<ul className="space-y-3 text-xs text-on-surface">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium"><strong>30GB NVMe</strong> fast mailbox</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Shared calendars &amp; contacts</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Automated SPF, DKIM, DMARC</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">SpamAssure AI zero-hour protection</span></li>
</ul>
</div>
<a className="mt-8 w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-on-primary bg-primary rounded-xl shadow-md hover:bg-primary/90 transition-all" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="flex flex-col justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm transition-all duration-300 hover:shadow-md tier-card-hover">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Enterprise</span>
<span className="material-symbols-outlined text-on-surface-variant">verified</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-1">Enterprise Suite</h3>
<p className="text-xs text-on-surface-variant mb-6">High storage capacity with legal archival and migration concierge.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-black text-on-surface tracking-tight">$12.99</span>
<span className="text-xs font-semibold text-on-surface-variant">/mo</span>
</div>
<ul className="space-y-3 text-xs text-on-surface">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium"><strong>100GB NVMe</strong> capacity</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Unlimited domain aliases</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Archival compliance &amp; retention</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">White-glove zero downtime migration</span></li>
</ul>
</div>
<a className="mt-8 w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-on-surface bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors border border-outline-variant/30" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="flex flex-col justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm transition-all duration-300 hover:shadow-md tier-card-hover">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Dedicated</span>
<span className="material-symbols-outlined text-on-surface-variant">dns</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-1">Dedicated Server</h3>
<p className="text-xs text-on-surface-variant mb-6">Private MTA instance with isolated warm-up IP pool &amp; root control.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-black text-on-surface tracking-tight">$29.99</span>
<span className="text-xs font-semibold text-on-surface-variant">/mo</span>
</div>
<ul className="space-y-3 text-xs text-on-surface">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium"><strong>Unlimited</strong> mailboxes</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">Dedicated clean IP pool</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">High-throughput bulk dispatch</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-medium">24/7 dedicated MTA engineer</span></li>
</ul>
</div>
<a className="mt-8 w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-on-surface bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors border border-outline-variant/30" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Precision Infrastructure</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-2">Engineered for Zero Data Loss</h2>
<p className="text-sm text-on-surface-variant mt-3">Modern cryptographic verification coupled with ultra-redundant cloud MTA nodes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/20 hover:border-primary/40 transition-colors">
<div>
<div className="inline-flex p-3 rounded-xl bg-primary-fixed text-on-primary-fixed mb-4"><span className="material-symbols-outlined text-2xl">verified_user</span></div>
<h3 className="text-lg font-bold text-on-surface mb-2">99.999% SLA Uptime</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Dual-active geo-distributed relays prevent downtime and ensure zero missed corporate communication.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/20 hover:border-primary/40 transition-colors">
<div>
<div className="inline-flex p-3 rounded-xl bg-secondary-container text-on-secondary-fixed mb-4"><span className="material-symbols-outlined text-2xl">lock</span></div>
<h3 className="text-lg font-bold text-on-surface mb-2">256-Bit SSL/TLS &amp; DKIM</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Automated SPF, DKIM, and DMARC enforcement with continuous reputation monitoring.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/20 hover:border-primary/40 transition-colors">
<div>
<div className="inline-flex p-3 rounded-xl bg-surface-container text-on-surface mb-4"><span className="material-symbols-outlined text-2xl">devices</span></div>
<h3 className="text-lg font-bold text-on-surface mb-2">Webmail &amp; IMAP/POP3</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Seamless instant synchronization across Outlook, Apple Mail, Thunderbird, Android, and iOS.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/20 hover:border-primary/40 transition-colors">
<div>
<div className="inline-flex p-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed mb-4"><span className="material-symbols-outlined text-2xl">visibility_off</span></div>
<h3 className="text-lg font-bold text-on-surface mb-2">Zero Data Tracking</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Strict privacy standards. No behavioral scanning, no ad-profiling, and no data mining of inbox content.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 px-6 lg:px-12 max-w-4xl mx-auto">
<div className="text-center mb-12">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Clarifications</span>
<h2 className="text-3xl font-extrabold text-on-surface tracking-tight mt-1">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group p-5 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/20 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-sm text-on-surface list-none">
<span>Can I migrate from Google Workspace or Microsoft 365 without missing any emails?</span>
<span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
        Yes. Our zero-downtime migration pipeline synchronizes all past emails, folders, and attachments while maintaining an active mail routing bridge. Incoming messages continue landing safely throughout the entire cutover.
      </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/20 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-sm text-on-surface list-none">
<span>How does SpamAssure Pro safeguard our corporate reputation?</span>
<span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
        We perform automated DKIM record signing, SPF syntax checking, and DMARC enforcement. Outgoing mail is checked against spam heuristics to ensure compromised accounts never taint the server IP reputation.
      </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/20 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-sm text-on-surface list-none">
<span>Are mailboxes accessible on native phone apps like iOS Mail and Samsung Email?</span>
<span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
        Absolutely. All NetSol email plans support standard secure IMAP/SMTP with auto-discovery XML/JSON profiles. You can sync in seconds by simply entering your email address and password.
      </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/20 cursor-pointer">
<summary className="flex items-center justify-between font-bold text-sm text-on-surface list-none">
<span>Can I mix mailbox sizes under the same corporate domain?</span>
<span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-200">expand_more</span>
</summary>
<p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
        Yes. You can assign Starter 10GB tiers to standard employees and Business or Enterprise plans to high-volume executives while retaining unified billing under one centralized management console.
      </p>
</details>
</div>
</section>

<section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="rounded-2xl bg-primary text-on-primary p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/20">
<div className="space-y-2 text-center md:text-left">
<h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Need Custom Mail Routing or Large Mailbox Migration?</h3>
<p className="text-xs sm:text-sm text-on-primary-container max-w-2xl leading-relaxed">Our enterprise cloud engineers are available on WhatsApp and live help desk to plan seamless MX cutovers with zero bounce rates.</p>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
<a className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-all" href={whatsappUrl('Hello NetSol Services, I need help with custom mail routing / mailbox migration.')} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-lg">chat</span>
<span>Instant WhatsApp</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-bold text-sm shadow-sm hover:bg-surface-container transition-all" data-path="contact" href="/contact">
<span className="material-symbols-outlined text-lg">mail</span>
<span>Contact Us</span>
</a>
</div>
</div>
</section>
</div></main>
    </>
  );
}
