import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://live.staticflickr.com/65535/54930407033_4607074ced_b.jpg",
    alt: "Astronauta Marcos Pontes em trajes oficiais da Missão Centenário"
  },
  {
    url: "https://live.staticflickr.com/65535/54930202891_e864a43e0e_b.jpg",
    alt: "Equipe em treinamento na Cidade das Estrelas"
  },
  {
    url: "https://live.staticflickr.com/65535/54930413443_ff3ee02df6_b.jpg",
    alt: "Preparativos finais antes do lançamento da Soyuz TMA-8"
  },
  {
    url: "https://live.staticflickr.com/65535/54930416968_987582d8c6_b.jpg",
    alt: "Detalhes dos experimentos científicos realizados no espaço"
  },
  {
    url: "https://live.staticflickr.com/65535/54929342942_f1e4848745_b.jpg",
    alt: "Marcos Pontes com a bandeira do Brasil na Estação Espacial Internacional"
  },
  {
    url: "https://live.staticflickr.com/65535/54929343952_0cb429680f_b.jpg",
    alt: "Comemoração histórica dos 20 anos da Missão"
  },
  {
    url: "https://live.staticflickr.com/65535/54929346332_dfb867edd0_b.jpg",
    alt: "Trajes e equipamentos da exploração espacial"
  },
  {
    url: "https://live.staticflickr.com/65535/54930526220_d817f20f36_b.jpg",
    alt: "Marcos Pontes assinando documentos pré-voo"
  },
  {
    url: "https://live.staticflickr.com/65535/54930527890_2c5228ab27_b.jpg",
    alt: "Lançamento do foguete Soyuz na base de Baikonur"
  },
  {
    url: "https://live.staticflickr.com/65535/54930451329_3fca54748d_b.jpg",
    alt: "Momentos marcantes da Missão Centenário"
  },
  {
    url: "https://live.staticflickr.com/65535/54930457854_9fdeb954e2_b.jpg",
    alt: "Registro da gravidade zero a bordo da ISS"
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-purple-500/20 blur-3xl z-0"></div>
      
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
