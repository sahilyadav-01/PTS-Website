import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface border-t border-surface-container-high">
      {/* Top Telemetry strip */}
      <div className="w-full bg-surface-container-low px-4 sm:px-gutter-lg py-space-md flex flex-wrap items-center justify-between gap-space-md font-label-sm text-label-sm border-b border-surface-container-high/60">
        <div className="flex items-center gap-space-lg flex-wrap">
          <div>
            <span className="text-on-surface-variant uppercase">HQ Telemetry:</span>{' '}
            <span className="text-primary-container font-mono">LAT 39.7392° N / LON 104.9903° W</span>
          </div>
          <div>
            <span className="text-on-surface-variant uppercase">Dispatch Center:</span>{' '}
            <span className="text-on-surface">24/7/365 Tier-3 Ready</span>
          </div>
          <div className="hidden lg:block">
            <span className="text-on-surface-variant uppercase">Calibration Lab:</span>{' '}
            <span className="text-primary font-mono">ISO/IEC 17025 Accredited</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm font-mono text-label-sm text-on-surface-variant">
          <span>PORTAL VER: 4.8.2-PROD</span>
          <span className="text-outline">/</span>
          <span className="text-primary-container font-bold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-gutter-lg py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PTS Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
            Perfect Tech Solutions (PTS) is the specialized end-to-end technical engineering partner for modern road, pavement, and bridge inspection systems across the complete civil lifecycle.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-on-surface-variant">
            <span className="px-2 py-1 rounded bg-surface-container border border-outline-variant">ISO/IEC 17025</span>
            <span className="px-2 py-1 rounded bg-surface-container border border-outline-variant">IPC-A-610 CLASS 3</span>
            <span className="px-2 py-1 rounded bg-surface-container border border-outline-variant">AASHTO R32</span>
          </div>
          <div className="text-xs font-mono text-primary-container font-semibold pt-1">
            Author & Lead Engineer: Sahil Yadav
          </div>
        </div>

        {/* Fleet Systems */}
        <div className="flex flex-col gap-3 font-label-md text-label-md">
          <span className="text-primary font-bold uppercase tracking-wider text-xs font-mono">// FLEET SYSTEMS</span>
          <Link to="/nsv" className="text-on-surface-variant hover:text-primary transition-colors">Network Survey Vehicles</Link>
          <Link to="/fwd" className="text-on-surface-variant hover:text-primary transition-colors">Falling Weight Deflectometer</Link>
          <Link to="/mbiu" className="text-on-surface-variant hover:text-primary transition-colors">Mobile Bridge Inspection</Link>
          <Link to="/software-and-data" className="text-on-surface-variant hover:text-primary transition-colors">Software & Data Processing</Link>
          <Link to="/hardware-solutions" className="text-on-surface-variant hover:text-primary transition-colors">Hardware & PCB Lab</Link>
        </div>

        {/* Support & Services */}
        <div className="flex flex-col gap-3 font-label-md text-label-md">
          <span className="text-primary font-bold uppercase tracking-wider text-xs font-mono">// SUPPORT & SLAS</span>
          <Link to="/services" className="text-on-surface-variant hover:text-primary transition-colors">All Engineering Services</Link>
          <Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors">Corporate Credentials</Link>
          <Link to="/projects" className="text-on-surface-variant hover:text-primary transition-colors">Case Studies & Projects</Link>
          <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors">24/7 Field Dispatch</Link>
        </div>

        {/* Contact & Hotline */}
        <div className="flex flex-col gap-3 font-label-md text-label-md">
          <span className="text-primary font-bold uppercase tracking-wider text-xs font-mono">// TECHNICAL DISPATCH</span>
          <div className="text-xs text-on-surface-variant">Emergency Field Assistance:</div>
          <a href="tel:+18005550787" className="text-primary-container font-mono text-sm font-bold hover:underline">
            +1 (800) 555-PTS7
          </a>
          <div className="text-xs text-on-surface-variant pt-2">Lab Calibration Inquiries:</div>
          <span className="text-xs font-mono text-on-surface">dispatch@pts-instruments.com</span>
          <span className="text-xs text-on-surface-variant pt-1">Response Guarantee: &lt;2-Hour SLA</span>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="w-full bg-surface-container px-4 sm:px-gutter-lg py-4 border-t border-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
        <div>
          Copyright © 2026 <strong className="text-primary font-semibold">Sahil Yadav</strong>. All rights reserved. • Perfect Tech Solutions (PTS)
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <Link to="/privacy" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-primary transition-colors font-medium">Terms of Service</Link>
          <span>•</span>
          <Link to="/about" className="hover:text-primary transition-colors">Compliance</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-primary transition-colors">Technical Support</Link>
        </div>
      </div>
    </footer>
  );
}
