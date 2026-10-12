'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

// Shown until the client portal backend is connected.
const PORTAL_NOTICE = 'Online account creation is not available yet. Please contact our sales team on WhatsApp and we will set up your account.';

const STRENGTH_LEVELS = [
  { label: 'Awaiting Input', text: 'text-outline', bar: 'bg-outline-variant' },
  { label: 'Weak', text: 'text-error', bar: 'bg-error' },
  { label: 'Fair', text: 'text-tertiary', bar: 'bg-tertiary-container' },
  { label: 'Good', text: 'text-primary', bar: 'bg-primary-container' },
  { label: 'Strong', text: 'text-emerald-600', bar: 'bg-emerald-500' },
];

function passwordScore(pwd: string) {
  if (!pwd) return 0;
  let score = 1;
  if (pwd.length >= 8 && /[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
  if (pwd.length >= 8 && /\d/.test(pwd)) score++;
  if (pwd.length >= 10 && /[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
}

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const score = passwordScore(password);
  const strength = STRENGTH_LEVELS[score];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotice(null);
      setError('Passwords do not match.');
      return;
    }
    setError(null);
    setNotice(PORTAL_NOTICE);
  };

  return (
    <>
      <main className="flex-1 flex items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
<div className="w-full max-w-7xl mx-auto motion-fade-in">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

<div className="lg:col-span-6 relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-high border border-surface-variant/60 p-8 sm:p-10 shadow-lg">

<div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
<span className="material-symbols-outlined text-xl">cloud_sync</span>
</div>
<div>
<span className="text-xs font-extrabold tracking-widest text-primary uppercase">NetSol Services</span>
<p className="text-[11px] text-on-surface-variant font-medium">Enterprise Mesh Compute</p>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur border border-surface-variant shadow-sm">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[11px] font-bold tracking-wide text-on-surface uppercase">Cluster Node 01 Online</span>
<span className="text-outline text-xs">|</span>
<span className="text-[11px] font-extrabold text-primary">99.99% SLA</span>
</div>
</div>

<div className="relative z-10 my-6">
<div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-surface-variant group bg-inverse-surface motion-float">
<img alt="NetSol Cloud Infrastructure" className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105" src="/images/3d-servers.png" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

<div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed-dim text-lg">speed</span>
<span className="text-xs font-semibold">Provision Latency: <strong className="text-emerald-400 font-mono">&lt; 420ms</strong></span>
</div>
<div className="flex items-center gap-2.5 text-xs font-mono">
<span className="hidden sm:inline text-slate-300">Nodes: 1,482</span>
<span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px]">
<span className="material-symbols-outlined text-xs">verified</span> Active
                  </span>
</div>
</div>
</div>
</div>

<div className="relative z-10 space-y-5">
<h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface leading-tight">
              Deploy, scale, and manage your high-performance servers in real time.
            </h1>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-surface-variant/50 backdrop-blur">
<div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
<span className="material-symbols-outlined text-base font-bold">bolt</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Instant Provisioning</p>
<p className="text-[11px] text-on-surface-variant">Bare metal ready &lt; 55s</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-surface-variant/50 backdrop-blur">
<div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
<span className="material-symbols-outlined text-base font-bold">terminal</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Full Root Access</p>
<p className="text-[11px] text-on-surface-variant">Direct IPMI &amp; SSH control</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-surface-variant/50 backdrop-blur">
<div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
<span className="material-symbols-outlined text-base font-bold">public</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Global Edge Network</p>
<p className="text-[11px] text-on-surface-variant">34 Datacenters worldwide</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-surface-variant/50 backdrop-blur">
<div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
<span className="material-symbols-outlined text-base font-bold">monitoring</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">24/7 NOC Monitoring</p>
<p className="text-[11px] text-on-surface-variant">Dedicated enterprise SRE team</p>
</div>
</div>
</div>

<div className="pt-2 flex items-center gap-3">
<div className="flex -space-x-2 overflow-hidden">
<span className="inline-flex h-7 w-7 rounded-full ring-2 ring-surface-container-high bg-primary-fixed items-center justify-center text-[10px] font-bold text-primary">TX</span>
<span className="inline-flex h-7 w-7 rounded-full ring-2 ring-surface-container-high bg-secondary-container items-center justify-center text-[10px] font-bold text-secondary">VL</span>
<span className="inline-flex h-7 w-7 rounded-full ring-2 ring-surface-container-high bg-tertiary-fixed items-center justify-center text-[10px] font-bold text-tertiary">NT</span>
<span className="inline-flex h-7 w-7 rounded-full ring-2 ring-surface-container-high bg-inverse-primary items-center justify-center text-[10px] font-bold text-primary">DE</span>
</div>
<p className="text-xs text-on-surface-variant font-medium">
                Trusted by <strong className="text-on-surface font-bold">12,000+ DevOps engineers</strong> worldwide.
              </p>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col justify-center">
<div className="relative rounded-2xl bg-surface-container-lowest p-8 sm:p-10 shadow-xl border border-surface-variant/70">

<div className="mb-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide mb-3">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
<span className="">Client Portal v4.8</span>
</div>
<h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface">Create Your NetSol Account</h2>
<p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                Launch your secure cloud instance in minutes. Free 14-day staging tier included.
              </p>
</div>

<form className="space-y-4" id="signup-form" onSubmit={handleSubmit}>

<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="fullname">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-lg">badge</span>
</div>
<input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="fullname" placeholder="Alex Henderson" required type="text" />
</div>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="email">Work Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-lg">alternate_email</span>
</div>
<input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="email" placeholder="alex.henderson@datacenter.io" required type="email" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-lg">lock</span>
</div>
<input className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="password" minLength={8} placeholder="Min. 8 characters" required type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
<button aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface" onClick={() => setShowPassword(!showPassword)} type="button">
<span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
</button>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="confirm-password">Confirm</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-lg">enhanced_encryption</span>
</div>
<input className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="confirm-password" placeholder="Repeat password" required type={showConfirm ? 'text' : 'password'} value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setError(null); }} />
<button aria-label={showConfirm ? 'Hide password' : 'Show password'} className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface" onClick={() => setShowConfirm(!showConfirm)} type="button">
<span className="material-symbols-outlined text-lg">{showConfirm ? 'visibility_off' : 'visibility'}</span>
</button>
</div>
</div>
</div>

<div className="space-y-1.5 pt-0.5">
<div className="flex items-center justify-between text-[11px]">
<span className="text-on-surface-variant font-medium">Security Complexity</span>
<span className={`font-bold uppercase tracking-wider ${strength.text}`}>{strength.label}</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden flex gap-1">
{[1, 2, 3, 4].map((n) => (
<div key={n} className={`h-full w-1/4 rounded-full transition-colors duration-300 ${score >= n ? strength.bar : 'bg-outline-variant'}`}></div>
))}
</div>
</div>

<div className="pt-1 flex items-start gap-2.5">
<input className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/30 cursor-pointer accent-primary" id="terms" required type="checkbox" />
<label className="text-xs text-on-surface-variant leading-relaxed select-none" htmlFor="terms">
                  I agree to the <span className="font-semibold text-on-surface">Terms of Service</span>, <span className="font-semibold text-on-surface">Privacy Policy</span>, and NetSol SLA guidelines.
                </label>
</div>

<button className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-[#5b3ea6] active:bg-[#432d77] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group mt-2" type="submit">
<span className="">Create Account</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
{error && (
<div role="alert" className="p-3 rounded-lg bg-error-container text-on-error-container text-xs font-medium">{error}</div>
)}
{notice && (
<div role="status" className="p-3.5 rounded-lg bg-primary-fixed text-on-primary-fixed text-xs leading-relaxed flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">info</span>
<span>{notice} <a className="font-semibold underline" href={whatsappUrl('Hello NetSol Services, I would like to create an account.')} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a></span>
</div>
)}
</form>

<div className="relative my-5">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-surface-variant"></div>
</div>
<div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-outline">
<span className="bg-surface-container-lowest px-3">Or Continue With</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-surface-variant bg-surface hover:bg-surface-container transition-colors text-xs font-semibold text-on-surface" onClick={() => setNotice(PORTAL_NOTICE)} type="button">
<svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853"></path>
<path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
</svg>
<span className="">Google SSO</span>
</button>
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-surface-variant bg-surface hover:bg-surface-container transition-colors text-xs font-semibold text-on-surface" onClick={() => setNotice(PORTAL_NOTICE)} type="button">
<svg className="w-4 h-4 flex-shrink-0 fill-current text-on-surface" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fillRule="evenodd"></path>
</svg>
<span className="">GitHub Auth</span>
</button>
</div>

<div className="mt-6 text-center">
<p className="text-xs text-on-surface-variant font-medium">
                Already have an enterprise account? 
                <Link className="font-bold text-primary hover:text-primary-container hover:underline ml-1" href="/login">Log In →</Link>
</p>
</div>

<div className="mt-6 pt-4 bg-surface-container-low border-t border-surface-variant -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 px-6 py-3.5 rounded-b-2xl flex flex-wrap items-center justify-around gap-4 text-outline text-[11px] font-semibold">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base text-primary">verified_user</span>
<span className="">256-Bit SSL Encrypted</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base text-primary">terminal</span>
<span className="">Instant Cloud Console Ready</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
