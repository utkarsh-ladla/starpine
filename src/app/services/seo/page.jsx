"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Search,
  Globe,
  LineChart,
  Shield,
  Users,
  Zap,
  Award,
  BarChart,
  Rocket,
  CheckCircle,
  Star,
} from "lucide-react";

function ModernButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-8 py-4 bg-gradient-to-r from-gray-600 to-yellow-700 text-white font-semibold rounded-2xl hover:from-gray-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
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
    <div
      className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-gradient-to-b from-gray-600 to-yellow-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-yellow-700 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-yellow-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <span className="text-3xl font-bold text-white">{step}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default function Page() {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description:
        "We uncover high-value, low-competition keywords tailored to your business. Our data-driven keyword strategy ensures your site ranks higher and attracts qualified traffic.",
    },
    {
      icon: Globe,
      title: "On-Page SEO Optimization",
      description:
        "Boost visibility with perfectly optimized meta tags, headings, internal links, and schema markup. We ensure every page is fully optimized for search engines and users.",
    },
    {
      icon: LineChart,
      title: "Technical SEO Services",
      description:
        "Fix crawl errors, improve Core Web Vitals, and optimize site architecture. We make your website search engine-friendly with fast loading and mobile-first performance.",
    },
    {
      icon: Shield,
      title: "SEO Audit & Compliance",
      description:
        "Get a full SEO health check. We identify ranking issues, competitor gaps, and compliance risks — then implement fixes that align with Google’s best practices.",
    },
    {
      icon: Users,
      title: "Local SEO & Maps Ranking",
      description:
        "Dominate local search with optimized Google Business Profiles, local citations, and geo-targeted strategies that drive nearby customers directly to your business.",
    },
    {
      icon: BarChart,
      title: "Analytics & SEO Reporting",
      description:
        "We track rankings, conversions, and organic growth with detailed reports. Transparent insights help you measure ROI and continuously improve your SEO strategy.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "SEO Audit",
      description:
        "We start with a full SEO audit to identify opportunities, strengths, and areas for improvement in your site’s performance.",
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description:
        "Our experts design a custom SEO roadmap with clear goals, tailored keyword strategies, and actionable ranking milestones.",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "From content optimization to technical fixes, we execute proven SEO strategies designed for long-term, sustainable growth.",
    },
    {
      step: "4",
      title: "Monitoring & Growth",
      description:
        "We continuously track results, refine strategies, and scale your SEO campaigns to maximize rankings and ROI.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden mb-28">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-gray-600 to-yellow-700 text-white h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            SEO Services That Drive Results
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Improve your search rankings, increase organic traffic, and generate
            consistent leads with our proven SEO strategies tailored for your
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ModernButton>Get Free SEO Audit</ModernButton>
            <ModernButton>See Case Studies</ModernButton>
          </div>
          <div className="flex items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>White-Hat SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket size={20} />
              <span>Faster Ranking</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} />
              <span>Global & Local Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-yellow-700 bg-clip-text text-transparent">
            Why Businesses Choose Our SEO Services
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our SEO strategies are built for growth, sustainability, and ROI.
            Trusted by global brands and startups, we focus on long-term
            visibility and measurable success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Award-Winning SEO Experts</h3>
            <p className="text-slate-600">
              Recognized as a top SEO agency by industry leaders and trusted by
              global brands.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Faster Ranking Growth</h3>
            <p className="text-slate-600">
              Proven strategies that bring noticeable improvements within weeks,
              not months.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Dedicated SEO Partner</h3>
            <p className="text-slate-600">
              From audits to reporting, we act as your SEO team driving growth
              at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-yellow-700 bg-clip-text text-transparent">
              Our Complete SEO Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From technical fixes to content strategies, our SEO services cover
              everything needed to improve rankings and maximize ROI.
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-yellow-700 bg-clip-text text-transparent">
              Our SEO Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured approach designed to deliver consistent results,
              transparency, and growth for every business.
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
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-gray-600 to-yellow-700 bg-clip-text text-transparent">
            SEO Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "David Kim",
                company: "EcomX",
                role: "Founder",
                text: "Within 6 months, our organic traffic doubled and we ranked top 3 for 20+ high-value keywords. Their SEO team is the real deal.",
              },
              {
                name: "Laura Smith",
                company: "MedicarePro",
                role: "Marketing Head",
                text: "Their SEO audit uncovered critical issues we didn’t even know existed. Fixing them boosted our visibility and conversions instantly.",
              },
              {
                name: "James Rodriguez",
                company: "TravelGo",
                role: "CEO",
                text: "From local SEO to global reach, their strategy helped us scale worldwide. Our site traffic is now 5x higher.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-slate-800 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-yellow-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-yellow-700 animate-pulse"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Rank Higher on Google?
          </h2>
          <p className="mb-8 text-xl leading-relaxed">
            Let’s optimize your website, increase your organic reach, and grow
            your business with proven SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ModernButton className="flex items-center gap-2 text-lg px-10 py-5">
              Start Your SEO Campaign <ArrowRight size={24} />
            </ModernButton>
            <ModernButton>Book Free SEO Consultation</ModernButton>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={500} />+
              </div>
              <div className="text-white/90 font-medium">Keywords Ranked</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={200} />%
              </div>
              <div className="text-white/90 font-medium">Avg. Traffic Growth</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={95} />%
              </div>
              <div className="text-white/90 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6">
              Contact us today for a free consultation and project quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-slate-300">📧 hello@webdev.com</div>
              <div className="text-slate-300">📞 +1 (555) 123-4567</div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2024 Web Development Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


