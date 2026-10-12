'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

const ACTIVE_BILLING_BTN = 'px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300 bg-primary text-on-primary shadow-sm active:scale-95';
const INACTIVE_BILLING_BTN = 'px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300 text-on-surface-variant hover:text-on-surface active:scale-95';

export default function VpsHostingPage() {
  const [annual, setAnnual] = useState(false);
  const price = (monthly: string, yearly: string) => `$${annual ? yearly : monthly}`;

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
<section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-28 pb-16 lg:pb-24">
<div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/15 via-secondary-container/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="anim-hero-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase transition-all duration-300 hover:bg-primary/15 hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Next-Gen KVM Virtualization
          </div>
<h1 className="anim-hero-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-on-surface leading-[1.12]">
            High-Performance <br />
<span className="text-primary">Cloud VPS Hosting</span>
</h1>
<p className="anim-hero-3 text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Dedicated NVMe SSD storage, full root access, unmetered 10Gbps uplink, and automated instant OS deployments in under 60 seconds.
          </p>
<div className="anim-hero-4 flex flex-wrap items-center gap-4 pt-2"><a className="group px-8 py-3.5 bg-primary text-on-primary font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2" href="#pricing" ><span className="">Get Started with VPS</span><span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span></a></div>
</div>
<div className="lg:col-span-5 relative flex justify-center">

<div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary-container/40 rounded-3xl blur-2xl hero-glow-effect pointer-events-none"></div>
<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container hero-float-card transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(79,55,138,0.22)]">
<img className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transform transition-transform duration-700 hover:scale-105" data-alt="High-density enterprise data center server room with illuminated server racks, neon cyan and violet fiber optic wiring indicators, clean reflective flooring, displaying advanced cloud virtual private server architecture in deep cinematic perspective" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArla6sf8_4y59yM3qKdL0SUbTBnzS8GmVkeAsv9npobGPG5qhOF6FnRGq46lnE_oRqAppc_GkiaTxRtvWiTj0un6bjMdqleLTP6hWRp5DE2oZZzmpnBcKnz3uz7I6M-RXdVy8z3fqJ0mRVRwqpO29xyufcZI3cNnqprUB_Ca8xZtNBZ-if3wWtVFeMXVbXQbrGOf0X9hVoiqVT59SPR5GHndrQbtzCBazvP-fIbh2WF_R7ZAcUnsUBtA"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-6">
<div className="flex items-center justify-between text-inverse-on-surface mb-2">
<span className="text-xs font-mono font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                  rack-cluster-us-east-01
                </span>
<span className="text-xs font-mono bg-inverse-surface/80 px-2 py-0.5 rounded text-on-primary-container border border-outline-variant/30">KVM Hypervisor v9.4</span>
</div>
<p className="text-xs text-outline-variant font-mono leading-relaxed">
                Avg Latency: <span className="text-inverse-on-surface font-semibold">1.4ms</span> | IOPS Capacity: <span className="text-inverse-on-surface font-semibold">1,200,000</span> | Network: <span className="text-inverse-on-surface font-semibold">Active Redundant 10GbE</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-20 bg-surface-container-low" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="space-y-3">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Scalable Cloud Compute</span>
<h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-on-surface tracking-tight">Flexible KVM VPS Architecture</h2>
<p className="text-sm text-on-surface-variant max-w-xl">Pure NVMe performance backed by guaranteed RAM and vCPU reservations. Instant upgrade pathways with zero data migration downtime.</p>
</div>
<div className="inline-flex p-1.5 bg-surface-container-highest rounded-xl self-start md:self-auto shadow-inner transition-colors">
<button className={annual ? INACTIVE_BILLING_BTN : ACTIVE_BILLING_BTN} aria-pressed={!annual} onClick={() => setAnnual(false)} type="button">Monthly</button>
<button className={annual ? ACTIVE_BILLING_BTN : INACTIVE_BILLING_BTN} aria-pressed={annual} onClick={() => setAnnual(true)} type="button">
            Annual <span className="ml-1 px-1.5 py-0.5 bg-tertiary-container text-on-tertiary-container rounded text-[10px] uppercase font-extrabold tracking-wide">Save 20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(79,55,138,0.12)] transition-all duration-300 flex flex-col justify-between">
<div className="space-y-5">
<div>
<span className="text-xs font-bold uppercase tracking-wider text-outline group-hover:text-primary transition-colors">Tier 01</span>
<h3 className="text-xl font-bold font-headline text-on-surface mt-1 group-hover:text-primary transition-colors">Starter VPS</h3>
<p className="text-xs text-on-surface-variant mt-1">Ideal for development stacks, lightweight web apps, and staging setups.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold font-headline text-on-surface group-hover:text-primary transition-colors">{price('9.99', '7.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<div className="pt-4 space-y-2.5 text-xs text-on-surface"><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">memory</span><span className=""><strong>2 vCPU</strong> AMD EPYC</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">developer_board</span><span className=""><strong>4 GB</strong> DDR5 RAM</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">hard_drive</span><span className=""><strong>80 GB</strong> NVMe SSD</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">speed</span><span className=""><strong>4 TB</strong> Bandwidth</span></div></div>
</div>
<div className="pt-6">
<a className="w-full py-2.5 px-4 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-semibold text-xs rounded-xl text-center block transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>

<div className="group relative bg-surface-container-lowest rounded-2xl p-6 shadow-xl ring-2 ring-primary hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(79,55,138,0.22)] transition-all duration-300 flex flex-col justify-between">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            Most Popular
          </div>
<div className="space-y-5">
<div>
<span className="text-xs font-bold uppercase tracking-wider text-primary">Tier 02</span>
<h3 className="text-xl font-bold font-headline text-on-surface mt-1 group-hover:text-primary transition-colors">Pro VPS</h3>
<p className="text-xs text-on-surface-variant mt-1">Optimized for high-traffic production websites and eCommerce portals.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold font-headline text-primary">{price('19.99', '15.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<div className="pt-4 space-y-2.5 text-xs text-on-surface"><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">memory</span><span className=""><strong>4 vCPU</strong> AMD EPYC</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">developer_board</span><span className=""><strong>8 GB</strong> DDR5 RAM</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">hard_drive</span><span className=""><strong>160 GB</strong> NVMe SSD</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">speed</span><span className=""><strong>8 TB</strong> Bandwidth</span></div></div>
</div>
<div className="pt-6">
<a className="w-full py-2.5 px-4 bg-primary text-on-primary hover:bg-primary/90 font-semibold text-xs rounded-xl text-center block shadow-md hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-200" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(79,55,138,0.12)] transition-all duration-300 flex flex-col justify-between">
<div className="space-y-5">
<div>
<span className="text-xs font-bold uppercase tracking-wider text-outline group-hover:text-primary transition-colors">Tier 03</span>
<h3 className="text-xl font-bold font-headline text-on-surface mt-1 group-hover:text-primary transition-colors">Business VPS</h3>
<p className="text-xs text-on-surface-variant mt-1">Engineered for database clusters, backend microservices, and ERP systems.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold font-headline text-on-surface group-hover:text-primary transition-colors">{price('39.99', '31.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<div className="pt-4 space-y-2.5 text-xs text-on-surface"><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">memory</span><span className=""><strong>8 vCPU</strong> AMD EPYC</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">developer_board</span><span className=""><strong>16 GB</strong> DDR5 RAM</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">hard_drive</span><span className=""><strong>320 GB</strong> NVMe SSD</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">speed</span><span className=""><strong>15 TB</strong> Bandwidth</span></div></div>
</div>
<div className="pt-6">
<a className="w-full py-2.5 px-4 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-semibold text-xs rounded-xl text-center block transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(79,55,138,0.12)] transition-all duration-300 flex flex-col justify-between">
<div className="space-y-5">
<div>
<span className="text-xs font-bold uppercase tracking-wider text-outline group-hover:text-primary transition-colors">Tier 04</span>
<h3 className="text-xl font-bold font-headline text-on-surface mt-1 group-hover:text-primary transition-colors">Enterprise VPS</h3>
<p className="text-xs text-on-surface-variant mt-1">Maximum core density with dedicated hypervisor resources and priority routing.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold font-headline text-on-surface group-hover:text-primary transition-colors">{price('79.99', '63.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<div className="pt-4 space-y-2.5 text-xs text-on-surface"><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">memory</span><span className=""><strong>16 vCPU</strong> Dedicated Cores</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">developer_board</span><span className=""><strong>32 GB</strong> DDR5 RAM</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">hard_drive</span><span className=""><strong>640 GB</strong> NVMe SSD</span></div><div className="flex items-center gap-2.5 py-1"><span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-110">speed</span><span className=""><strong>Unmetered</strong> 10Gbps Uplink</span></div></div>
</div>
<div className="pt-6">
<a className="w-full py-2.5 px-4 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-semibold text-xs rounded-xl text-center block transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>
</div>
</div>
</section>
<section className="w-full py-20 bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Built for Reliability</span>
<h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-on-surface tracking-tight">Full Control Over Every Server Node</h2>
<p className="text-sm text-on-surface-variant">Deploy without constraints. You get unhindered root privileges, custom kernel access, and enterprise automated hypervisor tooling.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 group-hover:rotate-3 shadow-inner">
<span className="material-symbols-outlined text-2xl transition-transform duration-300">bolt</span>
</div>
<h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Sub-60s Provisioning</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Automated API pipelines allocate vCPU, DDR5 RAM, and disk arrays directly on hardware boot. Your server is fully operational within 60 seconds of checkout.
          </p>
</div>

<div className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 group-hover:-rotate-3 shadow-inner">
<span className="material-symbols-outlined text-2xl transition-transform duration-300">terminal</span>
</div>
<h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Custom ISO &amp; 1-Click OS</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Mount your custom OS images via our web console or select from 1-click templates: Ubuntu 24.04 LTS, Debian 12, AlmaLinux 9, Rocky Linux, or Windows Server.
          </p>
</div>

<div className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 group-hover:rotate-3 shadow-inner">
<span className="material-symbols-outlined text-2xl transition-transform duration-300">history_toggle_off</span>
</div>
<h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">Live Snapshots &amp; Backups</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Capture non-disruptive hot snapshots before system updates. Schedule differential weekly or daily backups stored across offsite geo-redundant storage pools.
          </p>
</div>

<div className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 group-hover:-rotate-3 shadow-inner">
<span className="material-symbols-outlined text-2xl transition-transform duration-300">shield</span>
</div>
<h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">3.2 Tbps DDoS Scrubbing</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">
            Multi-layered volumetric DDoS protection mitigates Layer 3, 4, and 7 exploits automatically with near-zero added latency or legitimate traffic loss.
          </p>
</div>
</div>
<div className="mt-14 p-8 rounded-2xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 border border-outline-variant/20">
<div className="space-y-1">
<h4 className="text-base font-bold text-on-surface">Supported Distributions &amp; Control Panels</h4>
<p className="text-xs text-on-surface-variant">Deploy cPanel/WHM, Plesk, Webmin, Docker, Kubernetes, and LAMP/LEMP stacks straight out of the box.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">Ubuntu</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">Debian</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">AlmaLinux</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">Rocky Linux</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">Windows Server</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold text-on-surface transition-all duration-200 hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 hover:shadow-sm cursor-default">Docker Engine</span>
</div>
</div>
</div>
</section>
<section className="w-full py-20 bg-surface-container-low">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="text-center mb-12 space-y-3">
<span className="text-xs font-bold uppercase tracking-widest text-primary">Help &amp; Answers</span>
<h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-on-surface tracking-tight">Frequently Asked Questions</h2>
<p className="text-sm text-on-surface-variant">Everything you need to know about our virtual private servers and billing infrastructure.</p>
</div>
<div className="space-y-4">
<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default">
<h3 className="text-sm font-bold text-on-surface flex items-center justify-between gap-4 group-hover:text-primary transition-colors">
<span className="">What virtualization hypervisor does NetSol utilize?</span>
<span className="material-symbols-outlined text-primary text-lg transition-transform duration-200 group-hover:rotate-12 group-hover:scale-125">layers</span>
</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            All our VPS environments run on pure KVM (Kernel-based Virtual Machine) architecture. Unlike shared container systems (like OpenVZ), KVM provides complete kernel independence, fully dedicated memory maps, and zero resource overselling.
          </p>
</div>
<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default">
<h3 className="text-sm font-bold text-on-surface flex items-center justify-between gap-4 group-hover:text-primary transition-colors">
<span className="">How fast can I upgrade my VPS if traffic spikes?</span>
<span className="material-symbols-outlined text-primary text-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-125">trending_up</span>
</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            Upgrades are seamless. Through your NetSol client portal, select a higher tier or allocate additional RAM/NVMe storage. Upgrades execute instantly with a quick automated reboot without moving your server or changing IP addresses.
          </p>
</div>
<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default">
<h3 className="text-sm font-bold text-on-surface flex items-center justify-between gap-4 group-hover:text-primary transition-colors">
<span className="">Do I receive full root or Administrator access?</span>
<span className="material-symbols-outlined text-primary text-lg transition-transform duration-200 group-hover:rotate-12 group-hover:scale-125">admin_panel_settings</span>
</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            Yes. You receive 100% unrestricted root access on Linux installations and full Administrator access on Windows Server instances. You can install custom packages, manage firewall rules, and configure system daemons freely.
          </p>
</div>
<div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default">
<h3 className="text-sm font-bold text-on-surface flex items-center justify-between gap-4 group-hover:text-primary transition-colors">
<span className="">Can I install Windows Server on these VPS plans?</span>
<span className="material-symbols-outlined text-primary text-lg transition-transform duration-200 group-hover:scale-125">window</span>
</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            Yes. Windows Server 2019, 2022, and 2025 standard editions can be deployed on Pro VPS, Business VPS, and Enterprise VPS tiers with clean licensing or bring-your-own-license (BYOL) options.
          </p>
</div>
</div>
</div>
</section>
<section className="w-full py-16 bg-surface-container-highest">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
<span className="material-symbols-outlined text-[240px]">dns</span>
</div>
<div className="space-y-4 max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 text-on-primary text-xs font-semibold backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
            Technical Solutions Architects On Duty
          </div>
<h2 className="text-2xl sm:text-3xl font-bold font-headline">Need Custom Hardware or Multi-Server Clusters?</h2>
<p className="text-sm text-on-primary-container leading-relaxed">
            Speak directly with our infrastructure specialists on WhatsApp. We design bespoke high-availability clusters, private VLAN networks, and custom storage arrays.
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
<a className="cta-shimmer-btn px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 transition-all" href={whatsappUrl('Hello NetSol Services, I would like a consultation about custom VPS hardware / multi-server clusters.')} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">chat</span>
<span className="">WhatsApp Consultation</span>
</a>
<a className="px-6 py-3.5 bg-surface text-on-surface font-semibold text-sm rounded-xl shadow-md hover:bg-surface-container hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center" href="/contact">
<span className="">Get Quote</span>
</a>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}
