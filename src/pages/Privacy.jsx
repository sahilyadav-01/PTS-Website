import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">PRIVACY POLICY</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-primary font-mono text-xs border border-primary-container/30">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span>DATA PROTECTION & TELEMETRY GOVERNANCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono text-on-surface-variant">
          Effective Date: January 1, 2026 • Last Updated: 2026 • Author: Sahil Yadav
        </p>
      </div>

      {/* Content Sections */}
      <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col gap-8 text-on-surface-variant leading-relaxed text-sm">
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 1. INTRODUCTION & SCOPE</h2>
          <p>
            This Privacy Policy describes how Perfect Tech Solutions (PTS), authored and maintained by <strong>Sahil Yadav</strong>, collects, processes, protects, and governs personal, technical, and operational information gathered through our web platform, diagnostic portals, and client field service interactions.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 2. INFORMATION WE COLLECT</h2>
          <p>We collect and handle information in two primary categories:</p>
          <ul className="list-disc pl-5 space-y-1 pt-1">
            <li>
              <strong>Direct Inquiries & Support Tickets:</strong> Name, professional title, agency or contractor organization, email address, phone number, and details regarding stalled or scheduled survey equipment.
            </li>
            <li>
              <strong>Engineering Telemetry & Diagnostic Data:</strong> Raw survey binary files (ROMDAS, Hawkeye, ELMOD, BAKFAA), laser profilometer elevation streams, deflection basin data, and linear referencing parameters submitted for QA/QC calibration.
            </li>
            <li>
              <strong>System Log & Device Data:</strong> IP addresses, browser runtime metrics, and performance telemetry to guarantee uptime of our 24/7 dispatch portals.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 3. PURPOSE OF DATA PROCESSING</h2>
          <p>We process collected data exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1 pt-1">
            <li>Triage and dispatch certified Tier-3 field diagnostic engineers to highway, bridge, and airport survey sites.</li>
            <li>Execute laboratory calibrations complying with ISO/IEC 17025, AASHTO R32, and ASTM D4694.</li>
            <li>Compute quarter-car IRI, rutting depth profiles, and back-calculated layer moduli.</li>
            <li>Maintain historical audit trails required by state Departments of Transportation (DOTs) and federal agencies.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 4. DATA SECURITY & CONFIDENTIALITY</h2>
          <p>
            All telemetry files and customer communications are encrypted in transit via TLS 1.3 and at rest using AES-256 standards. Survey datasets, proprietary pavement distress models, and linear referencing coordinates are strictly isolated and never sold, rented, or shared with third-party advertisers.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 5. COOKIES & TRACKING</h2>
          <p>
            Our web platform uses only essential functional session storage and lightweight telemetry tokens to preserve user preferences (e.g., active calculation parameters, simulator state, and modal dialogues). We do not employ third-party behavioral ad trackers.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 6. CONTACT & DATA GOVERNANCE</h2>
          <p>
            For privacy inquiries, audit trail verification, or data deletion requests, contact our Lead Engineering & Technology Authority:
          </p>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant font-mono text-xs flex flex-col gap-1 mt-2">
            <div><strong className="text-primary">Author & Technology Lead:</strong> Sahil Yadav</div>
            <div><strong className="text-primary">Organization:</strong> Perfect Tech Solutions (PTS)</div>
            <div><strong className="text-primary">Email:</strong> privacy@pts-instruments.com / dispatch@pts-instruments.com</div>
            <div><strong className="text-primary">Hotline:</strong> +1 (800) 555-PTS7</div>
          </div>
        </section>
      </div>
    </main>
  );
}
