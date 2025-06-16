
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  scrollY: number;
}

const About = ({ scrollY }: AboutProps) => {
  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story and What I Do */}
          <div 
            className="space-y-6"
            style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">🎯</span>
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Started my journey in tech 5 years ago with a passion for solving complex problems 
                  through elegant code. I specialize in creating seamless user experiences and 
                  robust backend systems that scale.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">💡</span>
                  What I Do
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I blend creativity with technical expertise to build modern web applications, 
                  mobile apps, and digital solutions. Always learning, always innovating, 
                  always delivering excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fun fact - Full width with glass background */}
          <div 
            className="mt-16"
            style={{ transform: `translateY(${-parallaxOffset * 0.4}px)` }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="mr-3">🎮</span>
                  Fun Fact
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, playing video games, 
                  or experimenting with AI and machine learning projects!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
