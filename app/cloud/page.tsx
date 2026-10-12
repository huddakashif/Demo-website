'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

export default function CloudServerPage() {
  const [vcpu, setVcpu] = useState(4);
  const [ram, setRam] = useState(16);
  const [disk, setDisk] = useState(120);

  // Base $5 + $6 per vCPU + $1.25 per GB RAM + $0.05 per GB NVMe
  const monthlyTotal = 5 + vcpu * 6 + ram * 1.25 + disk * 0.05;
  const hourlyTotal = monthlyTotal / 720;

  const scrollToInstances = () => {
    document.getElementById('instances')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<div className="relative w-full bg-gradient-to-b from-primary/10 via-surface to-surface overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-20 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-6"><h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.08]">High-Performance <br /><span className="text-primary">Cloud Servers</span></h1><p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">Deploy enterprise-ready virtual instances on NVMe Ceph storage in under 30 seconds. Powered by automated failover, isolated VPC networks, and 24/7 dedicated support.</p><div className="flex flex-wrap items-center gap-4 pt-2"><button className="group px-6 py-3.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer" onClick={scrollToInstances} type="button"><span className="">Explore Server Plans</span><svg className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div><div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-on-surface-variant"><div className="flex items-center gap-2"></div><div className="flex items-center gap-2"></div><div className="flex items-center gap-2"></div></div></div>

<div className="lg:col-span-5 relative">
<div className="hero-floating-element relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl bg-surface-container-highest transition-transform">
<img alt="3D isometric high-tech cloud computing concept visual with glowing neon cybernetic cloud hovering above rack servers and interconnected optical light beams in deep purple and cyan cyber ambient lighting." className="w-full h-full object-cover" data-alt="3D isometric high-tech cloud computing concept visual with glowing neon cybernetic cloud hovering above rack servers and interconnected optical light beams in deep purple and cyan cyber ambient lighting." src="/images/3d-cloud.png" />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none"></div>

<div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-xl flex items-center justify-between border border-outline-variant/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold text-lg">
<span className="material-symbols-outlined">hub</span>
</div>
<div>
<div className="text-xs font-bold text-on-surface">Auto-Balancing Hypervisor</div>
<div className="text-[11px] text-on-surface-variant font-mono">Active Load: 23% | IOPS: 125,000</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold tracking-wider">LIVE</span>
</div>
</div>
</div>
</div>

<div className="mt-14 p-4 lg:p-6 rounded-2xl bg-surface-container-lowest shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30"><div className="flex flex-col items-center justify-center p-3"><span className="text-2xl lg:text-3xl font-mono font-bold tracking-tight text-primary">99.999%</span><span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mt-1">Guaranteed Uptime</span></div><div className="flex flex-col items-center justify-center p-3"><span className="text-2xl lg:text-3xl font-mono font-bold tracking-tight text-on-surface">&lt; 30 sec</span><span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mt-1">Rapid Provisioning</span></div><div className="flex flex-col items-center justify-center p-3"><span className="text-2xl lg:text-3xl font-headline font-extrabold tracking-tight text-primary">Pure NVMe</span><span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mt-1">High-Throughput IOPS</span></div><div className="flex flex-col items-center justify-center p-3"><span className="text-2xl lg:text-3xl font-mono font-bold tracking-tight text-on-surface">10 Gbps</span><span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mt-1">Redundant Edge Uplink</span></div></div>
</div>
</div>

<section className="w-full bg-surface-container py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Dynamic Provisioning</span>
<h2 className="text-3xl font-headline font-extrabold text-on-surface mt-1">Instant Resource Scaling Engine</h2>
<p className="text-sm text-on-surface-variant mt-2">Adjust your requirements to calculate real-time burst thresholds and continuous node pricing.</p>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-10 shadow-lg max-w-4xl mx-auto border border-outline-variant/20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="lg:col-span-2 space-y-6">
<div>
<div className="flex justify-between items-center text-sm font-semibold mb-2">
<span className="text-on-surface">Virtual CPU Cores (Dedicated)</span>
<span className="text-primary font-bold font-mono">{vcpu} {vcpu === 1 ? 'vCPU' : 'vCPUs'}</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer" aria-label="Virtual CPU cores" max="64" min="1" step="1" type="range" value={vcpu} onChange={(e) => setVcpu(Number(e.target.value))} />
<div className="flex justify-between text-[11px] text-on-surface-variant mt-1">
<span className="">1 Core</span>
<span className="">16 Cores</span>
<span className="">32 Cores</span>
<span className="">64 Cores</span>
</div>
</div>
<div>
<div className="flex justify-between items-center text-sm font-semibold mb-2">
<span className="text-on-surface">ECC DDR5 RAM</span>
<span className="text-primary font-bold font-mono">{ram} GB</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer" aria-label="RAM in GB" max="256" min="2" step="2" type="range" value={ram} onChange={(e) => setRam(Number(e.target.value))} />
<div className="flex justify-between text-[11px] text-on-surface-variant mt-1">
<span className="">2 GB</span>
<span className="">64 GB</span>
<span className="">128 GB</span>
<span className="">256 GB</span>
</div>
</div>
<div>
<div className="flex justify-between items-center text-sm font-semibold mb-2">
<span className="text-on-surface">Ceph Distributed NVMe SSD</span>
<span className="text-primary font-bold font-mono">{disk >= 1000 ? `${(disk / 1000).toFixed(1)} TB` : `${disk} GB`}</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer" aria-label="NVMe storage in GB" max="2000" min="20" step="20" type="range" value={disk} onChange={(e) => setDisk(Number(e.target.value))} />
<div className="flex justify-between text-[11px] text-on-surface-variant mt-1">
<span className="">20 GB</span>
<span className="">500 GB</span>
<span className="">1 TB</span>
<span className="">2 TB</span>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between h-full space-y-6"><div className="space-y-4"><div><span className="text-xs uppercase font-bold text-on-surface-variant tracking-wider">Estimated Price</span><div className="flex items-baseline gap-1 mt-1"><span className="text-4xl font-headline font-black text-primary">${monthlyTotal.toFixed(2)}</span><span className="text-xs font-bold text-on-surface-variant">/ month</span></div><p className="text-xs text-on-surface-variant mt-1">Billed hourly at <span className="font-mono text-on-surface font-semibold">${hourlyTotal.toFixed(3)}/hr</span></p></div><div className="space-y-2.5 border-t border-outline-variant/30 pt-4 text-xs"><div className="flex items-center justify-between text-on-surface-variant"><span className="">Network Uplink</span><span className="font-semibold text-on-surface">10 Gbps Port</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="">Backups</span><span className="font-semibold text-on-surface">Automated Daily</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="">Dedicated IP</span><span className="font-semibold text-on-surface">1 Dedicated IPv4 + /64 IPv6</span></div><div className="flex items-center justify-between text-on-surface-variant"><span className="">Root Access</span><span className="font-semibold text-on-surface">Full SSH / API</span></div></div></div><a className="w-full py-3 bg-primary text-on-primary text-center font-bold text-sm rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5" href="/contact">Deploy Custom Instance</a></div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface scroll-mt-20" id="instances">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-bold uppercase tracking-wider text-primary">Engineered Architectures</span>
<h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-on-surface mt-1">Cloud Compute Instances</h2>
</div>
<p className="text-sm text-on-surface-variant max-w-md">
          Select pre-tuned instance models calibrated for distinct performance envelopes or build clustered topologies with instant peering.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">memory</span>
</div>
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">General Compute</h3>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Balanced workload capacity for production microservices &amp; web apps.</p>
</div>
<div className="pt-2">
<span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Starting at</span>
<div className="text-3xl font-headline font-black text-on-surface mt-0.5">$15 <span className="text-xs font-normal text-on-surface-variant">/mo</span></div>
</div>
<ul className="space-y-2.5 text-xs text-on-surface-variant pt-2 border-t border-outline-variant/30">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">2 vCPUs</span> (3.4 GHz)</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">4 GB</span> DDR5 RAM</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">80 GB</span> NVMe SSD</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">5 TB</span> Bandwidth</li>
</ul>
</div>
<a className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-center font-semibold text-xs transition-all duration-200 hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">database</span>
</div>
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Memory Optimized</h3>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">High memory density engineered for in-memory databases &amp; caches.</p>
</div>
<div className="pt-2">
<span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Starting at</span>
<div className="text-3xl font-headline font-black text-on-surface mt-0.5">$35 <span className="text-xs font-normal text-on-surface-variant">/mo</span></div>
</div>
<ul className="space-y-2.5 text-xs text-on-surface-variant pt-2 border-t border-outline-variant/30">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">4 vCPUs</span> Ultra-Threaded</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">16 GB</span> DDR5 RAM</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">160 GB</span> Ceph NVMe</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">10 TB</span> Bandwidth</li>
</ul>
</div>
<a className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-center font-semibold text-xs transition-all duration-200 hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">speed</span>
</div>
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">CPU Optimized</h3>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Maximized compute cycles for continuous compilation &amp; analytics.</p>
</div>
<div className="pt-2">
<span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Starting at</span>
<div className="text-3xl font-headline font-black text-on-surface mt-0.5">$45 <span className="text-xs font-normal text-on-surface-variant">/mo</span></div>
</div>
<ul className="space-y-2.5 text-xs text-on-surface-variant pt-2 border-t border-outline-variant/30">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">8 Cores</span> (4.8 GHz Turbo)</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">16 GB</span> DDR5 5600MHz</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">240 GB</span> Ultra-IOPS NVMe</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span><span className="font-medium text-on-surface">10 Gbps</span> Dedicated Uplink</li>
</ul>
</div>
<a className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-center font-semibold text-xs transition-all duration-200 hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>

<div className="bg-primary text-on-primary rounded-2xl p-6 shadow-lg flex flex-col justify-between relative hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
<div className="absolute top-3 right-3 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Popular</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined text-xl">share</span>
</div>
<div>
<h3 className="text-lg font-headline font-bold text-on-primary">HA Clustered</h3>
<p className="text-xs text-on-primary-container mt-1 leading-relaxed">Multi-node resilient setup with instant automated node failover.</p>
</div>
<div className="pt-2">
<span className="text-[11px] font-semibold text-on-primary-container uppercase tracking-wider">Starting at</span>
<div className="text-3xl font-headline font-black text-on-primary mt-0.5">$120 <span className="text-xs font-normal text-on-primary-container">/mo</span></div>
</div>
<ul className="space-y-2.5 text-xs text-on-primary-container pt-2 border-t border-on-primary/20">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span><span className="font-semibold text-on-primary">3-Node</span> Quorum Clustered</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span><span className="font-semibold text-on-primary">32 GB</span> Combined ECC RAM</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span><span className="font-semibold text-on-primary">Ceph 3x</span> Replicated Storage</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-sm">verified</span><span className="font-semibold text-on-primary">Internal VPC</span> Private Mesh</li>
</ul>
</div>
<a className="mt-6 w-full py-2.5 rounded-lg bg-surface text-primary text-center font-bold text-xs hover:bg-surface-container transition-all duration-200 shadow-sm hover:shadow-md" data-path="contact" href="/contact">Get Quote</a>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Engineered For Resilience</span>
<h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-on-surface mt-2">
          Under the Hood: Cloud Core Topology
        </h2>
<p className="text-sm text-on-surface-variant mt-3">
          Constructed upon isolated compute fabrics, redundant power topologies, and software-defined network fabrics engineered for zero downtime.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"><div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xl">domain</span></div><h3 className="text-base font-headline font-bold text-on-surface">Tier-3 &amp; Tier-4 Facilities</h3><p className="text-xs text-on-surface-variant leading-relaxed">ISO/IEC 27001-certified data centres boasting N+2 concurrent maintainable power, redundant backup generators, and climate-controlled cooling systems.</p><div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">check</span><span className="">99.999% SLA availability</span></div></div><div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"><div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xl">shield</span></div><h3 className="text-base font-headline font-bold text-on-surface">Hardware DDoS Shielding</h3><p className="text-xs text-on-surface-variant leading-relaxed">Automated volumetric traffic scrubbing mitigating up to 3.2Tbps across L3/L4/L7 assault vectors in real time without null-routing your server.</p><div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">check</span><span className="">Always-on continuous mitigation</span></div></div><div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"><div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xl">cloud_sync</span></div><h3 className="text-base font-headline font-bold text-on-surface">Zero-Downtime Live Migration</h3><p className="text-xs text-on-surface-variant leading-relaxed">Active VM memory and network state dynamically relocate to adjacent host pods during maintenance without disconnecting active TCP connections.</p><div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">check</span><span className="">Transparent routine maintenance</span></div></div></div>
</div>
</section>

<section className="w-full py-16 bg-surface-container-low border-t border-outline-variant/20">
<div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-fixed text-primary mb-6 shadow-sm">
<span className="material-symbols-outlined text-2xl">format_quote</span>
</div>
<blockquote className="text-xl sm:text-2xl font-headline font-semibold text-on-surface leading-snug">“Moved our agency client sites to NetSol VPS and load times dropped by half. Support answered on WhatsApp within minutes.”</blockquote>
<div className="mt-6 flex flex-col items-center justify-center">
<div className="font-bold text-on-surface text-sm">Aisha Khan</div>
<div className="text-xs text-on-surface-variant">blu wave analytics</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 pt-8"><div className="bg-gradient-to-r from-[#3D2C68] via-[#523E85] to-[#2E1F52] text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"><div className="relative z-10 max-w-2xl text-center md:text-left space-y-2"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-1"><span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>Dedicated Cloud Architects</div><h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">Ready to Architect or Migrate Your Cloud Stack?</h2><p className="text-sm text-purple-200 leading-relaxed max-w-xl">Get instant free architecture consulting, zero-downtime migration assistance, and custom volume pricing via direct engineer WhatsApp chat.</p></div><div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0"><a className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200" href={whatsappUrl('Hello NetSol Services, I would like a free Cloud Server architecture consultation.')} rel="noopener noreferrer" target="_blank"><svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg><span className="whitespace-nowrap">Chat on WhatsApp (24/7)</span></a><a className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200" data-path="contact" href="/contact"><span className="material-symbols-outlined text-lg">mail</span><span className="whitespace-nowrap">Request Custom Quote</span></a></div></div></section>

</div></main>
    </>
  );
}
