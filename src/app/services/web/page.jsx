
"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  Shield,
  Users,
  CheckCircle,
  Database,
  Smartphone,
  ShoppingCart,
  Settings,
  Star,
  Award
} from "lucide-react";
import { Button } from "@/app/components/ui/buttons";

function ModernButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-8 py-4 bg-gradient-to-r from-gray-600 to-teal-600 text-teal-100 font-semibold rounded-2xl hover:from-gray-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function AnimatedCounter({ end, duration = 2000 }) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    // our services
    <div
      className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    // our process
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <span className="text-3xl font-bold text-white">{step}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function Page() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive, and accessible UI with React, Next.js, and Tailwind CSS. We create beautiful interfaces that work flawlessly across all devices."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable APIs & secure server-side solutions with Node.js, Express, and robust databases. Built for performance and security."
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment. Complete web applications that handle everything your business needs."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description: "Custom online stores with Shopify, WooCommerce, or fully custom solutions. Optimized for conversions and user experience."
    },
    {
      icon: Settings,
      title: "CMS & Custom Websites",
      description: "Powerful content management with WordPress, Strapi, or headless CMS solutions. Easy to manage, built to scale."
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and security for your website. We keep your site running smoothly and securely 24/7."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "We dive deep to understand your goals, vision, and target audience to create the perfect strategy."
    },
    {
      step: "2",
      title: "Design",
      description: "Detailed wireframes & stunning UI/UX prototypes that bring your vision to life with modern design principles."
    },
    {
      step: "3",
      title: "Development",
      description: "Expert frontend & backend coding using the latest technologies and best practices for optimal performance."
    },
    {
      step: "4",
      title: "Launch",
      description: "Thorough testing, seamless deployment, and ongoing support to ensure your success from day one."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 overflow-hidden">
      {/* HERO SECTION */}
     
      
  <section className="relative bg-gradient-to-r from-gray-600 to-teal-500 text-teal-100 h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          We craft high-performing, scalable, and beautiful websites tailored to
          your business goals.
        </p>
        <Button size="lg" className="rounded-xl bg-white text-gray-600 font-semibold">
          Get Started
        </Button>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-teal-600 bg-clip-text text-transparent">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From innovative startups to established enterprises, we help brands build seamless digital experiences. Our team of full-stack developers, UI/UX designers, and cloud experts ensure your website is modern, lightning-fast, and future-proof.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-slate-600">Certified developers with 5+ years experience</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-slate-600">Optimized for speed and performance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-slate-600">Always here when you need us</p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-teal-600 bg-clip-text text-transparent">
              Our Web Development Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-teal-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <ProcessStep
                key={i}
                step={item.step}
                title={item.title}
                description={item.description}
                delay={i * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-gray-700 to-teal-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                text: "Exceptional work! Our website traffic increased by 300% after the redesign. The team was professional and delivered beyond expectations."
              },
              {
                name: "Michael Chen",
                company: "E-Commerce Plus",
                text: "The custom e-commerce solution they built transformed our business. Sales are up 250% and the user experience is incredible."
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Agency",
                text: "Fast, reliable, and innovative. They understood our vision perfectly and delivered a website that truly represents our brand."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div className="text-slate-500 text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-600 via-teal-600 to-teal-100 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="mb-8 text-xl leading-relaxed">
            Let's turn your vision into a powerful digital presence that drives results and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton className="bg-white text-gray-700 hover:bg-gray-100 flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </ModernButton>
            
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-gray-700 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={24} />h
              </div>
              <div className="text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={14} />+
              </div>
              <div className="text-white/80">Days Average Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={100} />%
              </div>
              <div className="text-white/80">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6">Contact us today for a free consultation and project quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-slate-300">📧 hello@webdev.com</div>
              <div className="text-slate-300">📞 +1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">© 2024 Web Development Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;



