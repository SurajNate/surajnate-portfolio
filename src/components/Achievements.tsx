import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const timelineAchievements = [
     {
      year: "2019",
      event: "Started Professional Journey",
      icon: "🚀",
      achievements: [
        {
          title: "Academic Milestone",
          description: "Completed 10th grade with 91.80% and took admission in Diploma in Computer Engineering.",
          category: "Education",
          color: "from-purple-400 to-indigo-500"
        },
        {
          title: "Career Foundation",
          description: "Began my journey in software development with a focus on web technologies and problem-solving.",
          category: "Career Start",
          color: "from-blue-400 to-cyan-500"
        }
      ]
    },
    {
      year: "2020",
      event: "Skill Development & Recognition",
      icon: "🎯",
      achievements: [
        {
          title: "Tech Foundations & First Portfolio",
          description: "Strengthened core skills in web tech, programming languages, databases, networking, and built my first portfolio.",
          category: "Learning",
          color: "from-pink-400 to-red-500"
        }
      ]
    },
    {
      year: "2021",
      event: "Projects & Internship",
      icon: "⭐",
      achievements: [
        {
          title: "E-Commerce Web Projects",
          description: "Created both static and dynamic e-commerce websites for final year diploma project.",
          category: "Projects",
          color: "from-gray-400 to-blue-500"
        },
        {
          title: "Website Design Intern",
          organization: "Pro-Engineers Learning and Research Center",
          description: "Completed internship as Website Designing Intern, gaining practical frontend experience.",
          category: "Internship",
          color: "from-yellow-300 to-green-400"
        }
      ]
    },
    {
      year: "2022",
      event: "Transition to Degree",
      icon: "🎓",
      achievements: [
        {
          title: "Diploma Completion",
          description: "Graduated Diploma in Computer Engineering with 85.94%.",
          category: "Education",
          color: "from-purple-400 to-indigo-600"
        },
        {
          title: "B.E. Admission",
          organization: "Rajiv Gandhi Institute of Technology, Mumbai",
          description: "Started Direct Second Year B.E. in Artificial Intelligence and Data Science.",
          category: "Career Start",
          color: "from-blue-500 to-purple-600"
        }
      ]
    },
    {
      year: "2023",
      event: "Leadership and Learning",
      icon: "👑",
      achievements: [
        {
          title: "Mathematics Excellence",
          description: "Scored 100/100 in Engineering Mathematics III.",
          category: "Academics",
          color: "from-green-400 to-lime-500",
          impact : "100/100 EM-III"
        },
        {
          title: "SIH Internal Hackathon",
          description: "Secured 2nd place in SIH 2023 Internal Hackathon. Incredible teamwork and learning experience.",
          category: "Hackathon",
          color: "from-yellow-300 to-orange-400",
          impact : "2nd Place"
        },
        {
          title: "AI Training Completed",
          organization: "Acmegrade",
          description: "Completed training covering AI, ML, DL, NLP, CNNs, ANN, and Image Processing.",
          category: "Course",
          color: "from-indigo-400 to-cyan-500"
        }
      ]
    },
    {
      year: "2024",
      event: "Advanced AI Journey",
      icon: "🧠",
      achievements: [
        {
          title: "AI Project Development",
          description: "Built advanced AI projects in OpenCV, NLP, GenAI, Neural Networks, and more.",
          category: "Projects",
          color: "from-blue-500 to-green-500"
        },
        {
          title: "Final Year Project Begins",
          description: "Started capstone project on cutting-edge AI application.",
          category: "Academics",
          color: "from-purple-500 to-cyan-600",
          impact : "Python Code Summurizer - AI/ML"
        }
      ]
    },
    {
      year: "2025",
      event: "Milestones and Research",
      icon: "🏁",
      achievements: [
        {
          title: "Oasis Infobyte Internship",
          organization: "AICTE & Oasis Infobyte",
          description: "Completed internship with projects on ML, Data Science, and Streamlit deployment.",
          category: "Internship",
          color: "from-yellow-500 to-red-400",
          impact : "Data Scientist Intern"
        },
        {
          title: "Survay Paper Publication",
          organization: "ICFTSEM-2025",
          description: "Presented first survay paper on Transformer-based Models in Code Summarization at ICFTSEM-2025.",
          category: "Research",
          color: "from-green-400 to-teal-600",
          impact : "https://irjaeh.com/index.php/journal/article/view/593"
        },
        {
          title: "Hackathon at COGNITIA 2025",
          organization: "Rajiv Gandhi Institute of Technology, Mumbai",
          description: "Built AI-powered code review agent. Overcame challenges and received great feedback from judges.",
          category: "Hackathon",
          color: "from-orange-400 to-pink-500",
          impact : "SecureCode AI Agent – Code Reviewer"
        },
        {
          title: "Research Paper Publication",
          organization: "IJRAR",
          description: "Published paper titled 'CODE SUMMARIZER: A TRANSFORMER – BASED APPROACH FOR AUTOMATED CODE UNDERSTANDING' in IJRAR, April 2025 Edition.",
          category: "Research",
          color: "from-cyan-500 to-blue-700",
          impact : "https://ijrar.org/viewfull.php?&p_id=IJRAR25B1024"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Recognition and milestones that mark my journey in technology and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Comprehensive Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 hidden md:block" />
          
          <div className="space-y-12">
            {timelineAchievements.map((milestone, index) => (
              <div key={index} className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                <div className="flex-1">
                  <Card className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} transform hover:scale-105`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{milestone.icon}</div>
                          <div>
                            <div className="text-yellow-400 font-bold text-2xl">{milestone.year}</div>
                            <div className="text-white font-semibold text-lg">{milestone.event}</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {milestone.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-3 h-3 bg-gradient-to-r ${achievement.color} rounded-full`} />
                                <CardTitle className="text-white text-xl">{achievement.title}</CardTitle>
                              </div>
                              {achievement.organization && (
                                <p className="text-yellow-400 font-semibold mb-3">{achievement.organization}</p>
                              )}
                            </div>
                            <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0`}>
                              {achievement.category}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {achievement.description}
                          </p>
                          
                          {achievement.impact && (
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="text-white font-semibold">Impact:</div>
                              <Badge variant="outline" className={`border-white/30 text-white bg-gradient-to-r ${achievement.color} bg-clip-text`}>
                                {achievement.impact}
                              </Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-white/20 hidden md:block flex-shrink-0 mt-6" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
