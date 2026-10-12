# NetSol Services — 3D Cloud & Hosting Portal (Next.js)

High-performance Web Hosting, NVMe VPS, Elastic Cloud, and Dedicated Windows RDP portal, converted from Google Stitch design project `12046429150585887890` into a production-ready Next.js (App Router) + TypeScript application.

## Tech Stack & Design System
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Material Design 3 Design Tokens (Tailwind + Custom CSS Variables in `app/globals.css`)
- **Typography**: Public Sans via Google Fonts
- **Icons**: Material Symbols Outlined + Clean SVG Logo & Visuals
- **Assets**: 3D Cyber Infrastructure Renders (Datacenter, NVMe Cloud, Remote Desktop Laptop) stored in `public/images/`

## Available Routes
- **`/`** — Home page with Hero, Live telemetry metrics, Hosting tier cards, Datacenter architecture, Testimonials, FAQ, and CTA
- **`/web-hosting`** — cPanel Web Hosting plans with Litespeed, NVMe Gen4, and 1-Click installers
- **`/vps`** — NVMe KVM Virtual Private Servers with customizable CPU/RAM/Storage, Linux/Windows OS
- **`/cloud`** — Enterprise Elastic Cloud instances with Ceph storage and interactive pricing calculator
- **`/rdp`** — Dedicated Windows Remote Desktop instances with low-latency connection speeds
- **`/email-hosting`** — Professional Business Email hosting with dedicated IP reputation & spam filtering
- **`/contact`** — Interactive inquiry dispatch form, 24/7 WhatsApp support, and direct engineer contact
- **`/login`** — Client Portal authentication with remember-me and social SSO options
- **`/signup`** — Client registration with tier selection, password strength check, and instant setup

## Run the Project
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)
