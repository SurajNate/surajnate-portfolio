import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Artificial Intelligence and Data Science Engineer";

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };
    typeText();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"
        />
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        {/* Profile photo */}
        <div 
          className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300 overflow-hidden"
        >
          <img src="/lovable-uploads/db2691e6-ff6c-461d-8c1e-ee47f3078261.png" alt="Suraj Nate" className="w-full h-full object-cover" />
        </div>

        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Suraj Nate
          </span>
        </h1>

        <div 
          className="text-xl md:text-2xl text-gray-300 mb-8 h-8 font-mono"
        >
          {text}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
        </div>

        <p 
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating exceptional digital experiences with cutting-edge technologies. 
          I bring ideas to life through clean code and beautiful design.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work 🚀
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-black hover:bg-white/10 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch 📧
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
