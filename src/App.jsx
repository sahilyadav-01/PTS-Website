import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import SpecModal from './components/SpecModal';
import TicketModal from './components/TicketModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NSV from './pages/NSV';
import FWD from './pages/FWD';
import MBIU from './pages/MBIU';
import SoftwareAndData from './pages/SoftwareAndData';
import HardwareSolutions from './pages/HardwareSolutions';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSpecKey, setActiveSpecKey] = useState(null);
  const [activeTicket, setActiveTicket] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Global Navigation Header */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Page Routing */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenSpec={setActiveSpecKey} onTicketCreated={setActiveTicket} />} />
          <Route path="/index.html" element={<Home onOpenSpec={setActiveSpecKey} onTicketCreated={setActiveTicket} />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services.html" element={<Services />} />

          <Route path="/nsv" element={<NSV />} />
          <Route path="/nsv.html" element={<NSV />} />

          <Route path="/fwd" element={<FWD />} />
          <Route path="/fwd.html" element={<FWD />} />

          <Route path="/mbiu" element={<MBIU />} />
          <Route path="/mbiu.html" element={<MBIU />} />

          <Route path="/software-and-data" element={<SoftwareAndData />} />
          <Route path="/software-and-data.html" element={<SoftwareAndData />} />

          <Route path="/hardware-solutions" element={<HardwareSolutions />} />
          <Route path="/hardware-solutions.html" element={<HardwareSolutions />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects.html" element={<Projects />} />

          <Route path="/contact" element={<Contact onTicketCreated={setActiveTicket} />} />
          <Route path="/contact.html" element={<Contact onTicketCreated={setActiveTicket} />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy.html" element={<Privacy />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/terms.html" element={<Terms />} />

          {/* Catch-all */}
          <Route path="*" element={<Home onOpenSpec={setActiveSpecKey} onTicketCreated={setActiveTicket} />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SpecModal specKey={activeSpecKey} onClose={() => setActiveSpecKey(null)} />
      <TicketModal ticketData={activeTicket} onClose={() => setActiveTicket(null)} />
    </div>
  );
}
