// src/app/sections/Contact.tsx
'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWraper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Form submission logic
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "nvemula@islander.tamucc.edu",
      href: "mailto:nvemula@islander.tamucc.edu"
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Phone",
      content: "+1 (361) 742-9587",
      href: "tel:+13617429587"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      title: "LinkedIn",
      content: "linkedin.com/in/naresh-vemula",
      href: "https://www.linkedin.com/in/naresh-vemula-149b15238"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      title: "GitHub",
      content: "github.com/Naresh-081",
      href: "https://github.com/Naresh-081"
    },
    {
      icon: <FaFilePdf className="w-5 h-5" />,
      title: "Resume",
      content: "Download PDF",
      href: "https://drive.google.com/file/d/1HlnQTf5yc0OcK8nODAp46ekO8G4MZAvn/view?usp=sharing"
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          Get <span className="text-[#4f46e5]">In Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your message has been sent.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">
                Oops! Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-2 px-4 rounded-lg transition-colors font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-600">
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 bg-[#4f46e5]/10 text-[#4f46e5] rounded-lg group-hover:bg-[#4f46e5] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4f46e5] transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;