import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  const skillCategories = [
    {
      category: "Languages",
      icon: "🧑‍💻",
      color: "from-sky-400 to-cyan-300",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C/C++", level: 80, icon: " C" },
        { name: "SQL", level: 95, icon: "🗃️" },
        { name: "JavaScript", level: 80, icon: "⚡" },
        { name: "HTML/CSS", level: 90, icon: "🌐" },
      ]
    },
    {
      category: "AI, ML & Data Science",
      icon: "🧠",
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "TensorFlow/Keras", level: 90, icon: "🔥" },
        { name: "PyTorch", level: 85, icon: "💡" },
        { name: "Scikit-learn", level: 92, icon: "🤖" },
        { name: "Pandas/NumPy", level: 95, icon: "📊" },
        { name: "Hugging Face", level: 90, icon: "🤗" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "📚",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "ReactJS", level: 85, icon: "⚛️" },
        { name: "Bootstrap", level: 95, icon: "🅱️" },
        { name: "Matplotlib/Seaborn", level: 88, icon: "📈" },
        { name: "XGBoost", level: 82, icon: "🚀" },
      ]
    },
    {
      category: "Developer Tools & Cloud",
      icon: "☁️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Git", level: 90, icon: "🗂️" },
        { name: "VS Code/PyCharm", level: 95, icon: "💻" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Google Cloud", level: 75, icon: "🇬" },
        { name: "NodeJS", level: 80, icon: "🟢" },
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName && !visibleSkills.includes(skillName)) {
              setVisibleSkills(prev => [...prev, skillName]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleSkills]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Proficient in modern technologies with hands-on experience in full-stack development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
        </div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 group h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white text-xl md:text-2xl group-hover:scale-105 transition-transform">
                    <span className="text-3xl mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="space-y-2"
                      data-skill={`${category.category}-${skill.name}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={visibleSkills.includes(`${category.category}-${skill.name}`) ? skill.level : 0}
                          className="h-3 bg-white/10"
                        />
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: visibleSkills.includes(`${category.category}-${skill.name}`) ? `${skill.level}%` : '0%',
                            height: '12px'
                          }}
                        />
                        
                        {/* Skill level indicators */}
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-2">
                          {skill.level >= 90 && (
                            <span className="text-white text-xs font-bold animate-pulse">Expert</span>
                          )}
                          {skill.level >= 80 && skill.level < 90 && (
                            <span className="text-white text-xs font-bold">Advanced</span>
                          )}
                          {skill.level < 80 && (
                            <span className="text-white text-xs font-bold">Intermediate</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
