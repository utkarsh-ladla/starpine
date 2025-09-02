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
    <footer id="footer-element" className="bg-black min-h-[750px] text-gray-400 py-16 text-center relative overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full px-6 gap-11 relative z-20">
        
        {/* Top Section with Cards - Improved spacing */}
        <div className="mb-20 pt-8">
          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            
            {/* Learn More Card */}
            <div className="group cursor-pointer">
              <div className="bg-[#FFB6AD] text-black rounded-3xl p-8 h-40 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100 shadow-lg">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Want to know more?</p>
                  <h3 className="text-2xl font-light text-black">Keep learning how we can help.</h3>
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
              <div className="bg-[#D1DDE6] text-black rounded-3xl p-8 h-40 flex flex-col justify-between transition-all duration-300 hover:bg-white shadow-lg">
                <div>
                  <p className="text-sm text-gray-700 mb-2">Ready to grow your brand?</p>
                  <h3 className="text-2xl font-light text-black">Yes, let's chat!</h3>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 mx-auto text-left">
          
          {/* Work Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Work</h4>
            <ul className="space-y-3">
              <li><Link href="/work-gallery" className="hover:text-white transition-colors duration-200">Work Gallery</Link></li>
              <li><Link href="/studio" className="hover:text-white transition-colors duration-200">Studio</Link></li>
              <li><Link href="/holiday-card" className="hover:text-white transition-colors duration-200">Holiday Card</Link></li>
              <li><Link href="/legacy" className="hover:text-white transition-colors duration-200">Leigh's Legacy</Link></li>
            </ul>
          </div>

          {/* Culture Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Culture</h4>
            <ul className="space-y-3">
              <li><Link href="/careers" className="hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link href="/internships" className="hover:text-white transition-colors duration-200">Internships</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/brand" className="hover:text-white transition-colors duration-200">Brand</Link></li>
              <li><Link href="/content" className="hover:text-white transition-colors duration-200">Content</Link></li>
              <li><Link href="/social-media" className="hover:text-white transition-colors duration-200">Social Media</Link></li>
              <li><Link href="/paid-media" className="hover:text-white transition-colors duration-200">Paid Media</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@starpine.com" className="hover:text-white transition-colors duration-200">hello@starpine.com</a></li>
              <li><a href="tel:817.332.4600" className="hover:text-white transition-colors duration-200">817.332.4600</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-sm hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="/privacy" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/cookies" className="text-sm hover:text-white transition-colors duration-200">Cookie Policy</Link>
              <button className="text-sm hover:text-white transition-colors duration-200">Cookie Preferences</button>
            </div>

            {/* Copyright */}
            <p className="text-sm">© {new Date().getFullYear()} StarPine. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Large StarPine Text with Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] overflow-hidden">
        <div className="relative h-full group">
          {/* Gradient overlay for smooth transition */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
          
          {/* StarPine text - positioned to show top half initially, animates on scroll and hover */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'bottom-[-40%] group-hover:bottom-0' : 'bottom-[-60%]'
          }`}>
            <p className="text-[clamp(140px,22vw,380px)] font-bold text-white/5 tracking-wider leading-none whitespace-nowrap transition-all duration-1000 group-hover:text-white/20 group-hover:scale-105 pointer-events-auto cursor-pointer select-none">
              starpine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;