import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1f] border-t border-white/10 py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-[#00d2ff]" />
              <span className="font-display font-bold text-xl text-white">
                Universo Espacial: A Terra é azul
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Uma exposição imersiva e inédita celebrando os 20 anos da primeira missão espacial brasileira e os 32 anos da Agência Espacial Brasileira (AEB).
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Realização</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Instituto Hardware BR</li>
              <li>Agência Espacial Brasileira (AEB)</li>
              <li>Ministério da Ciência, Tecnologia e Inovação</li>
              <li>Governo Federal</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Apoio</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Brasília Shopping</li>
              <li>Secretaria de Educação do GDF</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 Exposição Missão Centenário. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">24 de março a 12 de abril de 2026 • Brasília Shopping</p>
        </div>
      </div>
    </footer>
  );
}
