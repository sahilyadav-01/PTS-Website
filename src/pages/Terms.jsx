import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <main className="w-full pt-32 pb-20 flex-1 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
        <Link to="/" className="hover:text-primary">HOME</Link>
        <span>/</span>
        <span className="text-primary font-bold">TERMS OF SERVICE</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-secondary font-mono text-xs border border-secondary/30">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span>ENGINEERING CONTRACTS & SERVICE LEVEL AGREEMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm font-mono text-on-surface-variant">
          Effective Date: January 1, 2026 • Copyright © 2026 Sahil Yadav • Author: Sahil Yadav
        </p>
      </div>

      {/* Content Sections */}
      <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col gap-8 text-on-surface-variant leading-relaxed text-sm">
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 1. ACCEPTANCE OF TERMS</h2>
          <p>
            By accessing the Perfect Tech Solutions (PTS) web application, utilizing our interactive calculation utilities (Deflection Basin Simulator, Harness Configurator), or engaging our field service engineering personnel, you agree to be bound by these Terms of Service. This platform is authored, engineered, and maintained by <strong>Sahil Yadav</strong>.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 2. SCOPE OF SERVICES & CALIBRATION STANDARDS</h2>
          <p>
            PTS delivers technical engineering, diagnostics, sensor calibration, and data processing across civil inspection equipment. All calibration operations are conducted in accordance with strict metrology standards:
          </p>
          <ul className="list-disc pl-5 space-y-1 pt-1">
            <li><strong>AASHTO R32 / ASTM D4694:</strong> Falling Weight Deflectometer impulse load cell and geophone array linearity.</li>
            <li><strong>ASTM E950 Class 1 & ASTM E1926:</strong> Inertial profilometer elevation accuracy and quarter-car IRI calculations.</li>
            <li><strong>IPC-A-610 Class 3 & IPC-7711/7721:</strong> High-reliability aerospace-grade PCB micro-soldering and harness assemblies.</li>
            <li><strong>SIL-3 Compliance:</strong> Mobile bridge inspection proportional valve safety interlocks.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 3. FIELD DISPATCH SLAS & DEPLOYMENT</h2>
          <p>
            Support tickets initiated via our online dispatch desk are prioritized according to severity. Priority 1 (Equipment Stalled in Field) mobilizes rapid-response engineering teams within 24 to 48 hours in designated service regions. PTS provides loaner geophones, DAQ boards, and replacement cabling to maintain zero-downtime client survey operations.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 4. INTELLECTUAL PROPERTY & REVERSE ENGINEERING</h2>
          <p>
            All website software, interactive calculation engines, harness part number taxonomies, and technical documentation are the proprietary intellectual property of <strong>Sahil Yadav</strong> (Copyright © 2026 Sahil Yadav. All rights reserved). Clients retain sole ownership of their raw survey telemetry data and generated pavement condition indices.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 5. WARRANTY & REPAIR GUARANTEES</h2>
          <p>
            Custom sensor harnesses and component-level PCB repairs executed in our laboratory carry a <strong>90-Day Comprehensive Warranty</strong> against material defects, cold solder fractures, and connector pin oxidation, verified through full thermal soak and TDR impedance testing prior to release.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-primary font-mono">// 6. GOVERNING LAW & JURISDICTION</h2>
          <p>
            These Terms are governed by and construed in accordance with applicable civil engineering commercial law. For contractual inquiries, service agreements, or master service agreements (MSAs), reach out to our administration desk.
          </p>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant font-mono text-xs flex flex-col gap-1 mt-2">
            <div><strong className="text-primary">Author & Copyright Holder:</strong> Sahil Yadav</div>
            <div><strong className="text-primary">Corporate Entity:</strong> Perfect Tech Solutions (PTS)</div>
            <div><strong className="text-primary">Legal & Contracts:</strong> legal@pts-instruments.com</div>
            <div><strong className="text-primary">Dispatch Hotline:</strong> +1 (800) 555-PTS7</div>
          </div>
        </section>
      </div>
    </main>
  );
}
