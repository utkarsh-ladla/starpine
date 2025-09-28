'use client'
import Link from "next/link"
import { Button } from "./ui/buttons"
import CaseStudiesSection from "./CaseStudiesSection";

// import homeVideo from '../public/home-vdo.mp4';

export default function HomePage() {
  // Drag to scroll functionality
  const handleMouseDown = (e) => {
    const slider = e.currentTarget;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.isDown = false;
  };

  const handleMouseUp = (e) => {
    e.currentTarget.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = e.currentTarget;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5; // Scroll speed
    slider.scrollLeft = slider.scrollLeft - walk;
    slider.startX = x; // Update start position for smoother scrolling
  };

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable and responsive websites tailored to your business needs",
    bgColor: "bg-white", // Clean white background
    textColor: "text-gray-900", // Dark text for contrast
    accentColor: "bg-blue-50", // Soft blue accent
    borderColor: "border-blue-100",
    services: [
      "Custom Website Development",
      "E-commerce Development",
      "CMS Development (WordPress, Joomla, etc.)",
      "Landing Page Design",
      "Website Maintenance & Support"
    ]
  },
  {
    title: "App Development",
    description: "High-performance mobile and web applications with seamless user experience",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    services: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform App Development (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "App Maintenance & Support"
    ]
  },
  {
    title: "Content Programs",
    description: "Channel-specific content at scale",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "bg-purple-50",
    borderColor: "border-purple-100",
    services: [
      "Branded Content Library",
      "Motion Design & 3D Content",
      "Custom Content Program"
    ]
  },
  {
    title: "Social Media Programs",
    description: "Increase reach and improve engagement",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "bg-pink-50",
    borderColor: "border-pink-100",
    services: [
      "Platform-Specific Content",
      "Paid Campaign Content",
      "Social Media Management",
      "Influencer Programs",
      "Custom Social Media Program"
    ]
  },
  {
    title: "Paid Media",
    description: "Drive conversion with the right audience",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "bg-amber-50",
    borderColor: "border-amber-100",
    services: [
      "Basic Media",
      "Intermediate Paid Media",
      "Advanced Paid Media",
      "Custom Paid Media Program"
    ]
  },
  {
    title: "Brand Programs",
    description: "Aligning values, brand and identity",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    accentColor: "bg-rose-50",
    borderColor: "border-rose-100",
    services: [
      "Brand New",
      "Brand Refresh",
      "Brand Extension",
      "Website Creation",
      "Custom Brand Program"
    ]
  }
];

  const features = [
    {
      title: "⚡ Fast & Reliable",
      desc: "We respect your time and deliver high-quality projects within agreed timelines.",
    },
    {
      title: "🎯 Results-Oriented",
      desc: "Every solution we build is designed to increase growth and customer engagement.",
    },
    {
      title: "🔒 Secure & Scalable",
      desc: "Future-proof technology that grows with your business and keeps data safe.",
    },
    {
      title: "🤝 Transparent",
      desc: "No jargon, no hidden costs — just clear communication and fair pricing.",
    },
    {
      title: "💡 Innovative",
      desc: "We use modern tools and creative approaches to keep you ahead of the curve.",
    },
  ]

const ServiceCard = ({ title, description, bgColor, textColor, accentColor, borderColor, services }) => {
  return (
    <div
      className={` ${bgColor} ${textColor} ${borderColor} rounded-3xl p-8 min-h-[480px] min-w-[380px] flex flex-col justify-between border shadow-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Header with accent color */}
      <div className="flex-1">
        <div className={`${accentColor} w-12 h-12 rounded-2xl mb-6 flex items-center justify-center`}>
          <div className="w-6 h-6 bg-current opacity-20 rounded-lg"></div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 leading-tight">{title}</h3>
        <p className="mb-8 text-sm text-gray-600 leading-relaxed">{description}</p>

        <div className="space-y-3">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
            </div>
          ))}
          {services.length > 4 && (
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-500 text-sm">+{services.length - 4} more services</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-6">
        <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 px-6 py-4 rounded-2xl text-sm font-medium transition-colors border border-gray-100 hover:border-gray-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

  return (
    <main className="p-16 min-h-screen text-gray-800 ">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Websites & Apps That <span className="text-gray-600">Fuel Growth</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          We help startups and businesses bring ideas to life with high-performing websites,
          mobile apps, and digital solutions that deliver results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-gray-900 hover:bg-gray-600 text-white px-6 py-3 text-lg">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-3 text-lg">
            <Link href="/services/web">See Our Work</Link>
          </Button>
        </div>
      </section>

      <div className="bg-white flex w-full h-[800px] justify-center items-center">
        <video
           src="/video/home_vdo.mp4"
          // src="https://v.ftcdn.net/00/48/31/12/700_F_48311251_QBFZ12uyt4op5MORsYTYiTxn6AXu1ZhI_ST.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[800px] object-cover rounded-4xl mx-4"
          aria-hidden="true"  
        />
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="w-full mx-auto px-6">
          <h2 className="text-xl font-bold mb-8 text-gray-900 uppercase tracking-wide">OUR SERVICES</h2>
          <div 
            className="flex flex-row gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab select-none active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                bgColor={service.bgColor}
                textColor={service.textColor}
                accentColor={service.accentColor}
                borderColor={service.borderColor}
                services={service.services} 
              />  
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     <CaseStudiesSection/>
      {/* Call To Action */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
        <p className="text-lg text-gray-300 mb-8">
          Whether it's a website, mobile app, or custom solution — we're here to make it happen.
        </p>
        <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 text-lg">
          <Link href="/contact">Request a Proposal</Link>
        </Button>
      </section>  

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}