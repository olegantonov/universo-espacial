import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://drive.google.com/uc?id=1ggtWAooPFUJsBSrLWiZjX0ARRB5_21pH",
    alt: "Oficinas práticas da AEB Escola - Estudantes aprendendo"
  },
  {
    url: "https://drive.google.com/uc?id=1M4LyZeVZh-VbPrh_tRni9HFlb2dkozsG",
    alt: "Atividades de montagem e robótica aeroespacial"
  },
  {
    url: "https://drive.google.com/uc?id=18h_21Y9cCMBkNk6wNenuai8LOgrgOH9Z",
    alt: "Engajamento dos jovens nas atividades educativas"
  },
  {
    url: "https://drive.google.com/uc?id=1LFJkpc0Fji8o0KwpgMuTBrVRLeixEBR1",
    alt: "Projetos de exploração espacial criados pelos alunos"
  },
  {
    url: "https://drive.google.com/uc?id=1y2F0j6DEdXs1or1Z3EMxZ3GPgd0kWkln",
    alt: "Palestras e apresentações interativas da AEB"
  },
  {
    url: "https://drive.google.com/uc?id=1hux-TIJhFZNfj_tzXY1vYmTFq6KsxRvG",
    alt: "Maquetes e demonstrações tecnológicas"
  },
  {
    url: "https://drive.google.com/uc?id=1dSf3PIj-YBYBlBg_MrsxoyTA86scUm_t",
    alt: "Oficina de foguetes de garrafa PET"
  },
  {
    url: "https://drive.google.com/uc?id=1bFItnBZuNERdkM41s7vpWeMASLYgPkTX",
    alt: "Jovens se inspirando no Programa Espacial Brasileiro"
  },
  {
    url: "https://drive.google.com/uc?id=1zu4QztpzWe7cn5Th0dqIlOHk4QCBRPF0",
    alt: "Momento de descoberta na mostra"
  },
  {
    url: "https://drive.google.com/uc?id=1sxndn3eUVy9dJxlEKGZrbd9lHi2pMh41",
    alt: "O futuro da exploração espacial"
  }
];

export default function AebCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-emerald-500/20 blur-3xl z-0"></div>
      
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover z-10"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
      
      <div className="absolute bottom-6 left-6 right-6 z-30 flex items-end justify-between">
        <p className="text-white font-medium text-lg drop-shadow-md bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm">
          {images[currentIndex].alt}
        </p>
        
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/20"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/20"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
