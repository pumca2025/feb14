
import React, { useEffect, useState } from 'react';

const Celebration: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-red-500 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center p-8 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl transform scale-110">
        <h1 className="font-pacifico text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
          YES!!! 🎉💍
        </h1>
        <p className="text-2xl md:text-3xl text-white font-light mb-8">
          Congratulations! I Love You ❤️
        </p>
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white mb-8">
          <img 
            src="https://picsum.photos/seed/love/400/400" 
            alt="Romantic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-500/10 hover:bg-transparent transition-colors">
            <span className="text-6xl animate-bounce">💖</span>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-white text-pink-600 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg"
        >
          Relive the Moment ✨
        </button>
      </div>

      {/* Manual simple confetti */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            opacity: 0.6
          }}
        >
          {['❤️', '✨', '💍', '🌸', '💝'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

export default Celebration;
