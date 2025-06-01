import React from 'react';
import { Lock, Clock, Crown, Star } from 'lucide-react';

const creators = [
  { name: "Jade", image: "/Jade copy.png" },
  { name: "Anitta", image: "/Anitta copy.png" },
  { name: "Mari Avilla", image: "/Avila copy.png" },
  { name: "Juliana Bonde", image: "/Bonde copy.png" },
  { name: "Cela", image: "/Cela copy.png" },
  { name: "Fernanda Campos", image: "/Fernanda campos copy.png" },
  { name: "Ketlin Groismann", image: "/Ketlin Groismann copy.png" },
  { name: "Mc mirella", image: "/Mc mirella copy.png" },
  { name: "Mc pipokinha", image: "/Pipokinha copy.png" },
  { name: "Ruy barbosa", image: "/Ruy barbosa copy copy.png" },
  { name: "Sarah Estanislau", image: "/Sarah.png" },
  { name: "Virginia", image: "/Virginia.png" }
];

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-[rgb(37,36,36)]">
      {/* Scarcity Banner */}
      <div className="fixed top-0 left-0 right-0 bg-[rgb(0,172,255)] text-white py-3 text-center font-bold z-50">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-2 text-sm md:text-base">
          <div className="flex items-center gap-1 md:gap-2">
            <Lock className="w-4 h-4" />
            <span>100% PRIVACIDADE</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>RESTAM 20 ACESSOS</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Star className="w-4 h-4" />
            <span>PAGUE UMA VEZ ASSISTA PRA SEMPRE</span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mb-8 mt-16">
        <img src="/logo.png" alt="OnlyHub" className="h-20 md:h-24 lg:h-28" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A melhor plataforma de
            <span className="block mt-2 bg-[rgb(0,172,255)] text-white px-4 py-2 rounded-lg inline-block">
              entretenimento exclusivo
            </span>
          </h1>
        </div>

        {/* Video Container with Glassmorphism */}
        <div className="relative">
          <div className="absolute inset-0 backdrop-blur-xl bg-black/5"></div>
          <div className="relative aspect-[9/16] max-w-sm mx-auto overflow-hidden">
            <div className="relative w-full h-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src="https://player.vimeo.com/video/1089534269?h=156c5e3749&autoplay=1&autopause=0&controls=1&playsinline=1&background=0&transparent=0&dnt=1&quality=auto&pip=0&title=0&byline=0&portrait=0&speed=0&background=0&muted=0&volume=0.75"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Famous Creators Section */}
      <div className="w-full max-w-6xl mt-16 mb-8 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            <Crown className="w-8 h-8 text-[rgb(0,172,255)]" />
            As mais famosas estão na nossa plataforma
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="relative group">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-full aspect-[4/5] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold truncate">
                  {creator.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl mb-6">
            de <span className="line-through text-gray-500">R$ 119,90</span> por apenas{' '}
            <span className="text-[rgb(0,172,255)] font-bold text-3xl md:text-4xl">R$ 49,90</span>
            <span className="block mt-2 text-lg text-gray-700">Acesso vitalício - Sem assinaturas</span>
          </p>
          
          <a 
            href="https://go.disruptybr.shop/v4ipxfesvi"
            className="bg-[rgb(0,172,255)] hover:bg-[rgb(0,152,225)] text-white transition-colors px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 mx-auto inline-flex"
          >
            <Lock className="w-5 h-5" />
            GARANTIR MEU ACESSO
          </a>
        </div>
      </div>
      
      {/* Security Footer */}
      <footer className="w-full bg-gray-50 mt-16 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Lock className="w-8 h-8 text-[rgb(0,172,255)] mb-3" />
              <h3 className="font-bold mb-2">Pagamento Seguro</h3>
              <p className="text-sm text-gray-600">Todas as transações são criptografadas e processadas com segurança</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-[rgb(0,172,255)] mb-3" />
              <h3 className="font-bold mb-2">Garantia de Privacidade</h3>
              <p className="text-sm text-gray-600">Seus dados são protegidos e nunca compartilhados com terceiros</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-[rgb(0,172,255)] mb-3" />
              <h3 className="font-bold mb-2">Acesso Imediato</h3>
              <p className="text-sm text-gray-600">Liberação instantânea após confirmação do pagamento</p>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2024 OnlyHub - Todos os direitos reservados</p>
            <p className="mt-2">🔒 Site protegido e verificado</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;