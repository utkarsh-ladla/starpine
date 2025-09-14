import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      company: "QUOR GROUP",
      title: "AR innovation in commodity trading event",
      description: "Revolutionary AR experience transforming how traders interact with commodity data through immersive 3D visualizations and real-time market insights.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&crop=center",
      category: "AR/VR Technology"
    },
    {
      id: 2,
      company: "AMAZON",
      title: "Sharing smiles and creating magic for Amazon",
      description: "Comprehensive digital transformation project that enhanced customer experience through innovative UI/UX design and seamless e-commerce integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      category: "E-commerce & Digital"
    },
    {
      id: 3,
      company: "TECH INNOVATIONS",
      title: "Mobile app revolution for fintech",
      description: "Built a cutting-edge mobile banking application with advanced security features and intuitive user interface that serves millions of users daily.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      category: "Mobile & Fintech"
    },
    {
      id: 4,
      company: "GLOBAL HEALTH",
      title: "AI-powered healthcare platform",
      description: "Developed an intelligent healthcare management system using machine learning to predict patient outcomes and optimize treatment plans.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      category: "Healthcare & AI"
    },
    {
      id: 5,
      company: "SUSTAINABLE ENERGY",
      title: "Smart grid management system",
      description: "Created an IoT-based energy management platform that optimizes power distribution and reduces carbon footprint for smart cities.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center",
      category: "IoT & Sustainability"
    },
    {
      id: 6,
      company: "EDUCATION PLUS",
      title: "Interactive learning platform",
      description: "Designed and developed a comprehensive e-learning platform with gamification elements that increased student engagement by 300%.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&crop=center",
      category: "Education & Gaming"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building brands,<br />
            <span className="text-blue-600">one pixel at a time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Work that worked (but never felt like work).
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">
            EXPLORE ALL CASE STUDIES
          </button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {study.company}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">
                    {study.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {study.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span className="text-sm">View Case Study</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We combine creativity, technology, and expertise to deliver solutions that help your business stand out. Here's why clients trust us:
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">App Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Native and cross-platform mobile applications that deliver seamless functionality across all devices.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Creative UI/UX design and branding solutions that captivate audiences and drive engagement.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Video Editing</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional video production and editing services that tell your story with cinematic quality.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">VFX</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced visual effects and motion graphics that bring imagination to life with stunning realism.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Marketing</h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic digital marketing campaigns that amplify your brand reach and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's create something amazing together. One pixel at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              View Our Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesSection;