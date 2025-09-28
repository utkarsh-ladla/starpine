"use client";

import { useEffect, useRef, useState } from "react";

export default function ModernLayeredScroll() {
  const [active, setActive] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sentinelsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = containerRef.current.scrollHeight - window.innerHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        setScrollProgress(progress);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    sentinelsRef.current.forEach((el) => el && io.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    {
      id: 1,
      bg: "from-indigo-50 via-white to-cyan-50",
      accent: "text-cyan-400",
      title: "Premium Website Development That Converts",
      subtitle: "Web Development",
      text: `We craft exceptional websites that not only look stunning but drive real business results. From responsive design to complex web applications, our development team combines cutting-edge technology with user-centered design to create digital experiences that captivate your audience and grow your business.`,
      video: "/video/about_website.mp4",
      icon: "🌐"
    },
    {
      id: 2,
      bg: "from-rose-50 via-white to-orange-50",
      accent: "text-emerald-400",
      title: "Mobile Apps That Users Love & Businesses Trust",
      subtitle: "App Development",
      text: `Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions that deliver seamless performance. Our apps are built with scalability in mind, ensuring they grow with your business while providing exceptional user experiences.`,
       video: "/video/about_website.mp4",
      icon: "📱"
    },
    {
      id: 3,
      bg: "from-purple-50 via-white to-pink-50",
      accent: "text-purple-400",
      title: "Professional Video Editing That Tells Your Story",
      subtitle: "Video Editing",
      text: `Bring your vision to life with our expert video editing services. From corporate videos to social media content, we craft compelling narratives that engage your audience. Our editors combine technical expertise with creative storytelling to produce videos that make an impact and drive engagement.`,
       video: "/video/about_website.mp4",
      icon: "🎬"
    },
    {
      id: 4,
      bg: "from-emerald-50 via-white to-teal-50",
      accent: "text-orange-400",
      title: "Stunning VFX & Motion Graphics That Wow",
      subtitle: "Visual Effects",
      text: `Elevate your content with professional visual effects and motion graphics. From cinematic VFX to animated logos, we create visual magic that captivates audiences. Our VFX artists use industry-leading tools to deliver Hollywood-quality effects that make your projects stand out from the competition.`,
       video: "/video/about_website.mp4",
      icon: "✨"
    },
  ];


  return (
    <div ref={containerRef} className="relative bg-gray-50">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const element = sentinelsRef.current[section.id];
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === section.id
                ? 'bg-gray-800 scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
              }`}
          />
        ))}
      </div>

      {/* Sticky layered panels */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {sections.map((section, i) => {
          const isActive = active >= section.id;
          const scale = active === section.id ? 1 : 0.95;
          const opacity = active === section.id ? 1 : 0.7;

          return (
            <Panel
              key={section.id}
              visible={isActive}
              z={10 + i}
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
                zIndex: 10 + i
              }}
              className={`bg-gradient-to-br ${section.bg} backdrop-blur-sm`}
            >
              <div className="relative h-full flex items-center">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{section.icon}</span>
                          <span className={`text-sm font-semibold ${section.accent} tracking-wider uppercase`}>
                            {section.subtitle}
                          </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                          {section.title}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        {section.text}
                      </p>

                      <div className="flex items-center space-x-4 pt-4">
                        <button className={`px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
                          Learn More
                        </button>
                        <button className={`px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-all duration-300 hover:scale-105`}>
                          Watch Demo
                        </button>
                      </div>
                    </div>

                    {/* Video */}
                    <div className="relative">
                      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                        <video
                          src={section.video}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`video-${section.id}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />

                        {/* Video overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                      </div>

                      {/* Floating elements */}
                      <div className={`absolute -top-6 -left-6 w-12 h-12 ${section.accent.replace('text-', 'bg-').replace('600', '500')} rounded-2xl flex items-center justify-center text-white font-bold shadow-lg`}>
                        {section.id}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>

      {/* Scroll trigger sentinels */}
      {sections.map((section) => (
        <section
          key={`sentinel-${section.id}`}
          data-index={section.id}
          ref={(el) => (sentinelsRef.current[section.id] = el)}
          className="h-screen flex items-center justify-center"
        >
          {/* Optional: Add content that shows while scrolling */}
          <div className="text-center text-gray-400">
            <div className="w-1 h-20 bg-gray-300 mx-auto mb-4 rounded-full" />
            <p className="text-sm">Scroll to section {section.id + 1}</p>
          </div>
        </section>
      ))}

      {/* Footer spacing */}
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-gray-300 mb-8">Let's create something amazing together.</p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

function Panel({ visible, z = 0, className = "", style = {}, children }) {
  return (
    <div
      className={[
        "absolute inset-0 transition-all duration-1000 ease-out will-change-transform",
        visible ? "translate-y-0" : "translate-y-full",
        className,
      ].join(" ")}
      style={{
        zIndex: z,
        ...style
      }}
    >
      {children}
    </div>
  );
}