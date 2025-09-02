'use client'
import Link from "next/link"
import { Button } from "./ui/buttons"


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
    bgColor: "bg-neutral-900 text-white", // dark card with white text
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
    bgColor: "bg-gray-800 text-white", // slightly lighter black tone
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
    bgColor: "bg-gray-700 text-white",
    services: [
      "Branded Content Library",
      "Motion Design & 3D Content",
      "Custom Content Program"
    ]
  },
  {
    title: "Social Media Programs",
    description: "Increase reach and improve engagement",
    bgColor: "bg-neutral-800 text-white",
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
    bgColor: "bg-gray-900 text-white",
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
    bgColor: "bg-neutral-700 text-white",
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

const ServiceCard = ({ title, description, bgColor, textColor, services }) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-2xl p-8 h-[440px] min-w-[520px] flex flex-col justify-between border border-gray-200 shadow-sm`}
    >
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-8 text-sm opacity-80">{description}</p>

        <div className="mb-8">
          <h4 className="text-xs font-bold mb-4 uppercase tracking-wider opacity-70">
            Services
          </h4>
          <div className="space-y-2">
            {services.map((service, index) => (
              <div key={index} className="text-sm font-medium opacity-90">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors self-start">
        View Programs
      </button>
    </div>
  );
};



  return (
    <>
      <style jsx>{`
        .services-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          cursor: grab;
          user-select: none;
        }
        .services-container::-webkit-scrollbar { 
          display: none;
        }
        .services-container:active {
          cursor: grabbing;
        }
        .services-container.dragging {
          cursor: grabbing !important;
        }
      `}</style>
      <main className="min-h-screen  text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b ">
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

      <div className="bg-transparent flex w-full h-[800px] justify-center items-center border">
        <video
          src="https://v.ftcdn.net/00/48/31/12/700_F_48311251_QBFZ12uyt4op5MORsYTYiTxn6AXu1ZhI_ST.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[800px] object-cover rounded-4xl mx-4 "
          aria-hidden="true"
        />
      </div>



 {/* Services Section */}
      <section id="services" className="py-20 bg-transparent">
        <div className="w-full mx-auto px-6">
          <h2 className="text-xl font-bold mb-8 text-gray-900 uppercase tracking-wide">OUR SERVICES</h2>
          <div 
            className="flex flex-row gap-6 overflow-x-auto services-container"
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
                services={service.services} 
              />
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Why Choose Us</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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



          </main>
    </>
  )
}