import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || location.pathname === `${path}.html`)) return true;
    return false;
  };

  const isServicesActive = () => {
    return [
      '/services', '/services.html',
      '/nsv', '/nsv.html',
      '/fwd', '/fwd.html',
      '/mbiu', '/mbiu.html',
      '/software-and-data', '/software-and-data.html',
      '/hardware-solutions', '/hardware-solutions.html'
    ].some(p => location.pathname === p);
  };

  const navLinkClass = (path) =>
    isActive(path)
      ? "px-3 py-1.5 rounded-lg transition-colors bg-sky-50 text-sky-700 font-bold border border-sky-200 shadow-xs"
      : "px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors font-medium";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/90 shadow-xs">
      {/* Top Telemetry / Status Strip */}
      <div className="w-full bg-slate-900 text-slate-300 px-4 sm:px-6 py-1.5 flex items-center justify-between text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-white font-bold">SYS_ID: PTS-CORP-984</span>
          </div>
          <span className="text-slate-600 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <span>CALIBRATION:</span>
            <span className="text-cyan-300 font-semibold">ISO/IEC 17025 ACCREDITED</span>
          </div>
          <span className="text-slate-600 hidden lg:inline">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <span>TELEMETRY:</span>
            <span className="text-emerald-400 font-semibold">DUAL-LINK VALIDATED</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[13px] text-emerald-400">radar</span>
            <span className="text-emerald-400 font-bold">STATUS: READY</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <span className="material-symbols-outlined text-[14px] text-amber-400">e911_emergency</span>
            <span>SUPPORT:</span>
            <a href="tel:+18005550787" className="text-amber-300 hover:text-amber-200 font-bold transition-colors">
              +1 (800) 555-PTS7
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 w-full px-4 sm:px-6 max-w-7xl mx-auto flex items-center justify-between gap-4 bg-white">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group py-1" aria-label="Perfect Tech Solutions Home">
          <img src="/logo.png" alt="PTS Logo" className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1.5 font-label-md text-[13px] uppercase tracking-wider">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/about" className={navLinkClass('/about')}>About PTS</Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1 cursor-pointer ${
                isServicesActive()
                  ? "px-3 py-1.5 rounded-lg transition-colors bg-sky-50 text-sky-700 font-bold border border-sky-200 shadow-xs"
                  : "px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors font-medium"
              }`}
            >
              <span>Services</span>
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Dropdown Menu Container with hover bridge */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px] max-w-[90vw] z-[100] transition-all duration-200 ${
                servicesDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 flex flex-col gap-2 ring-1 ring-slate-900/5">
                {/* Featured Top Card: All Services Overview */}
                <Link
                  to="/services"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 flex items-center justify-between text-slate-900 hover:text-sky-700 transition-colors border border-slate-200/70 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">handyman</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs uppercase tracking-wider">All Services & Engineering SLAs</span>
                      <span className="text-xs text-slate-500 font-normal normal-case">Full portfolio, rapid dispatch tiers & ISO 17025 contracts</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all text-[20px]">
                    arrow_forward
                  </span>
                </Link>

                {/* 2-Column Grid of Fleet Divisions */}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {/* 1. NSV */}
                  <Link
                    to="/nsv"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-sky-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">directions_car</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Network Survey (NSV)</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">Laser profilometers & ROMDAS sync</span>
                    </div>
                  </Link>

                  {/* 2. FWD */}
                  <Link
                    to="/fwd"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-sky-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">vertical_align_bottom</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Deflectometer (FWD/HWD)</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">AASHTO R32 geophone calibrations</span>
                    </div>
                  </Link>

                  {/* 3. MBIU */}
                  <Link
                    to="/mbiu"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-amber-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">construction</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Bridge Inspection (MBIU)</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">Proportional valves & interlocks</span>
                    </div>
                  </Link>

                  {/* 4. Software & Data */}
                  <Link
                    to="/software-and-data"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-cyan-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">analytics</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Software & Data</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">IRI filtering & moduli calculations</span>
                    </div>
                  </Link>

                  {/* 5. Hardware Solutions & PCB */}
                  <Link
                    to="/hardware-solutions"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-sky-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">cable</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Hardware & PCB Lab</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">MIL-spec cabling & micro-soldering</span>
                    </div>
                  </Link>

                  {/* 6. Projects & Case Studies */}
                  <Link
                    to="/projects"
                    className="p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 text-slate-700 hover:text-amber-700 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">folder_special</span>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs uppercase tracking-wide truncate">Projects & Case Studies</span>
                      <span className="text-[11px] text-slate-500 font-normal normal-case">Highway, airport & bridge overhauls</span>
                    </div>
                  </Link>
                </div>

                {/* Bottom Quick Hotline Strip */}
                <div className="mt-1 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono px-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>24/7 Field Dispatch Ready</span>
                  </span>
                  <a href="tel:+18005550787" className="text-sky-600 hover:text-sky-700 font-bold hover:underline">
                    +1 (800) 555-PTS7
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link to="/projects" className={navLinkClass('/projects')}>Projects</Link>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Search Palette Trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 text-xs font-mono transition-colors"
            title="Search Fleet Specs (Ctrl+K)"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden lg:inline">Search Specs</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-700 font-bold border border-slate-300 shadow-2xs">
              Ctrl+K
            </kbd>
          </button>

          {/* Request Support Primary CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-sky-700 transition-all shadow-sm hover:shadow-md hover:scale-[1.01]"
          >
            <span className="material-symbols-outlined text-[18px]">build_circle</span>
            <span className="hidden sm:inline">Request Support</span>
            <span className="sm:hidden">Support</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[96px] bg-white border-b border-slate-200 shadow-2xl p-4 flex flex-col gap-3 font-label-md text-sm max-h-[85vh] overflow-y-auto z-[100]">
          <Link to="/" className="p-3 rounded-xl bg-slate-50 text-slate-900 flex items-center gap-3 hover:bg-slate-100 font-medium">
            <span className="material-symbols-outlined text-[20px] text-sky-600">home</span>
            <span>Home</span>
          </Link>
          <Link to="/about" className="p-3 rounded-xl bg-slate-50 text-slate-900 flex items-center gap-3 hover:bg-slate-100 font-medium">
            <span className="material-symbols-outlined text-[20px] text-sky-600">info</span>
            <span>About PTS</span>
          </Link>

          {/* Grouped Services in Mobile Drawer */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="font-mono text-xs text-sky-700 font-bold uppercase flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">handyman</span>
                <span>Services & Fleets</span>
              </div>
              <Link to="/services" className="text-sky-600 hover:underline text-[11px] font-bold">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 pt-1 font-mono text-xs">
              <Link to="/nsv" className="p-2 rounded-lg hover:bg-white text-slate-700 hover:text-sky-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-sky-600">directions_car</span>
                <span>Network Survey Vehicles (NSV)</span>
              </Link>
              <Link to="/fwd" className="p-2 rounded-lg hover:bg-white text-slate-700 hover:text-sky-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-sky-600">vertical_align_bottom</span>
                <span>Falling Weight Deflectometer (FWD)</span>
              </Link>
              <Link to="/mbiu" className="p-2 rounded-lg hover:bg-white text-slate-700 hover:text-amber-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-amber-500">construction</span>
                <span>Mobile Bridge Inspection (MBIU)</span>
              </Link>
              <Link to="/software-and-data" className="p-2 rounded-lg hover:bg-white text-slate-700 hover:text-cyan-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-cyan-600">analytics</span>
                <span>Software & Data Processing</span>
              </Link>
              <Link to="/hardware-solutions" className="p-2 rounded-lg hover:bg-white text-slate-700 hover:text-sky-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-sky-600">cable</span>
                <span>Hardware Solutions & PCB Lab</span>
              </Link>
            </div>
          </div>

          <Link to="/projects" className="p-3 rounded-xl bg-slate-50 text-slate-900 flex items-center gap-3 hover:bg-slate-100 font-medium">
            <span className="material-symbols-outlined text-[20px] text-amber-600">folder_special</span>
            <span>Projects & Case Studies</span>
          </Link>
          <Link to="/contact" className="p-3 rounded-xl bg-slate-50 text-slate-900 flex items-center gap-3 hover:bg-slate-100 font-medium">
            <span className="material-symbols-outlined text-[20px] text-sky-600">contact_support</span>
            <span>Contact & Dispatch Portal</span>
          </Link>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a href="tel:+18005550787" className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-xs">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>24/7 Field Support Hotline</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
