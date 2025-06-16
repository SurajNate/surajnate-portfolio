
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist Intern",
      company: "Oasis Infobytes",
      period: "Jan 2025 - Feb 2025",
      type: "Internship",
      description: "Developed and deployed multiple machine learning models for classification and prediction. Gained hands-on experience in data preprocessing, visualization, and model optimization.",
      achievements: [
        "Applied advanced ML techniques to real-world datasets",
        "Improved analytical thinking and problem-solving skills",
        "Developed and deployed ML models"
      ],
      technologies: ["Machine Learning", "Python", "Data Preprocessing", "Data Visualization"],
      icon: "🚀"
    },
    {
      title: "Artificial Intelligence Training",
      company: "Acmegrade Pvt. Ltd. & Mood Indigo IIT BOMBAY",
      period: "Sep 2023 – Oct 2023",
      type: "Training",
      description: "Training on AI fundamentals, including NLP, machine vision, ML, DL, and CNNs, with hands-on experience in Natural Language Understanding and Image Processing.",
      achievements: [
        "Completed hands-on projects",
        "Gained experience in NLP and Image Processing",
        "Learned AI fundamentals"
      ],
      technologies: ["AI", "NLP", "Machine Vision", "ML", "DL", "CNN"],
      icon: "💻"
    },
    {
      title: "Website Designing Intern",
      company: "Pro-Engineers Learning and Research Center",
      period: "Aug 2021 - Sep 2021",
      type: "Internship",
      description: "Enhanced skills in Bootstrap design by developing a responsive and visually appealing portfolio. This hands-on experience allowed me to master layout techniques and effectively showcase projects.",
      achievements: [
        "Developed responsive portfolio",
        "Mastered layout techniques",
        "Showcased projects effectively"
      ],
      technologies: ["Bootstrap", "HTML", "CSS", "Responsive Design"],
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey building innovative solutions and gaining practical experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Timeline connection */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-40 bg-gradient-to-b from-orange-400/50 to-transparent hidden md:block" />
              )}
              
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl md:text-2xl group-hover:text-orange-400 transition-colors">
                          {exp.title}
                        </CardTitle>
                        <p className="text-orange-400 font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      exp.type === 'Internship' ? 'bg-blue-500' :
                      exp.type === 'Training' ? 'bg-purple-500' :
                      'bg-green-500'
                    } text-white border-0 text-sm px-3 py-1`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <span className="mr-2">🏆</span>
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-gray-300 text-sm">
                          <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3 animate-pulse" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <span className="mr-2">⚡</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-orange-400/30 text-orange-300 hover:bg-orange-400/10 transition-colors transform hover:scale-110"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;
