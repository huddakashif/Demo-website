'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Soft brand-tinted wash: purple top-right, faint cyan left, fading to white.
const HERO_BACKGROUND =
  'radial-gradient(55% 60% at 90% 0%, rgba(103,80,164,0.12), transparent 70%), ' +
  'radial-gradient(40% 50% at 0% 20%, rgba(0,180,200,0.06), transparent 70%), ' +
  'linear-gradient(180deg, #fbf8ff 0%, #ffffff 100%)';

const EDGE_REGIONS = [
  { code: 'NYC1', city: 'New York', ms: 3.8 },
  { code: 'LON1', city: 'London', ms: 5.2 },
  { code: 'FRA1', city: 'Frankfurt', ms: 6.1 },
  { code: 'SIN1', city: 'Singapore', ms: 7.4 },
];
const EDGE_AVG_MS = EDGE_REGIONS.reduce((sum, r) => sum + r.ms, 0) / EDGE_REGIONS.length;

const HERO_STATS = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '< 10 ms', label: 'Edge latency' },
  { value: 'Tier-4', label: 'Certified datacenters' },
  { value: '24/7/365', label: 'Live NOC engineers' },
];

export default function HomePage() {
  return (
    <>
      <main className="w-full bg-surface min-h-screen"><div className="flex flex-col w-full">

{/* Hero background runs up behind the translucent navbar so the top of the page reads as one surface */}
<div className="relative w-full -mt-20 pt-20 border-b border-outline-variant/30" style={{ background: HERO_BACKGROUND }}>

<section className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-12 lg:pt-20 lg:pb-16 motion-fade-in">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

<div className="lg:col-span-7 space-y-7">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant/60 bg-surface-container-lowest/70 text-xs font-semibold text-primary tracking-wide animate-fade-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="">Reliable Infrastructure. Professional Support.</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-headline font-extrabold tracking-tight text-on-surface leading-[1.1] animate-fade-up delay-200">
            Scalable{' '}
            <span className="shimmer-text">Servers &amp; Hosting Solutions</span>{' '}
            for Your Business
          </h1>

<p className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed max-w-2xl animate-fade-up delay-300">
            Reliable VPS, RDP, cloud, web hosting, and email hosting solutions designed to keep your business connected, secure, and running smoothly.
          </p>

<div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-up delay-400">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-primary-container transition-all" data-path="servers" href="#servers" >
<span className="">Explore Our Services</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-high text-primary font-semibold text-sm hover:bg-secondary-container transition-all" data-path="contact" href="/contact" title="Get Custom Quote - Contact Us">
<span className="material-symbols-outlined text-[18px]">request_quote</span>
<span className="">Get a Quote</span>
</a>
</div>

</div>

{/* Terminal-style latency check replaces the 3D render */}
<div className="lg:col-span-5 animate-fade-up delay-300">
<div className="rounded-xl overflow-hidden border border-[#2b2535] bg-[#16131d] shadow-[0_24px_48px_-16px_rgba(40,24,80,0.45)]" role="img" aria-label={`Latency check: all ${EDGE_REGIONS.length} edge regions respond in under 10 milliseconds`}>
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.03]">
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="ml-2 text-[11px] font-mono text-[#948f99]">netsol-cli — edge status</span>
</div>
<div className="p-5 sm:p-6 font-mono text-[12.5px] sm:text-[13px] leading-relaxed text-[#e6e0e9]">
<div><span className="text-[#cfbcff]">netsol@edge</span><span className="text-[#948f99]">:~$</span> netsol ping --regions all</div>
<div className="text-[#948f99] mt-1">Probing {EDGE_REGIONS.length} edge regions over 10GbE backbone…</div>
<div className="mt-5 space-y-3">
{EDGE_REGIONS.map((r) => (
<div key={r.code} className="flex items-center gap-3">
<span className="w-11 text-[#cfbcff]">{r.code}</span>
<span className="flex-1 text-[#948f99] truncate">{r.city}</span>
<span className="hidden sm:block w-24 h-1.5 rounded-full bg-white/10 overflow-hidden"><span className="block h-full rounded-full bg-[#5ee7f2]" style={{ width: `${r.ms * 10}%` }}></span></span>
<span className="w-16 text-right tabular-nums">{r.ms.toFixed(1)} ms</span>
<span className="text-[#4ade80]">✓</span>
</div>
))}
</div>
<div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
<span><span className="text-[#4ade80]">●</span> {EDGE_REGIONS.length}/{EDGE_REGIONS.length} regions healthy</span>
<span className="text-[#948f99]">avg <span className="text-[#5ee7f2]">{EDGE_AVG_MS.toFixed(1)} ms</span></span>
</div>
<div className="mt-4"><span className="text-[#cfbcff]">netsol@edge</span><span className="text-[#948f99]">:~$</span> <span className="inline-block w-2 h-4 -mb-0.5 bg-[#cfbcff]/80"></span></div>
</div>
</div>
</div>
</div>

{/* Key figures, aligned to the hero grid as one strip */}
<dl className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-6 border-t border-outline-variant/40 pt-8 animate-fade-up delay-400">
{HERO_STATS.map((s, i) => (
<div key={s.label} className={`px-0 lg:px-6 ${i === 0 ? 'lg:pl-0' : 'lg:border-l lg:border-outline-variant/40'} ${i % 2 === 1 ? 'pl-6 border-l border-outline-variant/40 lg:pl-6' : ''}`}>
<dt className="text-xs font-medium text-on-surface-variant">{s.label}</dt>
<dd className="text-2xl font-bold font-headline text-on-surface mt-1">{s.value}</dd>
</div>
))}
</dl>
</section>
</div>

<section className="w-full bg-surface-container-low py-20" id="servers">
<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
<div className="text-xs font-bold uppercase tracking-widest text-primary font-headline">COMPUTE ARCHITECTURE</div>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tight interactive-heading">Enterprise-Grade Server Solutions</h2>
<p className="text-sm sm:text-base text-on-surface-variant">High-performance virtual environments powered by top-tier NVMe hardware, fully isolated resource allocation, and zero-throttling uplink pipes.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="rounded-2xl bg-surface p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-outline-variant/20 card-hover"><div className="space-y-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-container-high text-primary">VPS</span><span className="material-symbols-outlined text-primary text-2xl">dns</span></div><div><h3 className="text-xl font-bold font-headline text-on-surface">Virtual Private Server</h3><p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Dedicated compute resources with unmetered 10Gbps connectivity.</p></div><ul className="space-y-2.5 text-sm text-on-surface-variant"><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Dedicated CPU &amp; RAM</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Enterprise NVMe storage</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Instant OS &amp; ISO deployment</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Instant scaling on demand</span></li></ul></div><div className="pt-8"><a aria-label="View VPS Plans" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-container text-primary font-semibold text-sm hover:bg-primary hover:text-on-primary hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer group" data-path="vps-hosting" href="/vps" title="Navigate to VPS Hosting"><span className="">View VPS Plans</span><span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a></div></div><div className="rounded-2xl bg-surface p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-2 border-primary relative card-hover"><div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-bold tracking-wider uppercase">Most Popular</div><div className="space-y-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">RDP</span><span className="material-symbols-outlined text-primary text-2xl">desktop_windows</span></div><div><h3 className="text-xl font-bold font-headline text-on-surface">RDP Solutions</h3><p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">High-speed, pre-configured remote desktops with clean GUI access.</p></div><ul className="space-y-2.5 text-sm text-on-surface-variant"><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Ultra-low latency desktop access</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Licensed Windows environments</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">256-bit encrypted sessions</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Automated daily snapshots</span></li></ul></div><div className="pt-8"><a aria-label="Explore RDP" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow hover:shadow-lg hover:bg-primary-container active:scale-95 transition-all duration-300 cursor-pointer group" data-path="rdp-servers" href="/rdp" title="Navigate to RDP Server"><span className="">Explore RDP</span><span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a></div></div><div className="rounded-2xl bg-surface p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-outline-variant/20 card-hover"><div className="space-y-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-container-high text-primary">Cloud</span><span className="material-symbols-outlined text-primary text-2xl">cloud_sync</span></div><div><h3 className="text-xl font-bold font-headline text-on-surface">Cloud Solutions</h3><p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">Elastic, distributed hypervisor clusters designed for zero downtime.</p></div><ul className="space-y-2.5 text-sm text-on-surface-variant"><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Resilient multi-zone cloud fabric</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Elastic compute &amp; dynamic RAM</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">99.99% high SLA availability</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Full API &amp; CLI orchestration</span></li></ul></div><div className="pt-8"><a aria-label="Explore Cloud" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-container text-primary font-semibold text-sm hover:bg-primary hover:text-on-primary hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer group" data-path="cloud-servers" href="/cloud" title="Navigate to Cloud Server"><span className="">Explore Cloud</span><span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a></div></div></div>
</div>
</section>

<section className="w-full bg-surface py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="space-y-2">
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tight interactive-heading">High-Speed Web &amp; Enterprise Email Hosting</h2>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="rounded-2xl bg-surface-container-low p-8 lg:p-10 shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow card-hover"><div className="space-y-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed">LiteSpeed Powered</span><div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary shadow-sm"><span className="material-symbols-outlined text-xl">language</span></div></div><div><h3 className="text-2xl font-bold font-headline text-on-surface">Managed Web Hosting</h3><p className="text-sm text-on-surface-variant mt-2 leading-relaxed">High-speed hosting optimized for WordPress, Laravel, Node.js, and static modern frontends.</p></div><ul className="space-y-2.5 text-sm text-on-surface-variant"><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">NVMe SSD caching with LiteSpeed engine</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">One-click app installers, cPanel &amp; Git deployment</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Free Wildcard SSL certificates &amp; daily backups</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Always-on DDoS mitigation &amp; WAF security</span></li></ul></div><div className="pt-8 mt-6 border-t border-outline-variant/20 flex items-center justify-between"><div><span className="text-xs text-on-surface-variant">Starting from</span><div className="text-2xl font-bold font-headline text-primary">$4.99<span className="text-xs font-normal text-on-surface-variant">/mo</span></div></div><a aria-label="Explore Web Hosting" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow hover:shadow-lg hover:bg-primary-container active:scale-95 transition-all duration-300 cursor-pointer group" data-path="web-hosting" href="/web-hosting" title="Navigate to Web Hosting"><span className="">Explore Web Hosting</span><span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a></div></div><div className="rounded-2xl bg-surface-container-low p-8 lg:p-10 shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow card-hover"><div className="space-y-6"><div className="flex items-center justify-between"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed">SpamAssure Pro</span><div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary shadow-sm"><span className="material-symbols-outlined text-xl">mail</span></div></div><div><h3 className="text-2xl font-bold font-headline text-on-surface">Enterprise Email Hosting</h3><p className="text-sm text-on-surface-variant mt-2 leading-relaxed">Secure corporate email communication with dedicated IP deliverability and spam protection.</p></div><ul className="space-y-2.5 text-sm text-on-surface-variant"><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Custom domains with unlimited aliases</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Heuristic anti-spam and zero-hour virus filter</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">Instant sync across Outlook, Apple Mail &amp; mobile</span></li><li className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check</span><span className="">End-to-end TLS 1.3 encrypted transmission</span></li></ul></div><div className="pt-8 mt-6 border-t border-outline-variant/20 flex items-center justify-between"><div><span className="text-xs text-on-surface-variant">Starting from</span><div className="text-2xl font-bold font-headline text-primary">$2.49<span className="text-xs font-normal text-on-surface-variant">/mailbox</span></div></div><a aria-label="Explore Email Hosting" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow hover:shadow-lg hover:bg-primary-container active:scale-95 transition-all duration-300 cursor-pointer group" data-path="email-hosting" href="/email-hosting" title="Navigate to Email Hosting"><span className="">Explore Email Hosting</span><span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span></a></div></div></div>
</div>
</section>

<section className="w-full bg-surface-container-low py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
<div className="text-xs font-bold uppercase tracking-widest text-primary font-headline">CORE ADVANTAGES</div>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tight interactive-heading">Why Choose NetSol Services?</h2>
<p className="text-sm sm:text-base text-on-surface-variant">We build the backbone of tomorrow’s cloud architectures today, backed by human experts.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-surface shadow-sm hover:shadow-md transition-all space-y-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">speed</span>
</div>
<h3 className="text-lg font-bold font-headline text-on-surface interactive-heading">High Performance</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            NVMe Gen4 speed combined with direct Tier-1 carrier transit provides unmetered, low-latency compute across global regions.
          </p>
</div>

<div className="p-6 rounded-2xl bg-surface shadow-sm hover:shadow-md transition-all space-y-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">shield_locked</span>
</div>
<h3 className="text-lg font-bold font-headline text-on-surface interactive-heading">Reliable Infrastructure</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Redundant Tier-3 and Tier-4 datacenters with automatic N+2 power, climate cooling, and hardware failover architecture.
          </p>
</div>

<div className="p-6 rounded-2xl bg-surface shadow-sm hover:shadow-md transition-all space-y-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">trending_up</span>
</div>
<h3 className="text-lg font-bold font-headline text-on-surface interactive-heading">Scalable Solutions</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Instant compute scaling, dynamic storage resizing, and continuous workload migration with zero cold reboots required.
          </p>
</div>

<div className="p-6 rounded-2xl bg-surface shadow-sm hover:shadow-md transition-all space-y-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">support_agent</span>
</div>
<h3 className="text-lg font-bold font-headline text-on-surface interactive-heading">Professional Support</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Certified server and network engineers available 24/7/365 via ticket, phone, and chat with under 15-minute response SLA.
          </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-xs font-semibold tracking-wider text-on-secondary-fixed uppercase">
<span className="material-symbols-outlined text-sm text-primary">verified</span>
<span className="">Trusted At Scale</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight interactive-heading">
Trusted by <span className="shimmer-text">Engineers &amp; Tech Leaders</span> Worldwide
</h2>
<p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
See how engineering teams, high-growth startups, and mission-critical platforms rely on NetSol infrastructure for unmatched uptime and low-latency performance.
</p>

<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-container-high shadow-sm border border-outline-variant/30 text-xs font-medium text-on-surface mt-2">
<div className="flex items-center gap-0.5 text-tertiary-container">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
</div>
<span className="font-bold text-primary text-sm">4.9 / 5.0</span>
<span className="text-on-surface-variant">across 1,200+ Enterprise Deployments</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="rounded-2xl bg-surface-container-low p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-outline-variant/20"><div className="space-y-4"><div className="flex items-center gap-1 text-tertiary-container"><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span></div><p className="text-sm text-on-surface-variant leading-relaxed">“Our remote team runs on NetSol RDP daily. Stable connection, rapid boot speeds, and zero downtime during month-end closing.”</p></div><div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm">MV</div><div><div className="text-sm font-bold text-on-surface font-headline">Rebecca</div><div className="text-xs text-on-surface-variant">CEO at Prime Solutions</div></div></div></div><div className="rounded-2xl bg-surface-container-low p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-outline-variant/20"><div className="space-y-4"><div className="flex items-center gap-1 text-tertiary-container"><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span></div><p className="text-sm text-on-surface-variant leading-relaxed">“Moved our agency client sites to NetSol VPS and load times dropped by half. Support answered on WhatsApp within minutes.”</p></div><div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">AK</div><div><div className="text-sm font-bold text-on-surface font-headline">Aisha Khan</div><div className="text-xs text-on-surface-variant">CTO at BlueWave Analytics</div></div></div></div><div className="rounded-2xl bg-surface-container-low p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-outline-variant/20"><div className="space-y-4"><div className="flex items-center gap-1 text-tertiary-container"><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span><span className="material-symbols-outlined text-base fill-1">star</span></div><p className="text-sm text-on-surface-variant leading-relaxed">“Their Tier-3 engineering desk resolves questions in minutes, not days. Dynamic storage resizing and VPC setup have been seamless.”</p></div><div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm">DC</div><div><div className="text-sm font-bold text-on-surface font-headline">David Chen</div><div className="text-xs text-on-surface-variant">Chief Architect at CloudScale AI</div></div></div></div></div>
</div>
</section><section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
<div className="relative rounded-3xl bg-inverse-surface text-inverse-on-surface overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl">

<div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-primary-container/40 blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/10 text-xs font-semibold tracking-wider text-inverse-primary">
<span className="material-symbols-outlined text-sm">tune</span>
<span className="">BESPOKE CLOUD CONFIGURATIONS</span>
</div>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-inverse-on-surface tracking-tight">
            Have Specific Hosting Needs?
          </h2>
<p className="text-sm sm:text-base text-inverse-on-surface/80 max-w-2xl leading-relaxed">
            Talk to our server architects for multi-GPU nodes, redundant high-availability SAN storage, or private cloud topologies tailored to your workload metrics.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-xl hover:bg-primary-container hover:text-on-primary transition-all" data-path="contact" href="/contact" title="Get Custom Quote - Contact Us">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span className="">Get a Custom Quote</span>
</a>
<span className="text-xs text-inverse-on-surface/60 self-center lg:self-end">Response within 60 minutes</span>
</div>
</div>
</div>
</section>
</div></main>
    </>
  );
}
