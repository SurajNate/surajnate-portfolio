
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
  scrollY: number;
}

const Projects = ({ scrollY }: ProjectsProps) => {
  const [filter, setFilter] = useState('All');
  const parallaxOffset = scrollY * 0.2;

  const projects = [
    {
      title: "SecureCode AI Agent – Code Reviewer",
      description: "Developed an AI agent to detect and fix code vulnerabilities like SQL Injection, XSS, and Buffer Overflows in real time.",
      category: "AI/ML",
      image: "🛡️",
      technologies: ["Python", "Streamlit", "Gemini 1.5 Pro", "LangChain", "OpenAI", "GitHub API"],
      features: ["Real-time vulnerability detection", "Automated code fixing", "Chat-based review", "3-stage pipeline"],
      github: "https://github.com/SurajNate",
      live: "https://www.linkedin.com/posts/zaid-khan-6ba11b234_hackathon-codereviewai-ai-activity-7316702248527454208-gcLL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQrB1ABogH6SedqzXdlrVUth69oyIwyX98",
      status: "Hackathon"
    },
    {
      title: "Python Code Summarizer",
      description: "Developed a web application to generate concise summaries of Python code using fine-tuned Hugging Face transformer models.",
      category: "AI/ML",
      image: "📝",
      technologies: ["Python", "Streamlit", "Hugging Face", "PyTorch", "pyperclip"],
      features: ["Concise code summaries", "Fine-tuned transformers", "Intuitive UI", "Real-time explanation"],
      github: "https://github.com/SurajNate/Python-Code-Summarizer.git",
      live: "https://python-code-summarizer-surajnate.streamlit.app/",
      status: "Completed"
    },
    {
      title: "PDF Query Assistant using Generative AI",
      description: "A system for streamlined PDF document management, enabling natural language interaction and semantic search.",
      category: "Generative AI",
      image: "📄",
      technologies: ["Python", "PyPDF2", "Langchain", "OpenAI", "Pinecone", "Streamlit", "Firebase"],
      features: ["Natural language interaction", "Semantic search", "Easy information extraction", "PDF management"],
      github: "https://github.com/SurajNate/PDF-Query-Assistant-using-Generative-AI.git",
      live: "https://github.com/SurajNate/PDF-Query-Assistant-using-Generative-AI.git",
      status: "Completed"
    },
    {
      title: "Real-Time Object Recognition using Pretrained Model 🎯📦",
      description: "Implemented a real-time object recognition system using the MobileNet SSD model with OpenCV’s DNN module. Successfully detected and classified multiple objects in live camera feeds. Ideal for applications in surveillance, robotics, and automation.",
      category: "AI/ML",
      image: "📦",
      technologies: ["Python", "OpenCV", "DNN", "MobileNet SSD", "COCO Dataset"],
      features: ["Used pretrained MobileNet SSD model for object detection","Integrated with OpenCV’s DNN module for fast inference","Real-time video stream processing and object classification","Detection of 80+ object classes from the COCO dataset","Optimized for lightweight, low-latency performance"],
      github: "https://github.com/SurajNate/Real-Time-Object-Recognition-using-Pretrained-Model.git",
      live: "https://www.youtube.com/watch?v=uXj_CFT_H2c",
      status: "Learning Project"
    },
    {
      title: "Text2Image Generator",
      description: "The Text2Image Generator is a creative web app that transforms textual descriptions into visually appealing images using advanced generative algorithms. It enables users to turn their imagination into graphics, supporting a wide range of descriptive inputs.",
      category: "Generative AI",
      image: "🖌️",
      technologies: ["Python", "Streamlit", "Text-to-Image AI", "OpenAI/Diffusion Models", "API Integration"],
      features: ["Converts text prompts into images","User-friendly web interface built with Streamlit","Real-time generation and display of AI-created images","Integrated error handling for API calls","Responsive design for accessibility across devices"],
      github: "https://github.com/SurajNate/Text2Image-Genrator.git",  
      live: "https://text2image-genrator-by-suraj-nate.streamlit.app/",
      status: "Learning Project"
    },
    {
      title: "Speech-to-Text Converter",
      description: "A Natural Language Processing micro project that converts speech from WAV audio files into accurate textual transcriptions using an Automatic Speech Recognition (ASR) engine enhanced with NLP. It handles homophones, punctuation, and contextual word corrections for robust performance across accents and noise conditions.",
      category: "NLP",
      image: "🗣️",
      technologies: ["Python", "Streamlit", "SpeechRecognition", "NLP", "Deep Learning", "Librosa", "Wave File Processing"],
      features: ["Accepts WAV file input for transcription","Real-time speech-to-text conversion","Context-aware correction using NLP techniques","Noise-robust model trained on diverse datasets","Evaluated with Word Error Rate (WER) and response time"],
      github: "https://github.com/SurajNate/Speech-to-text-converter_733_732_725.git",
      live: "https://speech-to-text-converter-nlp-surajnate.streamlit.app/",
      status: "Learning Project"
    },
    {
      title: "Image Classification Using CNN 🖼️🧠",
      description: "Built a Convolutional Neural Network (CNN) model to classify images into different categories. Explored deep learning techniques for automated feature extraction and classification, achieving high accuracy on test data.",
      category: "AI/ML",
      image: "🖼️",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning", "OpenCV"],
      features: ["Developed CNN architecture with convolution, pooling, and fully connected layers","Applied data preprocessing: resizing, normalization, augmentation","Trained on a custom or public dataset with high accuracy","Implemented model saving and loading for reuse","Performed real-time predictions with confidence scores"],
      github: "https://github.com/SurajNate/Image-Classification-Using-CNN.git",
      live: "https://www.youtube.com/watch?v=Zd3_pMHhldg",
      status: "Learning Project"
    },
    {
      title: "Shopping List using Smart Contracts",
      description: "A basic blockchain micro project that demonstrates how smart contracts can be used to manage a simple shopping list on the Ethereum blockchain. It allows users to add, update, and remove items in a decentralized and tamper-proof manner.",
      category: "Blockchain",
      image: "🛒",
      technologies: ["Solidity", "Ethereum", "Remix IDE", "MetaMask", "Smart Contracts"],
      features: ["Add items to the shopping list","Mark items as purchased","Remove completed or unwanted items","Immutable list management via blockchain","Runs on Ethereum-compatible test networks"],
      github: "https://github.com/SurajNate/Shopping-List-using-Smart-Contracts_733_732_725.git",
      live: "https://github.com/SurajNate/Shopping-List-using-Smart-Contracts_733_732_725.git",
      status: "Acadmic Project - 🛠️ Prototype"
    },
    {
      title: "Computer Vision – Moving Object Detection with OpenCV",
      description: "Developed a real-time object detection system using OpenCV that tracks moving objects through contour detection, thresholding, and frame differencing techniques.",
      category: "Computer Vision",
      image: "🎥",
      technologies: ["Python", "OpenCV"],
      features: ["Real-time motion detection","Gaussian blur and thresholding","Contour and edge-based tracking","Overlay text and bounding boxes","Live camera stream processing"],
      github: "https://github.com/SurajNate/Computer-Vision-Moving-Object-Detection-with-OpenCV.git",
      live: "https://www.youtube.com/watch?v=nEGuJXabCDw",
      status: "Learning Project"
    },
    {
      title: "Advanced Facial Detection & Tracking – Haar Cascade with OpenCV",
      description: "Implemented real-time multi-scale facial detection and tracking using the Haar Cascade Frontal Face Detection algorithm with OpenCV, enhancing accuracy using the Adaboost learning technique.",
      category: "Computer Vision",
      image: "👤",
      technologies: ["Python", "OpenCV", "Haar Cascade", "Adaboost"],
      features: ["Multi-scale face detection","Live real-time face tracking","Grayscale frame optimization","Haar Cascade + Adaboost feature selection","Rectangle overlays for detected faces"],
      github: "https://github.com/SurajNate/Advanced-Facial-Detection-Tracking-Haar-Cascade-with-OpenCV.git",
      live: "https://www.youtube.com/watch?v=eqo2xipn9Ks",
      status: "Learning Project"
    },
    {
      title: "Facial Emotion Recognition from Faces 😊😠😢",
      description: "Developed a real-time Facial Emotion Recognition (FER) system using deep learning models. Leveraged PyTorch and OpenCV with a dedicated pre-trained model to classify human emotions such as happy, sad, angry, and more.",
      category: "Artificial Intelligence / Computer Vision",
      image: "😊",
      technologies: ["Python", "OpenCV", "PyTorch", "Facial Emotion Recognition", "Deep Learning"],
      features: ["Real-time emotion classification from video","Pre-trained model-based detection","Facial feature analysis (eyes, eyebrows, mouth curvature)","Detects 7 basic emotions (Happy, Sad, Angry, Surprised, Neutral, Fearful, Disgusted)"],
      github: "https://github.com/SurajNate/Facial-Emotion-Recognition-from-Faces.git",
      live: "https://youtu.be/vzB2hgWUuD0?si=1oZrHUmSvA5lxe0W",
      status: "Learning Project"
    },
    {
      title: "Real-Time Face Recognition with Fisherface Algorithm 🤖📸",
      description: "Implemented a real-time face recognition system using OpenCV and the Fisherface Recognition Algorithm. The system was trained on a custom dataset and performs classification with high accuracy under different lighting conditions.",
      category: "Computer Vision",
      image: "🤖",
      technologies: ["Python", "OpenCV", "Fisherface", "Machine Learning", "Haar Cascade"],
      features: ["Face dataset creation and training","Fisherface recognition using Linear Discriminant Analysis (LDA)","Real-time face prediction with confidence score","Robust performance under various lighting"],
      github: "https://github.com/SurajNate/Real-Time-Face-Recognition-with-Fisherface-Algorithm.git",
      live: "https://www.youtube.com/watch?v=jiHWxzWOzeo&feature=youtu.be",
      status: "Learning Project"
    },
    {
      title: "Object Tracking Based on Color 🎨🎯",
      description: "Developed a real-time object tracking system using OpenCV by detecting specific colors in the HSV color space. Integrated PyAutoGUI for automation based on object movement, useful in gesture control systems and robotics.",
      category: "Computer Vision",
      image: "🎨",
      technologies: ["Python", "OpenCV", "HSV Color Space", "Contour Detection", "PyAutoGUI"],
      features: ["Color-based object detection using HSV space","BGR to HSV conversion for accurate segmentation","Real-time tracking using contour detection and centroid estimation","Automated cursor control using PyAutoGUI","Gesture-driven interface simulation"],
      github: "https://github.com/SurajNate/Object-Tracking-Based-on-Color.git",
      live: "https://www.youtube.com/watch?v=Hi1QzA2MVtk",
      status: "Learning Project"
    },
    {
      title: "Dino Game using Hand Gesture",
      description: "An innovative version of the classic Chrome Dino Game where players control the dinosaur using real-time hand gestures. The game uses computer vision to detect gestures and translate them into actions like jump and duck, offering an immersive and physical gameplay experience.",
      category: "Computer Vision",
      image: "🦖",
      technologies: ["OpenCV", "Mediapipe", "Python", "Streamlit", "Gesture Recognition"],
      features: ["Real-time gesture detection using webcam","Hands-free control of dino (jump, duck, idle)","Live feedback through camera overlay","Gesture-to-action mapping for game control"],
      github: "https://github.com/SurajNate/Dino-game-using-hand-gesture.git",
      live: "https://dino-game-using-hand-gesture-by-suraj-nate.streamlit.app/",
      status: "🚫 Deployment Error – 'Error installing requirements'"
    },
    {
      title: "Movie Recommender System – Content-Based",
      description: "Built a content-based movie recommender system using TMDB dataset, with a Streamlit interface and Streamlit deployment for real-time recommendations.",
      category: "AI/ML",
      image: "🎥",
      technologies: ["Python", "Pandas", "Scikit-learn", "TMDB API", "Streamlit", "NumPy"],
      features: ["Content-based filtering","TMDB metadata integration","Interactive UI with Streamlit","Deployed on Streamlit Cloud for public access"],
      github: "https://github.com/SurajNate/movie-recommendation-system.git",
      live: "https://movie-recommendation-system-by-suraj-nate.streamlit.app/",
      status: "Academic Project"
    },
    {
      title: "Dynamic Website – Final Year Diploma Project",
      description: "Built a fully responsive and dynamic website with user authentication, admin dashboard, and database integration using PHP and MySQL for the final year diploma project.",
      category: "Web Development",
      image: "🌐",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "phpMyAdmin"],
      features: ["Hash-based user authentication","Dynamic admin product management","Receipt generation in text format","Full backend integration using phpMyAdmin","Responsive UI with Bootstrap"],
      github: "https://github.com/SurajNate/E-Commerce-Shop.git",
      live: "https://youtu.be/7D6UDxhY6XE?si=eymFC2fo85P6yiYi",
      status: "Academic Project"
    },
    {
      title : "E-Commerce Website – Fashion Flash (Static)",
      description: "Designed and developed a static e-commerce website frontend using HTML, CSS, JavaScript, and Bootstrap, featuring modern UI/UX for seamless shopping experience.",
      category : "Web Development",
      image: "🛒",
      technologies  : ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features : ["Responsive UI/UX design", "Interactive product showcase", "Smooth navigation", "Modern layout aesthetics"],
      github : "https://github.com/SurajNate/frontend-only_first-frontend.git",  
      live  : "https://surajnate.github.io/frontend-only_first-frontend/",
      status : "Academic Project"
    },
    {
      title: "Beginner Portfolio Website – My First Step in Web Development",
      description: "Created my first portfolio website using HTML, CSS, JavaScript, and Bootstrap in 2021, showcasing my early projects and marking the beginning of my web development journey.",
      category: "Web Development",
      image: "🖥️",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: ["Responsive layout using Bootstrap","Project showcase and about section","Clean and simple beginner design","Highlights early web development journey"],
      github: "https://github.com/SurajNate/first-portfolio-diploma2ndYear.git",
      live: "https://youtu.be/FGwfp34kNdw?si=gjyKbDlALcQuOKIW",
      status: "Personal Project"
    }



  ];

  const categories = ['All', 'AI/ML', 'Generative AI', 'Web Development', 'Computer Vision', 'NLP', 'Blockchain'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-20 mt-24"
          style={{ transform: `translateY(${-parallaxOffset * 0.1}px)` }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Showcase of innovative solutions built with cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Filter buttons - No bottom margin */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-0"
          style={{ transform: `translateY(${-parallaxOffset * 0.15}px)` }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`${
                filter === category 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'border-white/30 text-black hover:bg-white/10'
              } rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group overflow-hidden h-full">
                {/* Project image/icon */}
                <div className="relative p-8 text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {project.image}
                  </div>
                  <Badge className={`absolute top-4 right-4 ${
                    project.status === 'Live' ? 'bg-green-500' :
                    project.status === 'Beta' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  } text-white border-0`}>
                    {project.status}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors text-xl">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="border-cyan-400/30 text-cyan-300 w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm flex items-center">
                      <span className="mr-2">✨</span>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-gray-400">
                          <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, tIndex) => (
                        <Badge 
                          key={tIndex} 
                          variant="outline" 
                          className="border-white/20 text-white text-xs hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      asChild
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">🔗</span>
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-white/30 text-black hover:bg-white/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">💻</span>
                        Code
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

export default Projects;
