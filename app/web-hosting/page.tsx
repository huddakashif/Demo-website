'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

const FAQS = [
  {
    q: 'What makes LiteSpeed web hosting faster than Apache or Nginx?',
    a: 'LiteSpeed replaces the native Apache runtime with an asynchronous event-driven architecture that communicates directly with LSWS cache plugins. It serves static and dynamic WordPress requests with minimal memory overhead, bypassing traditional PHP process creation bottlenecks.',
  },
  {
    q: 'How does the free website migration process work?',
    a: 'Immediately after ordering your plan, submit a migration request ticket or ping our 24/7 WhatsApp desk with your existing host credentials. Our engineers will migrate all cPanel files, databases, and emails within 2 hours with zero interruption to your live website.',
  },
  {
    q: 'Can I upgrade my hosting plan as my audience expands?',
    a: 'Yes, our cloud partitions scale seamlessly. You can step up from Starter Web to Growth or Turbo Enterprise at any time via your portal dashboard with instant resource allocation and prorated invoicing.',
  },
  {
    q: 'Are SSL certificates genuinely free and automatic?',
    a: "Absolutely. Every domain and subdomain pointing to our nameservers receives an automated 256-bit AutoSSL certificate powered by Let's Encrypt / Sectigo that renews automatically every 90 days.",
  },
];

export default function WebHostingPage() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const price = (monthly: string, annual: string) => `$${yearly ? annual : monthly}`;

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="relative w-full overflow-hidden bg-[#0e0c15] text-inverse-on-surface -mt-20 pt-28 pb-20 md:pb-24 motion-fade-in">

<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-6 text-left">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wide text-primary-fixed border border-white/10">
<span className="text-tertiary-fixed font-bold">⚡</span>
<span className="">LiteSpeed Enterprise Hosting</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight leading-[1.1] text-white">Ultra-Fast Managed<br /><span className="text-primary-fixed">Web Hosting</span></h1>
<p className="text-base sm:text-lg text-surface-container-high/90 max-w-xl font-light leading-relaxed">High-performance NVMe cloud hosting powered by LiteSpeed Enterprise, free cPanel, automated daily backups, and unlimited SSL.</p>
<div className="flex items-center gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-primary text-on-primary shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all" href="#plans">
<span className="">Get Started</span>
<span className="material-symbols-outlined text-base">arrow_downward</span>
</a>
</div>
<div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-medium text-surface-container-highest">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed text-base">swap_horiz</span>
<span className="">Free Migration</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed text-base">verified_user</span>
<span className="">30-Day Guarantee</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed text-base">speed</span>
<span className="">LiteSpeed + HTTP/3</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center">
<div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 bg-surface-container-lowest/5 backdrop-blur-md group motion-float">
<div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-cyan-500/40">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="">NVMe Cluster Node • Online</span>
</div>
<img alt="Futuristic 3D glowing datacenter server racks" className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/3d-servers.png" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0e0c15] via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
<div className="flex items-center gap-1.5"><span className="text-tertiary-fixed font-bold">LSWS</span> 100% NVMe Gen4 Storage</div>
<span className="text-cyan-400 font-bold">99.999% SLA</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto" id="plans">

<div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-14">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Scalable Architecture</span>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface">Tailored High-Speed Hosting Plans</h2>
<p className="text-sm sm:text-base text-on-surface-variant">Choose your isolated compute tier with zero overselling, native NVMe Gen4 drives, and automated stack optimization.</p>

<div className="pt-4 flex items-center gap-3">
<span className={`text-xs font-semibold cursor-pointer select-none ${yearly ? 'text-on-surface-variant' : 'text-on-surface'}`} onClick={() => setYearly(false)}>Monthly Billing</span>
<button aria-pressed={yearly} aria-label="Toggle annual billing" onClick={() => setYearly(!yearly)} className="relative w-14 h-7 rounded-full bg-surface-container-highest transition-colors focus:outline-none p-0.5" type="button">
<span className={`block w-6 h-6 rounded-full bg-primary shadow-sm transform transition-transform ${yearly ? 'translate-x-7' : 'translate-x-0'}`}></span>
</button>
<div className="flex items-center gap-1.5 cursor-pointer select-none" onClick={() => setYearly(true)}>
<span className={`text-xs font-semibold ${yearly ? 'text-on-surface' : 'text-on-surface-variant'}`}>Annual Billing</span>
<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container">Save 20%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

<div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 tier-card-hover">
<div>
<div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-secondary">Starter</span><span className="material-symbols-outlined text-secondary">cloud_queue</span></div>
<h3 className="text-xl font-bold font-headline text-on-surface mt-2">Starter Web</h3>
<p className="text-xs text-on-surface-variant mt-1">Ideal for lean portfolios and fresh projects.</p>
<div className="mt-6 pb-6">
<div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold tracking-tight text-on-surface plan-price">{price('4.99', '3.99')}</span><span className="text-xs font-medium text-on-surface-variant">/ month</span></div>
<p className="text-[11px] text-on-surface-variant mt-1 billing-note">{yearly ? 'Billed annually' : 'Billed monthly'}</p>
</div>
<div className="space-y-2.5 text-xs text-on-surface">
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-semibold">1 Website</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">20GB NVMe SSD</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">Unmetered Bandwidth</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">Free AutoSSL</span></div>
</div>
</div>
<div className="mt-8 pt-4"><a className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-xs bg-surface-container hover:bg-surface-container-high text-primary transition-all" data-path="contact" href="/contact" title="Contact Us to Get a Quote">Get Quote</a></div>
</div>

<div className="relative flex flex-col justify-between bg-primary-container text-on-primary-container rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform md:-translate-y-2 border border-primary/20 tier-card-hover">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-tertiary-container text-on-tertiary-container px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md">Most Popular</div>
<div>
<div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-primary-fixed">Growth</span><span className="material-symbols-outlined text-primary-fixed">rocket_launch</span></div>
<h3 className="text-xl font-bold font-headline text-white mt-2">Growth Web</h3>
<p className="text-xs text-primary-fixed-dim mt-1">Multi-site capability with free domain.</p>
<div className="mt-6 pb-6">
<div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold tracking-tight text-white plan-price">{price('8.99', '6.99')}</span><span className="text-xs font-medium text-primary-fixed-dim">/ month</span></div>
<p className="text-[11px] text-primary-fixed-dim mt-1 billing-note">Includes 1-Year Free Domain</p>
</div>
<div className="space-y-2.5 text-xs text-on-primary-container">
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span><span className="font-bold text-white">Unlimited Websites</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span><span className="font-semibold text-white">60GB NVMe SSD</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span><span className="">Daily Automated Backups</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span><span className="">Free Domain &amp; SSL</span></div>
</div>
</div>
<div className="mt-8 pt-4"><a className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-xs bg-white text-primary hover:bg-surface-bright transition-all shadow-md" data-path="contact" href="/contact" title="Contact Us to Get a Quote">Get Quote</a></div>
</div>

<div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 tier-card-hover">
<div>
<div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-secondary">Business</span><span className="material-symbols-outlined text-secondary">dns</span></div>
<h3 className="text-xl font-bold font-headline text-on-surface mt-2">Business Pro</h3>
<p className="text-xs text-on-surface-variant mt-1">Dedicated IP &amp; dev staging environments.</p>
<div className="mt-6 pb-6">
<div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold tracking-tight text-on-surface plan-price">{price('14.99', '11.99')}</span><span className="text-xs font-medium text-on-surface-variant">/ month</span></div>
<p className="text-[11px] text-on-surface-variant mt-1 billing-note">{yearly ? 'Billed annually' : 'Billed monthly'}</p>
</div>
<div className="space-y-2.5 text-xs text-on-surface">
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-bold">Unlimited Websites</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">150GB NVMe SSD</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-semibold text-primary">Free Dedicated IPv4</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">Staging &amp; SSH Terminal</span></div>
</div>
</div>
<div className="mt-8 pt-4"><a className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-xs bg-surface-container hover:bg-surface-container-high text-primary transition-all" data-path="contact" href="/contact" title="Contact Us to Get a Quote">Get Quote</a></div>
</div>

<div className="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30 tier-card-hover">
<div>
<div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-secondary">Enterprise</span><span className="material-symbols-outlined text-secondary">memory</span></div>
<h3 className="text-xl font-bold font-headline text-on-surface mt-2">Turbo Enterprise</h3>
<p className="text-xs text-on-surface-variant mt-1">Quad-core compute isolation with CDN.</p>
<div className="mt-6 pb-6">
<div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold tracking-tight text-on-surface plan-price">{price('24.99', '19.99')}</span><span className="text-xs font-medium text-on-surface-variant">/ month</span></div>
<p className="text-[11px] text-on-surface-variant mt-1 billing-note">{yearly ? 'Billed annually' : 'Billed monthly'}</p>
</div>
<div className="space-y-2.5 text-xs text-on-surface">
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-bold">Unlimited Websites</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">300GB NVMe SSD</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="font-bold text-primary">4x CPU / 8GB RAM</span></div>
<div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-primary text-base">check_circle</span><span className="">Enterprise CDN &amp; VIP Support</span></div>
</div>
</div>
<div className="mt-8 pt-4"><a className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-xs bg-surface-container hover:bg-surface-container-high text-primary transition-all" data-path="contact" href="/contact" title="Contact Us to Get a Quote">Get Quote</a></div>
</div>
</div>
</section>

<section className="w-full py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Architecture</span>
<h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">Built on Next-Gen LiteSpeed (LSWS)</h2>
<p className="text-sm text-on-surface-variant">Asynchronous event-driven architecture delivering instant TTFB and resource efficiency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm text-center space-y-2 border border-outline-variant/20">
<div className="text-3xl font-extrabold text-primary font-headline">20x</div>
<p className="text-sm font-bold text-on-surface">Faster Page Loads</p>
<p className="text-xs text-on-surface-variant">LiteSpeed LSCache handles thousands of concurrent requests with minimal memory footprint.</p>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm text-center space-y-2 border border-outline-variant/20">
<div className="text-3xl font-extrabold text-primary font-headline">0.018s</div>
<p className="text-sm font-bold text-on-surface">Ultra-Low TTFB</p>
<p className="text-xs text-on-surface-variant">Direct cache communication bypasses heavy PHP process bottlenecks instantly.</p>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm text-center space-y-2 border border-outline-variant/20">
<div className="text-3xl font-extrabold text-primary font-headline">300%</div>
<p className="text-sm font-bold text-on-surface">Higher Concurrency</p>
<p className="text-xs text-on-surface-variant">Smooth performance during seasonal traffic surges without throttling or slowdowns.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Standard on Every Tier</span>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface">Engineered for Reliability &amp; Autonomy</h2>
<p className="text-sm sm:text-base text-on-surface-variant">Every managed account comes loaded with zero-cost developer tooling, continuous offsite snapshots, and automated defense systems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex items-start gap-4 border border-outline-variant/20">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed">
<span className="material-symbols-outlined text-2xl">dashboard_customize</span>
</div>
<div className="space-y-1">
<h3 className="text-base font-bold font-headline text-on-surface">cPanel &amp; 1-Click Softaculous</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Manage domains, files, and mailboxes effortlessly. Install WordPress and 400+ scripts in one click.</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex items-start gap-4 border border-outline-variant/20">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 text-on-primary-fixed">
<span className="material-symbols-outlined text-2xl">move_up</span>
</div>
<div className="space-y-1">
<h3 className="text-base font-bold font-headline text-on-surface">Free 2-Hour Website Migration</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Zero-downtime transfer handled end-to-end by certified Linux systems engineers.</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex items-start gap-4 border border-outline-variant/20">
<div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container">
<span className="material-symbols-outlined text-2xl">cloud_sync</span>
</div>
<div className="space-y-1">
<h3 className="text-base font-bold font-headline text-on-surface">Daily Backups &amp; 1-Click Restore</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Automated off-site snapshot archives with 30-day rollback and instant file or database recovery.</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex items-start gap-4 border border-outline-variant/20">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
<span className="material-symbols-outlined text-2xl">security</span>
</div>
<div className="space-y-1">
<h3 className="text-base font-bold font-headline text-on-surface">WAF &amp; Proactive DDoS Defense</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Real-time automated malware scrubbing, brute-force isolation, and hardware DDoS protection.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-16 bg-surface-container-low" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-6">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
<h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface mt-1">Frequently Asked Questions</h2>
</div>
<div className="space-y-3">
{FAQS.map((faq, i) => {
  const open = openFaq === i;
  return (
<div key={faq.q} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
<button className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-on-surface focus:outline-none" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} type="button">
<span className="">{faq.q}</span>
<span className={`material-symbols-outlined text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>expand_more</span>
</button>
{open && (
<div className="px-5 pb-5 text-xs text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
)}
</div>
  );
})}
</div>
</div>

<div className="lg:col-span-5 flex flex-col">
<div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full relative overflow-hidden border border-outline-variant/30">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="">Live Tech Support Online</span>
</div>
<h3 className="text-2xl font-bold font-headline text-on-surface">Need Help Choosing or Customizing a Plan?</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                Connect directly with our senior Linux hosting engineers on WhatsApp. Get instant sizing recommendations, free migration booking, or custom PHP module checks.
              </p>

<div className="space-y-2.5 pt-2 text-xs text-on-surface">
<div className="flex items-center gap-2">


</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-600 text-base">support</span>
<span className="">Direct technician access (No automated phone trees)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-600 text-base">domain_verification</span>
<span className="">Free domain consultation &amp; DNS assistance</span>
</div>
</div>
</div>

<div className="mt-8 pt-6">
<a className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]" href={whatsappUrl('Hello NetSol Services, I need help choosing a web hosting plan.')} rel="noopener noreferrer" target="_blank">
<svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
</svg>
<span className="">Chat Instantly on WhatsApp</span>
</a>

</div>
</div>
</div>
</div>
</div>
</section>

</div></main>
    </>
  );
}
