/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Registration from './pages/Registration';

export default function App() {
  return (
    <Router basename="/universo-espacial">
      <div className="min-h-screen flex flex-col relative">
        <div className="absolute inset-0 stars-bg pointer-events-none opacity-50"></div>
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/inscricao" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
