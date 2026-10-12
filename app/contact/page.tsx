'use client';

import React, { useState } from 'react';
import { whatsappUrl } from '@/lib/site';

const SERVICE_OPTIONS = [
  { value: 'Cloud Hosting', label: 'Cloud Hosting' },
  { value: 'VPS', label: 'VPS' },
  { value: 'RDP', label: 'RDP' },
  { value: 'Web Hosting', label: 'Web Hosting' },
  { value: 'Email Hosting', label: 'Email Hosting' },
  { value: 'Others', label: 'Others' },
];

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-white/5 text-inverse-on-surface placeholder:text-inverse-on-surface/30 text-sm focus:outline-none focus:bg-white/10 transition-colors shadow-inner';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [critical, setCritical] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      'New inquiry from the NetSol Services website',
      critical ? '*CRITICAL SLA DISPATCH REQUESTED*' : null,
      `Name: ${fullName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service: ${service}`,
      `Requirements: ${details}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setService('');
    setDetails('');
    setCritical(false);
    setSubmitted(false);
  };

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full">
<section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20 space-y-12">

<div className="max-w-3xl mx-auto w-full"><div className="rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 lg:p-10 shadow-2xl relative overflow-hidden"><div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/25 rounded-full blur-3xl pointer-events-none"></div><div className="absolute -bottom-24 -left-24 w-80 h-80 bg-tertiary-container/15 rounded-full blur-3xl pointer-events-none"></div><div className="relative space-y-8">
<div className="text-center space-y-3 pb-2"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase tracking-wider"><span className="material-symbols-outlined text-[15px]">headset_mic</span> Enterprise Support</div><h1 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tight text-inverse-on-surface">Contact NetSol Services</h1><p className="text-sm text-inverse-on-surface/80 max-w-xl mx-auto leading-relaxed">Speak directly with our infrastructure specialists for consultations, quotes, or immediate server assistance.</p></div>

<form className="space-y-5 motion-fade-in" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5"><label className="block text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/80" htmlFor="fullName">Full Name *</label><input className={INPUT_CLASS} id="fullName" placeholder="Alex Morgan" required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
<div className="space-y-1.5"><label className="block text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/80" htmlFor="workEmail">Work Email *</label><input className={INPUT_CLASS} id="workEmail" placeholder="alex@company.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
<div className="space-y-1.5"><label className="block text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/80" htmlFor="phoneNumber">Phone Number</label><input className={INPUT_CLASS} id="phoneNumber" placeholder="+1 (555) 019-2834" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
<div className="space-y-1.5"><label className="block text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/80" htmlFor="serviceCategory">Service Category *</label><div className="relative"><select className={`${INPUT_CLASS} appearance-none`} id="serviceCategory" required value={service} onChange={(e) => setService(e.target.value)}><option className="bg-inverse-surface text-inverse-on-surface" disabled value="">Select service category...</option>{SERVICE_OPTIONS.map((opt) => (<option key={opt.value} className="bg-inverse-surface text-inverse-on-surface" value={opt.value}>{opt.label}</option>))}</select><span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-inverse-on-surface/50 text-[20px]">expand_more</span></div></div>
</div>
<div className="space-y-1.5"><label className="block text-xs font-semibold tracking-wide uppercase text-inverse-on-surface/80" htmlFor="scopeDetails">Technical Requirements / Scope *</label><textarea className={`${INPUT_CLASS} resize-none`} id="scopeDetails" placeholder="Specify core count, RAM, target throughput, OS preferences, or migration pain points..." required rows={4} value={details} onChange={(e) => setDetails(e.target.value)}></textarea></div>
<div className="p-4 rounded-xl bg-white/5 flex items-start gap-3"><input className="mt-1 h-4 w-4 rounded accent-primary-container bg-white/10 text-primary cursor-pointer" id="criticalSla" type="checkbox" checked={critical} onChange={(e) => setCritical(e.target.checked)} /><label className="text-xs text-inverse-on-surface/90 cursor-pointer select-none leading-relaxed" htmlFor="criticalSla"><span className="font-semibold text-tertiary-fixed-dim">Critical SLA Dispatch</span> — Flag this request for urgent deployment, active node failure, or scheduled migration under 24h.</label></div>
<div className="pt-2 space-y-3"><button className="w-full py-4 px-6 rounded-xl font-headline font-bold text-sm tracking-wide bg-primary-container text-on-primary shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group" type="submit"><span className="">Submit Inquiry</span><span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span></button><div className="flex items-center justify-center gap-3 pt-1"><a className="inline-flex items-center gap-2 text-xs font-medium text-[#25D366] hover:brightness-110 transition-all px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10" href={whatsappUrl()} rel="noopener noreferrer" target="_blank"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.991.541 1.764.819 2.796.819 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.806-5.767-5.806zm3.376 8.21c-.141.396-.713.738-1.015.776-.295.037-.674.053-1.089-.08a7.834 7.834 0 0 1-2.457-1.465 8.354 8.354 0 0 1-1.696-2.112c-.227-.393-.024-.606.173-.803.178-.178.396-.457.595-.686.197-.229.263-.393.395-.658.131-.265.066-.498-.033-.698s-.887-2.138-1.216-2.932c-.321-.773-.647-.669-.887-.681-.229-.012-.492-.014-.755-.014-.263 0-.69.098-1.052.493-.361.394-1.381 1.352-1.381 3.298 0 1.947 1.414 3.829 1.612 4.092.197.264 2.784 4.251 6.745 5.962.942.407 1.678.65 2.252.833.946.301 1.808.258 2.489.157.759-.113 2.336-.955 2.665-1.877.329-.921.329-1.71.23-1.876-.098-.165-.361-.263-.756-.46z"></path></svg><span className="">Prefer direct instant chat? Connect on WhatsApp</span></a></div></div>
</form>

{submitted && (
<div className="absolute inset-0 bg-inverse-surface/95 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4"><div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-[36px]">check</span></div><div className="space-y-1 max-w-sm"><h3 className="text-xl font-headline font-bold text-inverse-on-surface">Almost done</h3><p className="text-xs text-inverse-on-surface/75">WhatsApp has opened in a new tab with your inquiry filled in. Press send there and our team will reply shortly.</p></div><button className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-inverse-on-surface transition-colors" onClick={resetForm} type="button">Submit Another Request</button></div>
)}
</div></div></div>
</section>
</div></main>
    </>
  );
}
