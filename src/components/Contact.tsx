
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Facebook, Camera } from 'lucide-react';

interface ContactProps {
  scrollY: number;
}

const Contact = ({ scrollY }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS or similar service
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'surajnate29@gmail.com' // Updated email address
      };

      // Using mailto as a fallback for now - you can replace this with EmailJS or other service
      const mailtoLink = `mailto:surajnate29@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "surajnate29@gmail.com",
      description: "Send me an email anytime",
      color: "from-blue-400 to-cyan-500",
      action: "mailto:surajnate29@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 8928896469",
      description: "Call me for urgent matters",
      color: "from-green-400 to-teal-500",
      action: "tel:+918928896469"
    },
    {
      icon: "🌐",
      title: "LinkedIn",
      value: "www.linkedin.com/in/suraj-nate-50001a27b",
      description: "Let's connect professionally",
      color: "from-blue-500 to-purple-500",
      action: "https://www.linkedin.com/in/suraj-nate-50001a27b"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/SurajNate",
      description: "Check out my repositories",
      color: "from-gray-400 to-gray-600",
      action: "https://github.com/SurajNate"
    }
  ];

  const socialLinks = [
    { 
      icon: <Instagram size={24} />, 
      name: "Instagram", 
      url: "https://www.instagram.com/suraj_nate?igsh=ajB6OHpwZWpicXhl", 
      color: "hover:text-pink-400" 
    },
    { 
      icon: <Facebook size={24} />, 
      name: "Facebook", 
      url: "https://www.facebook.com/share/1C5pXt4DVT/", 
      color: "hover:text-blue-400" 
    },
    { 
      icon: <Camera size={24} />, 
      name: "Camera", 
      url: "https://www.instagram.com/suraj_nate?igsh=ajB6OHpwZWpicXhl", 
      color: "hover:text-purple-400" 
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss your next project or just have a friendly chat about technology!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <span className="mr-3 text-3xl">💬</span>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 transition-colors"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 transition-colors resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span className="mr-2">🚀</span>
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact methods */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center text-xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-1">{method.value}</p>
                        <p className="text-gray-400 text-xs">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Social links - Made smaller and full width */}
        <div className="mt-12">
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
              <h3 className="text-white text-lg text-center mb-4">Follow Me Online</h3>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform hover:scale-125 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <div className="text-2xl mb-4">🌟</div>
              <h3 className="text-white text-xl font-bold mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something extraordinary together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-2">💬</span>
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-black hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-2">🚀</span>
                  View My Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2025 Suraj Nate. All rights reserved.
        <p>AI/ML | Data Science Engineer</p>
      </div>
    </div>
  );
};

export default Contact;
