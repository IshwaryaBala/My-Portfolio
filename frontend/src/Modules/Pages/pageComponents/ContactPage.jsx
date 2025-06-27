import React, { useState } from 'react';
import { FiArrowRight, FiMail, FiSend } from 'react-icons/fi';
import { Sparkles, Zap } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://your-backend-api.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-fit py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#faa1d4] via-[#f583c7] to-[#f36bba]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-3xl opacity-20 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 blur-3xl opacity-20 -z-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="flex flex-col mb-6">
          <div className="flex items-center mb-6">
            <Zap className="text-white mr-2" size={24} />
            <span className="text-white font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            LensConnect & 
            <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Network Labels and Automation - Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl opacity-0 hover:opacity-20 transition-all duration-500 scale-110 -z-10"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 w-full disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend className="w-5 h-5" />
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-800 rounded-xl text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-800 rounded-xl text-center">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Tags from the image */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Website Development</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">React.js</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Frontend Architecture</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">UI/UX Design</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Responsive Design</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">State Management</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">API Integration</span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Performance Optimization</span>
            </div>
            
            {/* Email card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full text-white">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">ishwaryaabalajii@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Additional info */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">React.js Developer Services</h4>
              <p className="text-gray-700 mb-4">
                Specializing in building modern, performant web applications with React.js, Next.js, and Tailwind CSS.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for new projects and collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;