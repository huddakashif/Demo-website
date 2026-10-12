'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

const OS_OPTIONS = [
  { id: 'win-2022', icon: 'window', name: 'Windows Server', edition: '2022 Datacenter' },
  { id: 'win-2019', icon: 'window', name: 'Windows Server', edition: '2019 Standard' },
  { id: 'win-11', icon: 'laptop_windows', name: 'Windows 11 Pro', edition: 'Workstation 64-bit' },
  { id: 'win-10', icon: 'laptop_windows', name: 'Windows 10 Pro', edition: 'Enterprise LTSC' },
];

const FAQS = [
  {
    q: 'Do I have full administrator access on my RDP server?',
    a: 'Yes, 100%. Unlike shared RDP accounts that restrict app installs, every plan on NetSol Services delivers root administrator privileges. You can install your own software, run background bots, configure Windows Firewall, and modify system settings.',
  },
  {
    q: 'Is this RDP server suitable for 24/7 Forex and trading bots?',
    a: 'Absolutely. Our hardware nodes are engineered specifically for low-latency continuous trading. They operate 24 hours a day, 7 days a week with zero automatic reboots. You can safely run multiple instances of MetaTrader 4, MetaTrader 5, cTrader, and automated trading algorithms.',
  },
  {
    q: 'How do I connect to the server from my PC, Mac, or Phone?',
    a: 'You can connect using the default "Remote Desktop Connection" (mstsc.exe) on Windows, or the Microsoft Remote Desktop app on macOS, iOS, iPadOS, and Android. Alternatively, you can use AnyDesk or RustDesk for instant remote access.',
  },
  {
    q: 'How fast is deployment after ordering?',
    a: 'Virtual RDP instances (Basic, Admin, and Power) are completely automated and dispatched within 1 to 5 minutes after payment verification. Bare Metal dedicated nodes require custom OS imaging and are ready within 60 to 120 minutes.',
  },
  {
    q: 'Can I change or upgrade my plan later?',
    a: 'Yes, you can dynamically scale CPU cores, RAM, and NVMe disk quota directly from your NetSol client portal with zero operating system re-installation or data loss.',
  },
];

export default function RdpServerPage() {
  const [annual, setAnnual] = useState(true);
  const [selectedOs, setSelectedOs] = useState('win-2022');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const price = (monthly: string, yearly: string) => `$${annual ? yearly : monthly}`;

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="relative overflow-hidden bg-surface-container-low py-16 lg:py-24">
<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest text-primary text-xs font-bold tracking-wide uppercase transition-all duration-300 hover:bg-surface-container-high">
<span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Ultra-Low Latency Workstations
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold text-on-surface tracking-tight leading-[1.1]">
            Dedicated High-Speed <span className="text-primary">RDP Servers</span>
</h1>
<p className="text-lg text-on-surface-variant font-normal leading-relaxed max-w-2xl">
            Pre-activated Windows Server environments optimized for forex trading, continuous automation bot suites, heavy computational rendering, and seamless multi-monitor remote operations.
          </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
<div className="p-3.5 bg-surface rounded-xl shadow-sm space-y-1 metric-badge cursor-default">
<span className="material-symbols-outlined text-primary text-xl">speed</span>
<div className="text-xs font-bold text-on-surface">1Gbps / 10Gbps</div>
<div className="text-[11px] text-on-surface-variant">Unshared Uplink</div>
</div>
<div className="p-3.5 bg-surface rounded-xl shadow-sm space-y-1 metric-badge cursor-default">
<span className="material-symbols-outlined text-primary text-xl">memory</span>
<div className="text-xs font-bold text-on-surface">Pure NVMe Gen4</div>
<div className="text-[11px] text-on-surface-variant">Ultra-Fast IOPS</div>
</div>
<div className="p-3.5 bg-surface rounded-xl shadow-sm space-y-1 metric-badge cursor-default">
<span className="material-symbols-outlined text-primary text-xl">sync_saved_locally</span>
<div className="text-xs font-bold text-on-surface">24/7 Rebootless</div>
<div className="text-[11px] text-on-surface-variant">99.999% Persistent</div>
</div>
<div className="p-3.5 bg-surface rounded-xl shadow-sm space-y-1 metric-badge cursor-default">
<span className="material-symbols-outlined text-primary text-xl">hub</span>
<div className="text-xs font-bold text-on-surface">&lt;4ms Edge Ping</div>
<div className="text-[11px] text-on-surface-variant">Direct Exchanges</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-3">
<a className="group btn-cta inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[#6750a4] hover:from-[#5a3f9e] hover:to-primary text-on-primary font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95" href="#plans">
<span className="">Deploy Instantly</span>
<span className="material-symbols-outlined text-base btn-arrow-slide transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span>
</a>
<a className="group btn-cta inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface text-on-surface font-semibold text-sm shadow-sm hover:bg-surface-container hover:shadow-md transition-all active:scale-95" href="/contact" rel="noopener noreferrer">
<span className="material-symbols-outlined text-primary text-base transition-transform duration-300 group-hover:rotate-12">contact_support</span>
<span className="">Speak to Server Architect</span>
</a>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl overflow-hidden bg-surface shadow-xl p-2 hero-visual-card">
<div className="relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Futuristic cybernetic workstation interface showing a high tech glowing remote desktop connection with holographic network telemetry streams, a floating laptop terminal synchronized via radiant laser data stream to an enterprise rackmounted server mainframe, vibrant neon cyan accents in a dark architectural server room" src="/images/3d-cloud.png" />

<div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm"><span className="material-symbols-outlined text-xl">desktop_windows</span></div><div><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 live-status-dot inline-block"></span><span className="text-xs font-bold text-on-surface">Remote Protocol 10.8</span></div><div className="text-[11px] text-on-surface-variant">Active Session: 60 FPS H.265 Direct Stream</div></div></div><div className="text-right"><div className="text-xs font-bold text-primary font-mono">1.2 ms</div><div className="text-[10px] text-on-surface-variant uppercase tracking-wider">Round-trip</div></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full" id="plans">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase transition-colors hover:bg-secondary-fixed">
<span className="material-symbols-outlined text-sm">tune</span>
        Configured for Immediate Launch
      </div>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tight">
        Engineered for Sustained Performance
      </h2>
<p className="text-base text-on-surface-variant">
        Every RDP tier features dedicated Administrator permissions, isolated core allocation, and your choice of Windows OS versions.
      </p>

<div className="pt-4 flex items-center justify-center gap-3">
<span className={`text-xs font-medium transition-colors ${annual ? 'text-on-surface-variant' : 'text-on-surface'}`}>Monthly Billing</span>
<button aria-label="Toggle annual billing discount" aria-pressed={annual} onClick={() => setAnnual(!annual)} className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 cursor-pointer hover:opacity-90 active:scale-95 ${annual ? 'bg-primary' : 'bg-outline'}`} type="button">
<div className={`bg-surface w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
</button>
<span className={`text-xs font-medium flex items-center gap-1 ${annual ? 'text-on-surface' : 'text-on-surface-variant'}`}>
<span className="">Annual Prepurchasing</span>
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded-full transition-transform hover:scale-105">Save 20%</span>
</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

<div className="bg-surface-container-low rounded-2xl p-6 shadow-sm flex flex-col justify-between pricing-card-interactive">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Entry Tier</span>
<span className="material-symbols-outlined text-on-surface-variant text-xl">terminal</span>
</div>
<div>
<h3 className="text-xl font-bold font-headline text-on-surface">Basic RDP</h3>
<p className="text-xs text-on-surface-variant mt-1">Light browsing, background scripts &amp; basic tooling.</p>
</div>
<div className="pt-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold text-on-surface font-headline plan-price transition-all duration-300">{price('14.99', '11.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-0.5">Billed as specified, cancel anytime</p>
</div>
<div className="space-y-2.5 pt-4">
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">2 vCPU Dedicated Cores</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">4 GB High-Speed RAM</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">60 GB Enterprise SSD</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Windows 2019 / 2022</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Full Admin Root Control</span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group btn-cta w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-surface-container-highest text-on-surface font-bold text-xs hover:bg-primary hover:text-on-primary transition-all shadow-sm active:scale-95" data-path="contact" href="/contact"><span className="">Get Quote</span><span className="material-symbols-outlined text-sm btn-arrow-slide transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span></a>
</div>
</div>

<div className="bg-surface-container rounded-2xl p-6 shadow-lg flex flex-col justify-between relative transform xl:-translate-y-2 pricing-card-interactive pricing-card-featured">
<div className="popular-glow-badge absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-on-primary text-[11px] font-bold uppercase tracking-wider shadow-md">
          Most Popular Choice
        </div>
<div className="space-y-4">
<div className="flex items-center justify-between pt-1">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Forex &amp; Automation</span>
<span className="material-symbols-outlined text-primary text-xl">star</span>
</div>
<div>
<h3 className="text-xl font-bold font-headline text-on-surface">Admin RDP</h3>
<p className="text-xs text-on-surface-variant mt-1">Ready for MetaTrader 4/5, continuous scraping, Chrome tabs.</p>
</div>
<div className="pt-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold text-primary font-headline plan-price transition-all duration-300">{price('24.99', '19.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-0.5">Pre-configured image loaded</p>
</div>
<div className="space-y-2.5 pt-4">
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">4 vCPU Turbo Compute</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">8 GB ECC Server Memory</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">120 GB Pure NVMe Storage</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">1 Gbps Dedicated Port</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Pre-installed MT4/MT5, AnyDesk</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-semibold">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Clean Dedicated Static IPv4</span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group btn-cta w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-[#6750a4] hover:from-[#5a3f9e] hover:to-primary text-on-primary font-bold text-xs shadow-md hover:shadow-lg transition-all active:scale-95" data-path="contact" href="/contact"><span className="">Get Quote</span><span className="material-symbols-outlined text-sm btn-arrow-slide transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span></a>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-6 shadow-sm flex flex-col justify-between pricing-card-interactive">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Intensive Compute</span>
<span className="material-symbols-outlined text-on-surface-variant text-xl">bolt</span>
</div>
<div>
<h3 className="text-xl font-bold font-headline text-on-surface">Power RDP</h3>
<p className="text-xs text-on-surface-variant mt-1">GPU video transcoding, multi-emulator, heavy databases.</p>
</div>
<div className="pt-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold text-on-surface font-headline plan-price transition-all duration-300">{price('49.99', '39.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-0.5">High resource concurrency</p>
</div>
<div className="space-y-2.5 pt-4">
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">8 Dedicated vCPU Cores</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">16 GB High-Bandwidth RAM</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">250 GB Gen4 NVMe RAID</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">10 Gbps Unmetered Port</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">GPU Acceleration Virtualized</span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group btn-cta w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-surface-container-highest text-on-surface font-bold text-xs hover:bg-primary hover:text-on-primary transition-all shadow-sm active:scale-95" data-path="contact" href="/contact"><span className="">Get Quote</span><span className="material-symbols-outlined text-sm btn-arrow-slide transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span></a>
</div>
</div>

<div className="bg-surface-container-low rounded-2xl p-6 shadow-sm flex flex-col justify-between pricing-card-interactive">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-bold uppercase tracking-wider text-tertiary">Zero Hypervisor Overhead</span>
<span className="material-symbols-outlined text-tertiary text-xl">dns</span>
</div>
<div>
<h3 className="text-xl font-bold font-headline text-on-surface">Dedicated Bare Metal</h3>
<p className="text-xs text-on-surface-variant mt-1">100% physically dedicated server hardware with IPMI/iDRAC.</p>
</div>
<div className="pt-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-extrabold text-on-surface font-headline plan-price transition-all duration-300">{price('99.99', '84.99')}</span>
<span className="text-xs text-on-surface-variant font-medium">/month</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-0.5">Custom hardware partitioning</p>
</div>
<div className="space-y-2.5 pt-4">
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">16 Cores / 32 Threads Physical</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">64 GB DDR5 ECC Memory</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">1 TB NVMe SSD in RAID-1</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Full KVM / IPMI Out-of-Band</span>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface font-medium">
<span className="material-symbols-outlined text-primary text-base">check_circle</span>
<span className="">Enterprise DDoS Armor (3.2 Tbps)</span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group btn-cta w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-surface-container-highest text-on-surface font-bold text-xs hover:bg-primary hover:text-on-primary transition-all shadow-sm active:scale-95" data-path="contact" href="/contact"><span className="">Get Quote</span><span className="material-symbols-outlined text-sm btn-arrow-slide transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span></a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-surface-container-low w-full">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-bold text-primary transition-colors hover:bg-surface-container-highest">
<span className="material-symbols-outlined text-sm">settings_system_daydream</span>
            System Customizer
          </div>
<h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
            Select Your Environment &amp; Pre-configured Tools
          </h2>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Need Windows 10/11 Pro instead of Server edition? Or need pre-installed Python, Node.js, and Android virtualization? We flash your node before credential dispatch.
          </p>
<div className="pt-2">
<div className="p-4 bg-surface rounded-xl shadow-sm space-y-2 border border-transparent hover:border-primary/30 transition-all">
<div className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-base">verified</span>
                Instant Auto-Provisioning
              </div>
<p className="text-xs text-on-surface-variant">Credentials are cryptographically delivered via email and client portal in under 180 seconds from checkout completion.</p>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
<div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Select Operating System Image</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Operating system image">
{OS_OPTIONS.map((os) => {
  const selected = selectedOs === os.id;
  return (
<button key={os.id} role="radio" aria-checked={selected} onClick={() => setSelectedOs(os.id)} className={`p-3 rounded-xl text-left flex flex-col justify-between h-24 cursor-pointer transition-all ${selected ? 'bg-primary-fixed ring-2 ring-primary' : 'bg-surface-container hover:bg-surface-container-high'}`} type="button">
<div className="flex items-center justify-between">
<span className={`material-symbols-outlined text-2xl ${selected ? 'text-primary' : 'text-on-surface-variant'}`}>{os.icon}</span>
{selected && <span className="flex w-4 h-4 rounded-full bg-primary items-center justify-center text-white text-[10px]">✓</span>}
</div>
<div>
<div className="text-xs font-bold text-on-surface">{os.name}</div>
<div className="text-[11px] text-on-surface-variant">{os.edition}</div>
</div>
</button>
  );
})}
</div>
<div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant pt-2">Included Pre-Installed Bundles</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="p-3 bg-surface-container-low rounded-xl flex items-center gap-3 bundle-chip cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
<span className="material-symbols-outlined text-primary text-xl">candlestick_chart</span>
<div>
<div className="text-xs font-bold text-on-surface">Trading Ready</div>
<div className="text-[10px] text-on-surface-variant">MT4, MT5, TradingView, cTrader</div>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-xl flex items-center gap-3 bundle-chip cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
<span className="material-symbols-outlined text-primary text-xl">travel_explore</span>
<div>
<div className="text-xs font-bold text-on-surface">Browsing Suite</div>
<div className="text-[10px] text-on-surface-variant">Chrome, Brave, Firefox, Proxies</div>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-xl flex items-center gap-3 bundle-chip cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
<span className="material-symbols-outlined text-primary text-xl">cast_connected</span>
<div>
<div className="text-xs font-bold text-on-surface">Remote Clients</div>
<div className="text-[10px] text-on-surface-variant">AnyDesk, RustDesk, TeamViewer</div>
</div>
</div>
</div>
{(() => {
  const os = OS_OPTIONS.find((o) => o.id === selectedOs)!;
  return (
<a className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-container transition-colors" href={whatsappUrl(`Hello NetSol Services, I would like an RDP server with ${os.name} ${os.edition}.`)} rel="noopener noreferrer" target="_blank">
<span className="">Request {os.name} {os.edition} Setup</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
  );
})()}
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">shield</span>
        Uncompromising Architecture
      </div>
<h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface tracking-tight">
        Engineered for Mission-Critical Continuity
      </h2>
<p className="text-sm text-on-surface-variant">
        No restrictive shared kernels. No sudden system throttling. Your RDP instance operates in total isolation.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 bg-surface-container-low rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6 feature-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow transition-transform duration-300 hover:rotate-6">
<span className="material-symbols-outlined text-2xl">admin_panel_settings</span>
</div>
<h3 className="text-2xl font-bold font-headline text-on-surface">Full Dedicated Administrator Control</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Install and run any application without policy restrictions, port blocks, or shared environment sandboxes. You receive genuine Windows Server administrator rights to configure services, firewalls, and custom drivers effortlessly.
          </p>
</div>
<div className="bg-surface rounded-xl p-4 shadow-sm flex flex-wrap gap-4 text-xs font-semibold text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span className="">Custom Port Forwarding</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span className="">PowerShell &amp; Task Scheduler</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span className="">Independent Registry Control</span>
</div>
</div>
</div>

<div className="md:col-span-5 bg-surface-container-high rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6 feature-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow transition-transform duration-300 hover:rotate-6">
<span className="material-symbols-outlined text-2xl">timer</span>
</div>
<h3 className="text-xl font-bold font-headline text-on-surface">99.999% Rebootless Uptime Guarantee</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Our datacenters feature dual-generator N+2 backup feeds, redundant chillers, and zero automated host reboots without scheduled customer clearance.
          </p>
</div>

<div className="bg-surface rounded-xl p-4 shadow-sm flex items-center gap-4">
<svg className="w-14 h-14 shrink-0 text-primary transition-transform duration-500 hover:scale-110" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99.99, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div>
<div className="text-sm font-bold text-on-surface">365-Day Audited SLA</div>
<div className="text-xs text-on-surface-variant font-mono">0.0001% Total Drift Tolerance</div>
</div>
</div>
</div>

<div className="md:col-span-6 bg-surface-container-low rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6 feature-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow transition-transform duration-300 hover:rotate-6">
<span className="material-symbols-outlined text-2xl">public</span>
</div>
<h3 className="text-xl font-bold font-headline text-on-surface">Multi-Region Low Latency Edge Hubs</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Host within sub-millisecond range of key international financial exchanges and enterprise networks with localized presence.
          </p>
</div>
<div className="grid grid-cols-2 gap-3 pt-2">
<div className="p-3 bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-on-surface">New York (NYC1)</div>
<div className="text-[11px] text-on-surface-variant">Equinix NY4 Proximity</div>
</div>
<div className="p-3 bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-on-surface">London (LON1)</div>
<div className="text-[11px] text-on-surface-variant">LD4 Financial Direct Cross</div>
</div>
<div className="p-3 bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-on-surface">Frankfurt (FRA1)</div>
<div className="text-[11px] text-on-surface-variant">DE-CIX Backbone Peer</div>
</div>
<div className="p-3 bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="text-xs font-bold text-on-surface">Singapore (SIN1)</div>
<div className="text-[11px] text-on-surface-variant">Equinix SG1 Asia Core</div>
</div>
</div>
</div>

<div className="md:col-span-6 bg-surface-container-low rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6 feature-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow transition-transform duration-300 hover:rotate-6">
<span className="material-symbols-outlined text-2xl">lock</span>
</div>
<h3 className="text-xl font-bold font-headline text-on-surface">256-Bit SSL/TLS Encryption &amp; AI Brute Shield</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Standard port 3389 attacks are automatically thwarted. Each server is equipped with dynamic IP blacklisting and optional Network Level Authentication (NLA) hardware filters.
          </p>
</div>
<div className="p-4 bg-surface rounded-xl shadow-sm space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-medium">Automated Intrusion Drops</span>
<span className="text-primary font-bold">Active Shield</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-full transition-all duration-700"></div>
</div>
<div className="text-[11px] text-on-surface-variant pt-1">Default TLS 1.3 protocol handshake with certificate validation</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-surface-container-low w-full">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-md hover:shadow-lg transition-shadow">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 space-y-5">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Ultra-Fluid Responsiveness</span>
<h3 className="text-2xl sm:text-3xl font-bold font-headline text-on-surface">
              Feels Just Like a Local Monitor
            </h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
              Leverage RemoteFX and dynamic display buffer codecs capable of synchronizing 4K resolution displays at 60Hz. Zero keyboard delay, transparent microphone audio passthrough, and local disk redirection supported seamlessly.
            </p>
<ul className="space-y-3 text-xs text-on-surface font-medium">
<li className="flex items-center gap-2 group cursor-default">
<span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-125">monitor</span>
                Multi-monitor span mode with dynamic resolution resizing
              </li>
<li className="flex items-center gap-2 group cursor-default">
<span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-125">content_paste</span>
                Bidirectional clipboard and drag-and-drop secure file transfers
              </li>
<li className="flex items-center gap-2 group cursor-default">
<span className="material-symbols-outlined text-primary text-base transition-transform group-hover:scale-125">smartphone</span>
                Connect smoothly from Windows, macOS, iPadOS, iOS, Android, and Linux
              </li>
</ul>
</div>
<div className="lg:col-span-6">
<div className="rounded-xl overflow-hidden shadow-lg h-72 group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A clean modern setup with a high-end ultra wide monitor displaying financial charting applications, code editor and live streaming server health telemetry, illuminated by subtle soft ambient purple light, clean minimalist desk aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhFe1Y9Azt0nCZ1um0EZSW8Q8zaEesWT73jeUqSuOOlHbFX3xxb7e3JiuTQ_JlH5oQJTz_toxhjggFdGGrrW3bX8aZUZmSf1DY-2fnQ2iXjSuPGZsbRf81k4Mhxamp4oHdiGOUL44R9fR4qifxhDRegk2xEiOMOpflS1bDyh9Jv3RQhgFnxeWxolSMNNvDuOYlIfA78Ps8tE-2MLVLtMIB7CJr1bal4ThYKEGxiE-raB3qvYihXH1uGg" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-4xl mx-auto px-6 lg:px-8 w-full">
<div className="text-center mb-12 space-y-2">
<div className="text-xs font-bold uppercase tracking-wider text-primary">Answers &amp; Technical Details</div>
<h2 className="text-3xl font-headline font-bold text-on-surface">Frequently Asked Questions</h2>
<p className="text-sm text-on-surface-variant">Everything you need to know about our dedicated RDP workstation infrastructure.</p>
</div>
<div className="space-y-3">
{FAQS.map((faq, i) => {
  const open = openFaq === i;
  return (
<div key={faq.q} className="bg-surface-container-low rounded-xl transition-all duration-200 hover:bg-surface-container hover:shadow-sm">
<button className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} type="button">
<h4 className="text-sm font-bold text-on-surface">{faq.q}</h4>
<span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>expand_more</span>
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
</section>

<section className="pb-16 max-w-7xl mx-auto px-6 lg:px-12 w-full">
<div className="bg-primary rounded-2xl p-8 lg:p-10 text-on-primary shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
<div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="space-y-2 max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          Direct Engineer WhatsApp Hotline
        </div>
<h3 className="text-2xl sm:text-3xl font-headline font-bold">
          Need a Custom Multi-IP or High-RAM Cluster?
        </h3>
<p className="text-sm text-on-primary/80 leading-relaxed">
          Chat directly with a certified server architect. We will configure and activate your custom enterprise RDP environment in real time with 24/7 immediate assistance.
        </p>
</div>
<div className="relative z-10 shrink-0">
<a className="group btn-cta inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white text-on-surface font-bold text-sm shadow hover:bg-surface-container hover:shadow-lg transition-all active:scale-95" href={whatsappUrl('Hello NetSol Services, I need a custom multi-IP / high-RAM RDP setup.')} rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 group-hover:scale-110">chat</span>
<span className="">Open WhatsApp Direct Chat</span>
</a>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}
