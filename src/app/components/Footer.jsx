"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const footerElement = document.getElementById('footer-element');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer id="footer-element" className="bg-black text-gray-400 py-16 text-center relative overflow-hidden min-h-[550px] md:min-h-[650px]">
      <div className="w-full px-6 md:px-12 gap-11 relative z-20">

        {/* Top Section with Cards */}
        <div className="mb-12 md:mb-20 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
            
            {/* Learn More Card */}
            <div className="group cursor-pointer">
              <div className="bg-[#FFB6AD] text-black rounded-3xl p-6 sm:p-8 h-40 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100 shadow-lg">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Want to know more?</p>
                  <h3 className="text-xl sm:text-2xl font-light text-black">Keep learning how we can help.</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Chat Card */}
            <div className="group cursor-pointer">
              <div className="bg-[#D1DDE6] text-black rounded-3xl p-6 sm:p-8 h-40 flex flex-col justify-between transition-all duration-300 hover:bg-white shadow-lg">
                <div>
                  <p className="text-sm text-gray-700 mb-2">Ready to grow your brand?</p>
                  <h3 className="text-xl sm:text-2xl font-light text-black">Yes, let's chat!</h3>
                </div>
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 mx-auto text-left z-50">
          <div>
            <h4 className="text-white font-medium mb-4">Work</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/work-gallery" className="hover:text-white transition-colors duration-200">Work Gallery</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors duration-200">Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Culture</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/careers" className="hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link href="/internships" className="hover:text-white transition-colors duration-200">Internships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/brand" className="hover:text-white transition-colors duration-200">Web Development</Link></li>
              <li><Link href="/content" className="hover:text-white transition-colors duration-200">App Development</Link></li>
              <li><Link href="/social-media" className="hover:text-white transition-colors duration-200">Video Editing</Link></li>
              <li><Link href="/paid-media" className="hover:text-white transition-colors duration-200">Paid Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="mailto:hello@starpine.com" className="hover:text-white transition-colors duration-200">hello@starpine.com</a></li>
              <li><a href="tel:+919546264595" className="hover:text-white transition-colors duration-200">+91 9546264595</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 pt-8 relative">
        <p className="text-sm">&copy; {new Date().getFullYear()} StarPine. All rights reserved.</p>

     <div className="absolute bottom-0 left-0 right-0 h-[250px] sm:h-[300px] md:h-[350px] overflow-visible z-0">
  <div className="relative h-full group">
    <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>

    {/* StarPine watermark */}
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out
        ${isVisible ? 'bottom-[-20%] sm:bottom-[-15%] md:bottom-[-40%] group-hover:bottom-0' 
                     : 'bottom-[-40%] sm:bottom-[-30%] md:bottom-[-60%]'}
      `}
    >
      <p className="text-[clamp(60px,14vw,180px)] sm:text-[clamp(80px,16vw,280px)] md:text-[clamp(140px,22vw,380px)] 
                    font-bold text-white/5 tracking-wider leading-none whitespace-nowrap 
                    transition-all duration-1000 group-hover:text-white/20 group-hover:scale-105 
                    pointer-events-auto cursor-pointer select-none">
        starpine
      </p>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;
