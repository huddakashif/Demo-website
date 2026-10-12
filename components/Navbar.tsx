'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { whatsappUrl } from '@/lib/site';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serversOpen, setServersOpen] = useState(false);
  const pathname = usePathname();

  const isServerActive = pathname === '/vps' || pathname === '/cloud' || pathname === '/rdp';

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fdf7ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e6e0e9]/60">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              alt="NetSol Services Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src="/images/logo.svg"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            <div
              className="relative group"
              onMouseEnter={() => setServersOpen(true)}
              onMouseLeave={() => setServersOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  isServerActive
                    ? 'bg-[#6750a4] text-[#e0d2ff]'
                    : 'text-[#494551] hover:text-[#4f378a]'
                }`}
                type="button"
                onClick={() => setServersOpen(!serversOpen)}
              >
                <span>Servers</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-180">
                  keyboard_arrow_down
                </span>
              </button>

              <div className={`absolute left-0 top-full pt-2 ${serversOpen ? 'block' : 'hidden'} group-hover:block w-80 z-50`}>
                <div className="flex flex-col p-2 bg-[#fdf7ff] rounded-2xl shadow-2xl border border-[#cbc4d2]/30 animate-fade-up">
                  <Link
                    href="/vps"
                    className={`w-full flex flex-col p-3 rounded-xl transition-colors group/item ${
                      pathname === '/vps' ? 'bg-[#f2ecf4]' : 'hover:bg-[#f2ecf4]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#1d1b20] group-hover/item:text-[#4f378a] transition-colors">
                        VPS Hosting
                      </span>
                      <span className="material-symbols-outlined text-base text-[#4f378a] opacity-0 group-hover/item:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </div>
                    <span className="text-xs text-[#494551] mt-0.5">High-performance NVMe virtual instances</span>
                  </Link>

                  <Link
                    href="/cloud"
                    className={`w-full flex flex-col p-3 rounded-xl transition-colors group/item ${
                      pathname === '/cloud' ? 'bg-[#f2ecf4]' : 'hover:bg-[#f2ecf4]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#1d1b20] group-hover/item:text-[#4f378a] transition-colors">
                        Cloud Server
                      </span>
                      <span className="material-symbols-outlined text-base text-[#4f378a] opacity-0 group-hover/item:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </div>
                    <span className="text-xs text-[#494551] mt-0.5">Enterprise elastic compute & Ceph storage</span>
                  </Link>

                  <Link
                    href="/rdp"
                    className={`w-full flex flex-col p-3 rounded-xl transition-colors group/item ${
                      pathname === '/rdp' ? 'bg-[#f2ecf4]' : 'hover:bg-[#f2ecf4]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#1d1b20] group-hover/item:text-[#4f378a] transition-colors">
                        RDP Server
                      </span>
                      <span className="material-symbols-outlined text-base text-[#4f378a] opacity-0 group-hover/item:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </div>
                    <span className="text-xs text-[#494551] mt-0.5">Dedicated Windows remote desktop with low latency</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/web-hosting"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/web-hosting'
                  ? 'bg-[#6750a4] text-[#e0d2ff]'
                  : 'text-[#494551] hover:text-[#4f378a]'
              }`}
            >
              Web Hosting
            </Link>
            <Link
              href="/email-hosting"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/email-hosting'
                  ? 'bg-[#6750a4] text-[#e0d2ff]'
                  : 'text-[#494551] hover:text-[#4f378a]'
              }`}
            >
              Email Hosting
            </Link>
            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'bg-[#6750a4] text-[#e0d2ff]'
                  : 'text-[#494551] hover:text-[#4f378a]'
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-bold transition-colors"
            href={whatsappUrl()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.531 1.764.82 2.796.82 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.806-5.767-5.806zm0-1.839c4.198 0 7.606 3.408 7.607 7.611 0 4.199-3.408 7.61-7.607 7.61-1.309 0-2.535-.333-3.607-.915l-4.424 1.16 1.181-4.316c-.662-1.111-1.018-2.39-1.018-3.74 0-4.203 3.408-7.61 7.608-7.61zm4.453 10.748c-.183.516-.909.957-1.464 1.077-.38.082-.876.147-2.548-.544-2.14-.885-3.52-3.056-3.626-3.198-.107-.142-.87-1.157-.87-2.207 0-1.05.548-1.567.744-1.781.196-.214.426-.268.568-.268.143 0 .285.002.408.008.131.007.306-.05.479.366.182.437.62 1.512.674 1.622.055.11.091.239.018.384-.073.146-.11.237-.219.364-.11.127-.23.284-.329.382-.109.11-.223.23-.096.449.127.218.564.93 1.209 1.505.83.74 1.53.968 1.748 1.078.219.11.347.091.475-.055.128-.146.547-.638.693-.857.146-.219.292-.182.493-.11.2.073 1.277.602 1.496.711.219.11.365.164.42.256.055.091.055.528-.128 1.044z" />
            </svg>
            <span>WhatsApp (24/7)</span>
          </a>

          <Link
            href="/login"
            className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
              pathname === '/login' ? 'text-[#4f378a]' : 'text-[#494551] hover:text-[#4f378a]'
            }`}
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#4f378a] text-white font-semibold text-sm shadow hover:bg-[#6750a4] active:scale-95 transition-all"
          >
            Sign Up
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg text-[#494551] hover:bg-[#f2ecf4] transition-colors"
            type="button"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#fdf7ff] border-t border-[#e6e0e9] px-6 py-6 space-y-4 shadow-xl animate-fade-up">
          <div className="space-y-1">
            <div className="font-bold text-xs uppercase tracking-wider text-[#7a7582] px-3 py-1">Servers</div>
            <Link
              href="/vps"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              VPS Hosting
            </Link>
            <Link
              href="/cloud"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              Cloud Server
            </Link>
            <Link
              href="/rdp"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              RDP Server
            </Link>
          </div>

          <div className="border-t border-[#e6e0e9] pt-2 space-y-1">
            <Link
              href="/web-hosting"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              Web Hosting
            </Link>
            <Link
              href="/email-hosting"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              Email Hosting
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#1d1b20] hover:bg-[#f2ecf4] rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          <div className="border-t border-[#e6e0e9] pt-4 flex items-center justify-between">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-[#4f378a]"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-xl bg-[#4f378a] text-white font-semibold text-sm"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
