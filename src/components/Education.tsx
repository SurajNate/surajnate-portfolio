import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationProps {
  scrollY: number;
}

const Education = ({ scrollY }: EducationProps) => {
  const parallaxOffset = scrollY * 0.2;

  const education = [
    {
      degree: "BE. Artificial Intelligence and Data science",
      school: "Rajiv Gandhi Institute Of Technology, Mumbai",
      year: "Nov 2022 – May 2025",
      gpa: "9.23 CGPA",
      achievements: ["Engineering Mathematics III – 100/100"],
      description: "Completed Bachelor of Engineering with a specialization in AI and Data Science, focusing on machine learning and advanced AI, GenAI algorithms.",
      icon: "🎓"
    },
    {
      degree: "Diploma In Computer Engineering",
      school: "Kala Vidya Mandir Institute of Technology, Mumbai",
      year: "Aug 2019 – Jul 2022",
      gpa: "85.94%",
      achievements: ["Consistent high performer"],
      description: "Completed a comprehensive diploma program in computer engineering, building a strong foundation in software and hardware.",
      icon: "🏫"
    },
    {
      degree: "Secondary School Certificate",
      school: "Vidya Vikas Sabha High School, Mumbai",
      year: "Jun 2008 – Mar 2019",
      gpa: "91.80%",
      achievements: ["Top percentile scorer"],
      description: "Completed secondary education with a strong focus on science and mathematics.",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and academic excellence have shaped my technical foundation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative"
              style={{ transform: `translateY(${-parallaxOffset * (0.2 + index * 0.1)}px)` }}
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-white/30 to-transparent hidden md:block" />
              )}
              
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl transform transition-transform duration-300">
                        {edu.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl md:text-2xl group-hover:text-green-400 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                        <p className="text-gray-400">{edu.year}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 text-lg px-3 py-1">
                        {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge 
                        key={achIndex} 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 transition-colors transform hover:scale-110"
                      >
                        ⭐ {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
