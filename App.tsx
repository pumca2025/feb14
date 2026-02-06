
import React, { useState } from 'react';
import HeartBackground from './components/HeartBackground';
import FloatingNoButton from './components/FloatingNoButton';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [teaseCount, setTeaseCount] = useState(0);

  const handleYes = () => {
    setIsAccepted(true);
  };

  const handleNoTease = () => {
    setTeaseCount(prev => prev + 1);
  };

  if (isAccepted) {
    return <Celebration />;
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-pink-200 via-red-100 to-pink-200 p-4">
      <HeartBackground />

      <main className="relative z-10 w-full max-w-lg">
        <div className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/50 text-center transform transition-all hover:scale-[1.02]">
          
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-pink-100 flex items-center justify-center text-6xl md:text-7xl animate-pulse shadow-inner">
              💝
            </div>
            {teaseCount > 0 && (
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
                {teaseCount} missed clicks!
              </div>
            )}
          </div>

          <h1 className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-4 leading-tight">
            Will you be my Valentine? 💖
          </h1>
          
          <p className="text-gray-600 mb-10 text-lg font-light italic">
            "You are the best thing that ever happened to me..."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <button
              onClick={handleYes}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-pink-300/50 transform hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              YES 💕
              <span className="group-hover:animate-ping">✨</span>
            </button>

            <FloatingNoButton onAttemptClick={handleNoTease} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-pink-400 font-medium animate-bounce">
            {teaseCount > 5 ? "Common, just click YES! 😉" : teaseCount > 0 ? "Hehe, catching me is hard! 😜" : "Choose wisely... ✨"}
          </p>
        </div>
      </main>
      
      <footer className="fixed bottom-4 left-0 right-0 text-center text-pink-300 text-sm">
        Made with Love ❤️ 2025
      </footer>
    </div>
  );
};

export default App;
