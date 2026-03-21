import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Rocket, Star, Users, Microscope, Info } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050510] text-slate-200 overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Space Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00d2ff] text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>24 de março a 12 de abril de 2026</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Missão Centenário <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-blue-600">
                20 Anos
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
              A capital federal se transforma no epicentro da história espacial brasileira. Uma mostra imersiva que celebra as duas décadas do feito histórico que levou o primeiro brasileiro ao espaço.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/inscricao"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00d2ff] to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Agendar Visita Escolar
              </Link>
              <a 
                href="#detalhes"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Info className="w-5 h-5" />
                Saiba Mais
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section id="detalhes" className="py-20 relative z-20 bg-[#0a0a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121233]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl -mt-32 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-8 flex items-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-[#00d2ff]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Data</h3>
                  <p className="font-display text-lg font-bold text-white">24 de Março a<br/>12 de Abril de 2026</p>
                </div>
              </div>

              <div className="p-8 flex items-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Local</h3>
                  <p className="font-display text-lg font-bold text-white">Brasília Shopping<br/><span className="text-sm font-normal text-slate-400">Brasília, DF</span></p>
                </div>
              </div>

              <div className="p-8 flex items-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Horário</h3>
                  <p className="font-display text-lg font-bold text-white">Todos os dias<br/><span className="text-sm font-normal text-slate-400">10:00 às 20:00</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Atrações e Experiência Imersiva
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                A exposição mergulha na trajetória do astronauta Marcos Pontes, que decolou em 29 de março de 2006 rumo à Estação Espacial Internacional (ISS) a bordo da nave russa Soyuz TMA-8. O nome "Missão Centenário" foi uma homenagem direta ao centenário do voo do 14-Bis de Santos Dumont, unindo o passado pioneiro da aviação ao futuro das explorações espaciais.
              </p>
              
              <ul className="space-y-6 mt-10">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Rocket className="w-6 h-6 text-[#00d2ff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Acervo Raro e Bastidores</h4>
                    <p className="text-slate-400">Veja de perto as roupas oficiais usadas pelo astronauta Marcos Pontes em sua missão, além de um histórico traje espacial de missões lunares. Assista a vídeos detalhados desde o treinamento na Cidade das Estrelas até o acoplamento na ISS.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6 text-center lg:text-left">Imagens de referência</h3>
              <ImageCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-[#0a0a1f] relative z-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Educação e Futuro
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Com o intuito de inspirar novas gerações, a AEB Escola, braço educacional da Agência Espacial Brasileira, coordenará uma série de oficinas práticas durante o evento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121233] p-8 rounded-3xl border border-white/5 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Oficinas Práticas</h3>
              <p className="text-slate-400">Alunos e crianças poderão participar de atividades de pintura, dobradura e oficinas tecnológicas voltadas para o setor aeroespacial.</p>
            </div>
            <div className="bg-[#121233] p-8 rounded-3xl border border-white/5 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Retrospectiva PNAE</h3>
              <p className="text-slate-400">O evento é um convite para entender o impacto da ciência no cotidiano e revisitar os principais marcos históricos do Programa Nacional de Atividades Espaciais (PNAE).</p>
            </div>
            <div className="bg-[#121233] p-8 rounded-3xl border border-white/5 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Jornada Espacial</h3>
              <p className="text-slate-400">"É uma excelente oportunidade para o público geral conhecer mais sobre a jornada espacial brasileira e a dedicação por trás de cada conquista no cosmos."</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Link 
              to="/inscricao"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0a0a1f] font-bold text-lg hover:bg-slate-200 transition-all"
            >
              <Users className="w-5 h-5" />
              Inscrever Minha Escola
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Realization & Supporters Section */}
      <section className="py-20 relative z-20 bg-[#050510] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Apoiadores e Realizadores
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Instituições e empresas que tornam esta jornada espacial possível.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Realizadores */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center mb-8">Realização</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* Logos for Realization */}
                <div className="w-56 h-28 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden p-3">
                  <img src="/logo1.png" alt="Realização 1" className="w-full h-full object-contain" />
                </div>
                <div className="w-56 h-28 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden p-3">
                  <img src="/logo2.png" alt="Realização 2" className="w-full h-full object-contain" />
                </div>
                <div className="w-56 h-28 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden p-3">
                  <img src="/logo3.png" alt="Realização 3" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Apoiadores */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center mb-8">Apoio Institucional</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                {/* Logos for Supporters */}
                <div className="w-48 h-24 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden p-3">
                  <img src="/apoio1.png" alt="Apoio 1" className="w-full h-full object-contain" />
                </div>
                <div className="w-48 h-24 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden p-3">
                  <img src="/apoio2.png" alt="Apoio 2" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
