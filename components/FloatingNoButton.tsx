
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Position } from '../types';

interface Props {
  onAttemptClick: () => void;
}

const FloatingNoButton: React.FC<Props> = ({ onAttemptClick }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "Nice try 😜",
    "Almost 😏",
    "You can’t catch me 💕",
    "Too slow! 🏃‍♀️",
    "Try again! 😘",
    "Not today! 💖",
    "Missed me! ✨"
  ];

  const moveButton = useCallback(() => {
    if (!buttonRef.current) return;

    const btnWidth = buttonRef.current.offsetWidth;
    const btnHeight = buttonRef.current.offsetHeight;
    
    // Calculate boundaries to keep button in viewport
    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;
    
    const newX = Math.max(20, Math.random() * maxX);
    const newY = Math.max(20, Math.random() * maxY);

    setPosition({ x: newX, y: newY });
    setMessageIndex((prev) => (prev + 1) % messages.length);
  }, [messages.length]);

  // Initial centering within the relative container of the card
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    // If it's a mobile touch, prevent default to stop the click from triggering immediately
    if ('touches' in e) {
      // Small chance to let them click? No, prompt says escape!
    }
    moveButton();
    onAttemptClick();
  };

  const handleMouseEnter = () => {
    moveButton();
    onAttemptClick();
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleInteraction}
        onClick={handleInteraction}
        style={isInitialized ? {
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          zIndex: 50
        } : {}}
        className="px-8 py-3 bg-white border-2 border-pink-300 text-pink-500 font-bold rounded-full shadow-lg hover:shadow-pink-200/50 transform active:scale-95 flex items-center gap-2 group whitespace-nowrap"
      >
        NO 😜
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {messages[messageIndex]}
        </span>
      </button>
    </div>
  );
};

export default FloatingNoButton;
