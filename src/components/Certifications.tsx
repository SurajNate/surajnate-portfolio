import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { verify } from 'crypto';

interface CertificationsProps {
  scrollY: number;
}

const Certifications = ({ scrollY }: CertificationsProps) => {
  const parallaxOffset = scrollY * 0.2;

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM (CognitiveClass.ai)",
      date: "Dec 2024",
      validUntil: "N/A",
      credentialId: "2ad4c4a4-8d19-4853-9516-49fe49fdb9bb/",
      description: "An IBM-issued badge for demonstrating proficiency in Python for Data Science.",
      skills: ["Python", "Data Science", "Pandas", "Numpy"],
      level: "Professional",
      icon: "🐍",
      color: "from-blue-400 to-cyan-500",
      verified: true,
      Verify : "https://www.credly.com/badges/2ad4c4a4-8d19-4853-9516-49fe49fdb9bb/",
      ViewDetails: "https://www.credly.com/badges/2ad4c4a4-8d19-4853-9516-49fe49fdb9bb/"
    },
    {
      title: "Data Science and Analytics",
      issuer: "HP Life",
      date: "Dec 2024",
      validUntil: "N/A",
      credentialId: "465cb514-3097-4bea-a35a-b7b4c7f912eb",
      description: "Online course covering fundamentals of data science and analytics.",
      skills: ["Data Science", "Analytics", "Data Visualization"],
      level: "Associate",
      icon: "📊",
      color: "from-green-400 to-teal-500",
      verified: true,
      Verify : "https://www.life-global.org/certificate/465cb514-3097-4bea-a35a-b7b4c7f912eb",
      ViewDetails: "https://www.life-global.org/certificate/465cb514-3097-4bea-a35a-b7b4c7f912eb"
    },
    {
      title: "Artificial Intelligence Training",
      issuer: "Acmegrade",
      date: "September 2023",
      validUntil: "N/A",
      credentialId: "AGC2023080410",
      description: "Successfully completed the Artificial Intelligence Training course covering AI fundamentals, expert systems, NLP, machine vision, Python, ML, DL, ANN, and CNN.",
      skills: ["Artificial Intelligence (AI)","Image Processing","Artificial Neural Networks","Expert Systems","Convolutional Neural Networks (CNN)","Deep Learning","Deep Neural Networks (DNN)","Natural Language Processing (NLP)"],
      level: "Associate",
      icon: "🧠",
      color: "from-yellow-400 to-red-500",
      verified: true,
      Verify : "https://media.licdn.com/dms/image/v2/D4D2DAQG5w6MO-JinFw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734690572164?e=1750694400&v=beta&t=yTCX4I9slyrZn2ZrwZ9fZXZJ0SnvWaGF0k3TdPdFn3w",
      ViewDetails: "https://media.licdn.com/dms/image/v2/D4D2DAQG5w6MO-JinFw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734690572164?e=1750694400&v=beta&t=yTCX4I9slyrZn2ZrwZ9fZXZJ0SnvWaGF0k3TdPdFn3w"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Google Cloud (Coursera)",
      date: "July 2023",
      validUntil: "N/A",
      credentialId: "P575HWB3EZPL",
      description: "An introductory course to Large Language Models on the Google Cloud platform.",
      skills: ["LLM", "Generative AI", "Google Cloud"],
      level: "Associate",
      icon: "☁️",
      color: "from-yellow-400 to-orange-500",
      verified: true,
      Verify : "https://www.coursera.org/account/accomplishments/verify/P575HWB3EZPL",
      ViewDetails: "https://www.coursera.org/account/accomplishments/verify/P575HWB3EZPL"
    },
    {
      title: "Workshop on Artificial Intelligence and Machine Learning",
      issuer: "Eclearnix Edtech Private Limited",
      date: "February 2025",
      validUntil: "N/A",
      credentialId: "AM4MNGRMSSHAZ",
      description: "Participated in a hands-on workshop covering core topics in Artificial Intelligence and Machine Learning, including Generative AI, RNNs, CNNs, and Deep Learning techniques.",
      skills: ["Artificial Intelligence (AI)","Machine Learning","Generative AI","Recurrent Neural Networks (RNN)","Convolutional Neural Networks (CNN)","Deep Learning"],
      level: "Beginner",
      icon: "🧠",
      color: "from-pink-500 to-red-600",
      verified: true,
      Verify : "https://www.eclearnix.com/certificate-validation?credentialId=AM4MNGRMSSHAZ",
      ViewDetails: "https://www.eclearnix.com/certificate-validation?credentialId=AM4MNGRMSSHAZ"
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "December 2024",
      validUntil: "N/A",
      credentialId: "b2919c24-6129-4937-b6dc-9b402feb1396",
      description: "Developed a basic understanding of Artificial Intelligence and explored its impact on economics, education, industry, and daily life. Covered fundamentals of LLMs, Machine Learning, Deep Learning, and Data Science.",
      skills: ["Large Language Models (LLM)","Machine Learning","Deep Learning","Data Science","Artificial Intelligence (AI)"],
      level: "Beginner",
      icon: "🤖",
      color: "from-green-400 to-blue-500",
      verified: true,
      Verify : "https://www.life-global.org/certificate/b2919c24-6129-4937-b6dc-9b402feb1396",
      ViewDetails: "https://www.life-global.org/certificate/b2919c24-6129-4937-b6dc-9b402feb1396"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud (Coursera)",
      date: "July 2023",
      validUntil: "N/A",
      credentialId: "hHDAAYXQ8EW8M",
      description: "An introductory course to Generative AI concepts and applications.",
      skills: ["Generative AI", "AI Concepts", "Google Cloud"],
      level: "Associate",
      icon: "🤖",
      color: "from-purple-400 to-pink-500",
      verified: true,
      Verify : "https://www.coursera.org/account/accomplishments/verify/HDAAYXQ8EW8M",
      ViewDetails: "https://www.coursera.org/account/accomplishments/verify/HDAAYXQ8EW8M"
    },
    {
      title: "Introduction to DevOps",
      issuer: "Microsoft",
      date: "December 2024",
      validUntil: "N/A",
      credentialId: "3RKSDDGH?sharingId=A37BD81A99A516CC",
      description: "Completed a foundational course on DevOps practices, including Git, GitHub, Azure, Agile methodologies, CI/CD, and strategic planning. Gained essential skills for modern software delivery and collaboration.",
      skills: ["Git","GitHub","Microsoft Azure","DevOps","Agile Methodologies","Continuous Integration and Continuous Delivery (CI/CD)","Goal and Timeline Planning"],
      level: "Beginner",
      icon: "🛠️",
      color: "from-indigo-500 to-blue-600",
      verified: true,
      Verify : "https://learn.microsoft.com/en-us/users/surajnate-5580/achievements/3rksddgh",
      ViewDetails: "https://learn.microsoft.com/en-us/users/surajnate-5580/achievements/3rksddgh"
    },
    {
      title: "Big Data 101",
      issuer: "Cognitive Class",
      date: "December 2024",
      validUntil: "N/A",
      credentialId: "5bd31f08706a4dc8a03d53684c617104",
      description: "Completed an introductory course on Big Data fundamentals. Gained a deeper understanding of Big Data technologies, strategies, and their role in modern data-driven applications, complementing foundational knowledge in AI and Data Science.",
      skills: ["Data Science"],
      level: "Beginner",
      icon: "📊",
      color: "from-blue-700 to-cyan-500",
      verified: true,
      Verify : "https://courses.cognitiveclass.ai/certificates/5bd31f08706a4dc8a03d53684c617104",
      ViewDetails: "https://courses.cognitiveclass.ai/certificates/5bd31f08706a4dc8a03d53684c617104"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "August 2023",
      validUntil: "N/A",
      credentialId: "U89BTJALB2ZN",
      description: "Learned foundational and practical techniques for crafting effective prompts to optimize interactions with ChatGPT and other language models. Gained insights into guiding model behavior for diverse data science and communication tasks.",
      skills: ["Prompt Engineering","Data Science"],
      level: "Beginner",
      icon: "✍️",
      color: "from-purple-600 to-indigo-500",
      verified: true,
      Verify : "https://www.coursera.org/account/accomplishments/verify/U89BTJALB2ZN",
      ViewDetails: "https://www.coursera.org/account/accomplishments/verify/U89BTJALB2ZN"
    },
    {
      title: "Developer and Technology Job Simulation",
      issuer: "Accenture UK",
      date: "December 2024",
      validUntil: "N/A",
      credentialId: "39RZGp7utQW2fbkc5",
      description: "Completed a real-world job simulation covering key aspects of software development including Agile & Waterfall methodologies, algorithms, flow diagrams, SDLC, and STLC. Gained practical insights into the role of a developer in a professional environment.",
      skills: ["Agile Methodologies","Agile & Waterfall Methodologies","Algorithms","Flow Diagramming","Software Development Life Cycle (SDLC)","Software Testing Life Cycle (STLC)"],
      level: "Beginner",
      icon: "💼",
      color: "from-gray-700 to-purple-500",
      verified: true,
      Verify : "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_sAWRv9hb6sJ9PyjsL_1735069158025_completion_certificate.pdf",
      ViewDetails: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_sAWRv9hb6sJ9PyjsL_1735069158025_completion_certificate.pdf"
    },
    {
      title: "Web Design Specialist Certification",
      issuer: "Royal Computer Institute Borivali",
      date: "October 2021",
      validUntil: "N/A",
      credentialId: "Government Authorized Certificate",
      description: "Gained a strong foundation in web design using HTML, CSS, and JavaScript, along with tools like Bootstrap and Photoshop. Built responsive, interactive websites and enhanced UI/UX through hands-on projects.",
      skills: ["JavaScript","Computer Engineering","Bootstrap (Framework)","Adobe Photoshop","Web Development","Web Design"],
      level: "Intermediate",
      icon: "🌐",
      color: "from-orange-400 to-yellow-500",
      verified: true,
      Verify : "https://media.licdn.com/dms/image/v2/D4D2DAQHya9NTnF0tHA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1734600480210?e=1750690800&v=beta&t=EwjnB1doIXrAdKTFK3IesIxZPaL0vLYxnqeUpJH5jLc",
      ViewDetails: "https://media.licdn.com/dms/image/v2/D4D2DAQHya9NTnF0tHA/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1734600480210?e=1750690800&v=beta&t=EwjnB1doIXrAdKTFK3IesIxZPaL0vLYxnqeUpJH5jLc"
    },
    {
      title: "Young Industry Enthusiast - Capital Markets",
      issuer: "Infosys Springboard",
      date: "December 2024",
      validUntil: "N/A",
      credentialId: "1-a58e2fee-39eb-4da5-840e-2e23922794ba.pdf",
      description: "Explored foundational concepts in finance including stocks, bonds, IPOs, trading, and mutual funds. Gained insights into capital markets to make informed financial decisions.",
      skills: ["Finance","Capital Markets","IPO","Stock Market","Trading","Mutual Funds"],
      level: "Beginner",
      icon: "📈",
      color: "from-blue-500 to-green-400",
      verified: true,
      Verify : "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0137397916160819200/1-a58e2fee-39eb-4da5-840e-2e23922794ba.pdf",
      ViewDetails: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0137397916160819200/1-a58e2fee-39eb-4da5-840e-2e23922794ba.pdf"
    }

  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Industry-recognized certifications validating expertise across multiple technology domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group overflow-hidden h-full relative">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Verification badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-green-500 text-white border-0 flex items-center gap-1">
                      <span>✓</span>
                      Verified
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0`}>
                          {cert.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-white group-hover:text-emerald-400 transition-colors text-lg leading-tight">
                        {cert.title}
                      </CardTitle>
                      <p className="text-emerald-400 font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certification details */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-400">Issued:</div>
                      <div className="text-white font-medium">{cert.date}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Valid Until:</div>
                      <div className="text-white font-medium">{cert.validUntil}</div>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="text-xs">
                    <div className="text-gray-400">Credential ID:</div>
                    <div className="text-emerald-400 font-mono">{cert.credentialId}</div>
                  </div>

                  {/* Skills covered */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
                      <span className="mr-2">🎯</span>
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="border-white/20 text-white text-xs hover:bg-white/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      className={`flex-1 bg-gradient-to-r ${cert.color} hover:opacity-90 text-white border-0 text-xs`}
                    >
                      <a href={cert.Verify} target="_blank" rel="noopener noreferrer">
                         <span className="mr-1">🔗</span>
                      Verify
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-white/30 text-black hover:bg-white/10 text-xs"
                    >
                      <a href={cert.ViewDetails} target="_blank" rel="noopener noreferrer">
                         <span className="mr-1">📄</span>
                      View Details
                      </a>
                    </Button>
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

export default Certifications;
