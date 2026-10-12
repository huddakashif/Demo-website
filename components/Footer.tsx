import React from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f2fa] border-t border-[#cbc4d2]/30 py-16 text-[#1d1b20]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <img src="/images/logo.svg" alt="NetSol Services Logo" className="h-9 w-auto" />
          </Link>
          <p className="text-sm text-[#494551] leading-relaxed max-w-sm">
            NetSol Services delivers ultra-fast, highly scalable cloud infrastructure, VPS, RDP, and managed hosting solutions built for modern businesses.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-xs font-semibold text-[#494551]">All Systems Operational · 99.9% Uptime Guarantee</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#7a7582] mb-4">Hosting & Compute</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/web-hosting" className="text-[#494551] hover:text-[#4f378a] transition-colors">Web Hosting</Link></li>
            <li><Link href="/vps" className="text-[#494551] hover:text-[#4f378a] transition-colors">VPS Hosting</Link></li>
            <li><Link href="/cloud" className="text-[#494551] hover:text-[#4f378a] transition-colors">Cloud Servers</Link></li>
            <li><Link href="/rdp" className="text-[#494551] hover:text-[#4f378a] transition-colors">RDP Windows Servers</Link></li>
            <li><Link href="/email-hosting" className="text-[#494551] hover:text-[#4f378a] transition-colors">Email Hosting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#7a7582] mb-4">Support & Tools</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/contact" className="text-[#494551] hover:text-[#4f378a] transition-colors">Submit Ticket</Link></li>
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-[#494551] hover:text-[#4f378a] transition-colors">24/7 WhatsApp Support</a></li>
            <li><Link href="/login" className="text-[#494551] hover:text-[#4f378a] transition-colors">Client Portal</Link></li>
            <li><span className="text-[#7a7582] cursor-not-allowed">Knowledgebase</span></li>
            <li><span className="text-[#7a7582] cursor-not-allowed">Network Status</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#7a7582] mb-4">Account</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/login" className="text-[#494551] hover:text-[#4f378a] transition-colors">Client Log In</Link></li>
            <li><Link href="/signup" className="text-[#494551] hover:text-[#4f378a] transition-colors">Create Account</Link></li>
            <li><Link href="/contact" className="text-[#494551] hover:text-[#4f378a] transition-colors">Custom Enterprise Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#cbc4d2]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7a7582]">
        <p>© {new Date().getFullYear()} NetSol Services. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Acceptable Use</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
