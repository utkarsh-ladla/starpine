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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Case Studies Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r text-gray-600 bg-clip-text ">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                    {study.category}
                  </span>
                </div>

                {/* Company Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/90 text-sm font-bold tracking-wider">
                    {study.company}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {study.description}
                </p>

                {/* View Case Study Link */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  <span className="text-sm">View Case Study</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
    </div>
  );
};

export default CaseStudiesSection;