'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

// Shown until the client portal backend is connected.
const PORTAL_NOTICE = 'Online console sign-in is not available yet. Please contact our support team on WhatsApp and we will help you access your account.';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice(PORTAL_NOTICE);
  };

  return (
    <>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full relative overflow-hidden py-10 lg:py-16 items-center justify-center min-h-[calc(100vh-4rem)] motion-fade-in">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-primary/10 via-secondary-container/20 to-tertiary-fixed/15 rounded-full blur-3xl opacity-70"></div>
<div className="absolute -top-32 right-12 w-96 h-96 bg-primary-container/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-24 left-10 w-96 h-96 bg-tertiary-container/10 rounded-full blur-2xl"></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.035] text-primary" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="48" id="infra-grid" patternUnits="userSpaceOnUse" width="48">
<circle cx="2" cy="2" fill="currentColor" r="1.5"></circle>
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#infra-grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="relative w-full max-w-lg px-4 sm:px-6 z-10">

<div className="flex items-center justify-center gap-2 mb-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide uppercase text-on-surface-variant">Console Global Nodes: Operational</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="text-[11px] font-mono font-medium text-primary">v4.18.2</span>
</div>
</div>

<div className="bg-surface-container-lowest/90 backdrop-blur-xl shadow-xl rounded-xl p-7 sm:p-10 transition-all duration-300">

<div className="flex flex-col items-center text-center mb-8">
<div className="relative p-2.5 rounded-xl bg-surface-container shadow-inner mb-4 flex items-center justify-center group">
<img alt="NetSol Services Logo" className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105" src="/images/logo.svg" />
</div>
<h1 className="text-2xl sm:text-3xl font-headline font-bold tracking-tight text-on-surface">
          Sign in to NetSol Console
        </h1>
<p className="mt-2 text-sm text-on-surface-variant leading-relaxed max-w-sm">
          Access your cloud servers, hosting control panels, and billing management.
        </p>
</div>

<form className="space-y-5" onSubmit={handleSubmit}>

<div className="space-y-1.5">
<label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="work-email">
            Work Email Address
          </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none transition-colors">
              mail
            </span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface text-sm rounded-lg placeholder:text-outline-variant outline-none focus:bg-surface-container focus:shadow-[0_0_0_2px_#6750A4] transition-all duration-200" id="work-email" name="email" placeholder="admin@enterprise-cloud.net" required type="email" />
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">
              Password
            </label>
<a className="text-xs font-semibold text-primary hover:text-primary-container transition-colors duration-150" href={whatsappUrl('Hello NetSol Support, I forgot my console password and need help resetting it.')} rel="noopener noreferrer" target="_blank">
              Forgot Password?
            </a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none transition-colors">
              lock
            </span>
<input className="w-full pl-10 pr-11 py-3 bg-surface-container-low text-on-surface text-sm rounded-lg placeholder:text-outline-variant outline-none focus:bg-surface-container focus:shadow-[0_0_0_2px_#6750A4] transition-all duration-200" id="password" name="password" placeholder="••••••••••••" required type={showPassword ? 'text' : 'password'} />
<button aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3 text-outline hover:text-on-surface p-1 rounded transition-colors" onClick={() => setShowPassword(!showPassword)} type="button">
<span className="material-symbols-outlined text-[19px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="relative flex items-center gap-2.5 cursor-pointer select-none">
<input className="sr-only peer" id="remember-me" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
<div className={`w-4 h-4 rounded flex items-center justify-center transition-all duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${remember ? 'bg-primary' : 'bg-surface-container-high'}`}>
<span className={`material-symbols-outlined text-on-primary text-[14px] font-bold transition-opacity ${remember ? 'opacity-100' : 'opacity-0'}`}>
                check
              </span>
</div>
<span className={`text-xs font-medium ${remember ? 'text-on-surface' : 'text-on-surface-variant'}`}>
              Remember this device for 30 days
            </span>
</label>

<div className="relative group">
<button aria-label="Security device policy info" className="flex items-center text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">info</span>
</button>
<div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-52 p-2.5 bg-inverse-surface text-inverse-on-surface text-[11px] rounded-lg shadow-xl z-30 leading-snug">
              Session tokens remain active for 30 days on hardware-recognized IP clusters under strict TLS session tickets.
            </div>
</div>
</div>

<button className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#6750A4] to-[#4F46E5] text-on-primary font-semibold text-sm tracking-wide shadow-md hover:shadow-[0_8px_20px_rgba(103,80,164,0.35)] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 group transition-all duration-200 mt-2" type="submit">
<span className="">Sign In to Console</span>
<span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
            arrow_forward
          </span>
</button>
{notice && (
<div role="status" className="p-3.5 rounded-lg bg-primary-fixed text-on-primary-fixed text-xs leading-relaxed flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">info</span>
<span>{notice} <a className="font-semibold underline" href={whatsappUrl('Hello NetSol Support, I need help with Console login')} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a></span>
</div>
)}
</form>

<div className="relative my-7">
<div className="w-full h-px bg-surface-variant"></div>
<div className="relative flex justify-center text-[11px] uppercase tracking-wider font-semibold">
<span className="bg-surface-container-lowest px-3 text-outline">
            or continue with enterprise SSO
          </span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">

<button className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors duration-150 text-xs font-semibold text-on-surface shadow-sm group" onClick={() => setNotice(PORTAL_NOTICE)} type="button">
<svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
<path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.67-5.17 3.67-9.15z" fill="#4285F4"></path>
<path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.34 24 12 24z" fill="#34A853"></path>
<path d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z" fill="#FBBC05"></path>
<path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z" fill="#EA4335"></path>
</svg>
<span className="truncate">Google Workspace</span>
</button>

<button className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors duration-150 text-xs font-semibold text-on-surface shadow-sm group" onClick={() => setNotice(PORTAL_NOTICE)} type="button">
<svg className="w-4 h-4 fill-current shrink-0 text-on-surface" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
</svg>
<span className="truncate">GitHub / SAML</span>
</button>
</div>

<div className="mt-8 text-center pt-2">
<p className="text-xs text-on-surface-variant font-medium">
          Don't have an enterprise account? 
          <Link className="font-semibold text-primary hover:text-primary-container transition-colors inline-flex items-center gap-0.5 ml-1" href="/signup">
<span className="">Sign Up</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</Link>
</p>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-on-surface-variant text-[11px] px-2">
<div className="flex items-center gap-1.5 bg-surface-container/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-primary text-[15px]">enhanced_encryption</span>
<span className="font-medium">256-bit TLS Encrypted</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-tertiary text-[15px]">verified_user</span>
<span className="font-medium">SOC 2 Type II Certified</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-secondary text-[15px]">monitoring</span>
<span className="font-medium">24/7 Security NOC</span>
</div>
</div>
</div>

<aside className="fixed bottom-6 right-6 z-50">
<a aria-label="Direct WhatsApp Cloud Support" className="group relative flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300" href={whatsappUrl('Hello NetSol Support, I need help with Console login')} rel="noopener noreferrer" target="_blank">

<span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]"></span>
</span>

<svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
</svg>

<span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs pl-0 group-hover:pl-2">
        Chat with Support
      </span>
</a>
</aside>
</div></main>
    </>
  );
}
