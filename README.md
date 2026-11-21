# Perfect Tech Solutions (PTS) — Enterprise Web Platform

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![ISO/IEC 17025](https://img.shields.io/badge/Calibration-ISO%2FIEC_17025-green.svg)](#standards--certifications)
[![IPC-A-610](https://img.shields.io/badge/PCB_Lab-IPC--A--610_Class_3-orange.svg)](#standards--certifications)

Modern, high-performance web platform for **Perfect Tech Solutions (PTS)** — specialized technical engineering partner for heavy civil diagnostic, telemetry instrumentation, and pavement survey systems.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/sahilyadav-01/PTS-Website.git
cd PTS-Website

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser. Instant Hot Module Replacement (HMR) is active.

### Production Build
```bash
# Generate optimized static bundle in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌟 Core Fleet Divisions & Capabilities

| System / Division | Primary Standards | Core Technical Scope |
| :--- | :--- | :--- |
| **Network Survey Vehicles (NSV)** | AASHTO M328 / ASTM E950 Class 1 | Multi-sensor integration, 100Hz laser profilometers, 3D crack mapping, ROMDAS sync, DGPS & tactical IMU positioning. |
| **Falling Weight Deflectometer (FWD/HWD)** | AASHTO R32 / ASTM D4694 | Dynamic impulse load cell calibration (30–250 kN), 7–9 geophone array alignment, hydraulic catch servicing, layer moduli inversion. |
| **Mobile Bridge Inspection Units (MBIU)** | SIL-3 Safety Integrity Level | Proportional electro-hydraulic spool valves (Danfoss/Rexroth), 2.4GHz frequency-hopping remote telemetry, dual-redundant safety interlocks. |
| **Software & Survey Data Processing** | ASTM E1926 / BELLS3 | Quarter-car International Roughness Index (IRI) calculation, transverse rut depth geometry, ELMOD / BAKFAA back-calculation, GIS shapefile export. |
| **Hardware Solutions & PCB Lab** | IPC-7711/7721 & IPC-A-610 Class 3 | Custom MIL-DTL-38999 & Lemo sensor cabling, component-level SMD micro-soldering (down to 01005 passives & BGA), TDR cable fault analysis. |

---

## 🛠️ Interactive Field Engineering Utilities

The platform incorporates specialized browser-based calculation and simulation utilities:

1. **Live Telemetry & UTC Clock:**
   - Real-time UTC clock and network latency jitter simulation embedded in the header bar and telemetry breadcrumb.
2. **Deflection Basin & Moduli Simulator:**
   - Dynamic SVG curve modeling AASHTO dynamic impulse deflection across geophone radial offsets (0mm to 1200mm).
   - Real-time recalculation of estimated subgrade elastic modulus ($E_{sub}$) from interactive load (30–120 kN) and asphalt temperature (10–50°C) sliders.
3. **MIL-Spec Harness Configurator:**
   - Interactive specification builder for sensor harnesses (connector series, pin count, environmental jacketing).
   - Instant part-number SKU generation with one-click clipboard copy.
4. **Command Palette (`Ctrl+K`):**
   - Global search dialog providing instant keyboard-driven navigation across fleet divisions, tools, standards, and contact portals.
5. **24/7 Field Support Dispatch Console:**
   - Tier-3 diagnostic dispatch form with priority triage, SLA response confirmation, and printable ticket generation.

---

## 📁 Project Architecture

```
PTS-Website/
├── public/                       # Static public assets
│   ├── favicon.ico               # Multi-resolution browser icon
│   ├── logo.png                  # Primary PTS transparent branding
│   ├── logo-white.png            # White-backed PTS branding
│   ├── logo-icon.png             # Square badge icon
│   ├── nsv-vehicle.jpg           # Network Survey Vehicle fleet photo
│   ├── fwd-trailer.jpg           # FWD deflectometer trailer photo
│   ├── mbiu-unit.jpg             # MBIU bridge access unit photo
│   ├── pcb-lab.jpg               # IPC-certified PCB laboratory photo
│   ├── software-dashboard.jpg    # Civil survey software & telemetry dashboard
│   ├── highway-inspection.jpg    # Highway inspection fleet deployment
│   ├── airport-runway.jpg        # Airport runway HWD testing
│   ├── suspension-bridge.jpg     # Suspension bridge MBIU triage
│   └── lab-facility.jpg          # ISO/IEC 17025 metrology & calibration facility
├── src/
│   ├── components/               # Global shared UI components
│   │   ├── Navbar.jsx            # Sticky navigation, status strip, services dropdown, mobile drawer
│   │   ├── Footer.jsx            # Telemetry coordinates, SLA directory, compliance badges
│   │   ├── CommandPalette.jsx    # Global Ctrl+K specification search modal
│   │   ├── SpecModal.jsx         # Technical specifications viewer dialog
│   │   └── TicketModal.jsx       # Dispatch confirmation dialog
│   ├── pages/                    # Routed application views
│   │   ├── Home.jsx              # Hero HUD, 6-stage protocol, deflection simulator, harness tool, FAQ
│   │   ├── About.jsx             # ISO/IEC 17025 accreditation, lab history, credentials
│   │   ├── Services.jsx          # 5 specialized fleet divisions, technical SLAs
│   │   ├── NSV.jsx               # Network Survey Vehicles engineering page
│   │   ├── FWD.jsx               # Falling Weight Deflectometer technical page
│   │   ├── MBIU.jsx              # Mobile Bridge Inspection Units engineering page
│   │   ├── SoftwareAndData.jsx   # Civil survey data processing workflows page
│   │   ├── HardwareSolutions.jsx # Cabling & PCB micro-soldering laboratory page
│   │   ├── Projects.jsx          # Real-world infrastructure case studies
│   │   └── Contact.jsx           # 24/7 technical dispatch portal & ticket submission
│   ├── App.jsx                   # React Router v6 setup (supports clean and .html URLs)
│   ├── index.css                 # Tailwind directives, Material Symbols & custom scrollbars
│   └── main.jsx                  # React DOM mount point
├── legacy-html/                  # Preserved archive of original HTML files
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite build & dev server config
└── tailwind.config.js            # PTS design tokens, fonts, and custom color palette
```

---

## 🎨 Design System & Color Palette

The user interface uses a clean, industrial instrumentation aesthetic:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `surface` | `#ffffff` | Primary background surface |
| `primary` | `#0f172a` | Deep slate for dominant headings and typography |
| `primary-container` | `#0284c7` | Sky blue technical accent and primary action buttons |
| `secondary` | `#0284c7` | Deflection metrics and instrumentation highlights |
| `tertiary` | `#d97706` | Emergency dispatch alerts and critical service notices |
| `surface-container-high` | `#e2e8f0` | Card borders, dividers, and inactive badges |
| `fontFamily.headline` | Inter | UI prose, headings, and navigation labels |
| `fontFamily.label` | JetBrains Mono | Monospace telemetry metrics, part numbers, and coordinates |

---

## 📜 Standards & Certifications

- **ISO/IEC 17025:2017:** General requirements for the competence of testing and calibration laboratories.
- **AASHTO R32:** Calibrating reference and relative geophone arrays for Falling Weight Deflectometers.
- **ASTM D4694:** Standard Test Method for Deflections with a Falling-Weight-Type Impulse Load Device.
- **ASTM E950:** Standard Test Method for Measuring the Longitudinal Profile of Traveled Surfaces with an Accelerometer Established Inertial Profiling Reference.
- **ASTM E1926:** Standard Practice for Computing International Roughness Index (IRI) of Roads.
- **IPC-A-610 Class 3 / IPC-7711/7721:** High-reliability aerospace and critical civil infrastructure electronics rework.

---

## 🔒 Legal, Privacy & Terms

- **Privacy Policy:** Comprehensive telemetry and client data governance available at [`/privacy`](file:///c:/Users/BABA%20TILLU/Desktop/PTS%20Website/src/pages/Privacy.jsx).
- **Terms of Service:** Engineering SLAs, calibration liability, and repair warranty terms available at [`/terms`](file:///c:/Users/BABA%20TILLU/Desktop/PTS%20Website/src/pages/Terms.jsx).

---

## 👤 Author & Copyright

- **Author:** Sahil Yadav
- **Copyright:** Copyright © 2026 Sahil Yadav. All rights reserved.
- **Organization:** Perfect Tech Solutions (PTS)

---

## 🚢 Deployment

The project builds standard static assets in `/dist` and can be deployed directly to any static host:

### GitHub Pages / Netlify / Vercel
```bash
npm run build
# Deploy the contents of the /dist directory
```

---

Copyright © 2026 **Sahil Yadav**. All rights reserved. • Perfect Tech Solutions (PTS)
