import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
              <Rocket className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Universo Espacial: <span className="text-[#00d2ff]">A Terra é azul</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-[#00d2ff] ${
                location.pathname === '/' ? 'text-[#00d2ff]' : 'text-slate-300'
              }`}
            >
              A Exposição
            </Link>
            <Link
              to="/inscricao"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00d2ff] to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
            >
              Agendar Visita Escolar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
