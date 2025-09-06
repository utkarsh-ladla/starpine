// "use client";
// import { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   Smartphone,
//   AppWindow,
//   Cpu,
//   Cloud,
//   Shield,
//   Users,
//   Star,
//   Award,
//   Zap,
//   Rocket,
//   Globe,
//   CheckCircle,
// } from "lucide-react";

// function ModernButton({ children, className = "", ...props }) {
//   return (
//     <button
//       className={`px-8 py-4 bg-gradient-to-r from-gray-600 to-cyan-500 text-white font-semibold rounded-2xl hover:from-gray-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// function AnimatedCounter({ end, duration = 2000 }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration / 16);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);
//     return () => clearInterval(timer);
//   }, [end, duration]);
//   return <span>{count}</span>;
// }

// function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);
//   return (
//     <div
//       className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-gradient-to-b from-gray-600 to-cyan-500 ${
//         isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//       }`}
//     >
//       <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//         <Icon className="text-white" size={28} />
//       </div>
//       <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
//       <p className="text-slate-600 leading-relaxed">{description}</p>
//     </div>
//   );
// }

// function ProcessStep({ step, title, description, delay = 0 }) {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);
//   return (
//     <div
//       className={`text-center transition-all duration-700 ${
//         isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//       }`}
//     >
//       <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
//         <span className="text-3xl font-bold text-white">{step}</span>
//       </div>
//       <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
//       <p className="text-slate-600">{description}</p>
//     </div>
//   );
// }

// export default function Page() {
//   const services = [
//     {
//       icon: Smartphone,
//       title: "Premium iOS Development",
//       description:
//         "Stunning native iOS apps with Swift & SwiftUI. We craft experiences that feel at home on every Apple device, from iPhone to iPad, with pixel-perfect design and lightning-fast performance.",
//     },
//     {
//       icon: AppWindow,
//       title: "Android Excellence",
//       description:
//         "Powerful Android apps using Kotlin & modern architecture. We build for the diverse Android ecosystem with Material Design principles and optimal performance across all device types.",
//     },
//     {
//       icon: Cpu,
//       title: "Cross-Platform Mastery",
//       description:
//         "React Native & Flutter expertise that maximizes your reach. One codebase, multiple platforms - without compromising on native performance or user experience.",
//     },
//     {
//       icon: Cloud,
//       title: "Scalable Backend Solutions",
//       description:
//         "Enterprise-grade backend architecture with real-time capabilities. From microservices to serverless, we build infrastructure that grows with your success.",
//     },
//     {
//       icon: Shield,
//       title: "Advanced Security & Compliance",
//       description:
//         "Bank-level security implementation with end-to-end encryption, biometric authentication, and full compliance with GDPR, HIPAA, and industry standards.",
//     },
//     {
//       icon: Users,
//       title: "24/7 Premium Support",
//       description:
//         "White-glove support and maintenance services. Proactive monitoring, instant updates, and dedicated account management to ensure 99.9% uptime.",
//     },
//   ];

//   const processSteps = [
//     {
//       step: "1",
//       title: "Discovery & Strategy",
//       description:
//         "Deep-dive workshops to understand your vision, analyze market opportunities, and create a winning mobile strategy that drives results.",
//     },
//     {
//       step: "2",
//       title: "Design & Innovation",
//       description:
//         "Award-winning UI/UX design with user research, interactive prototypes, and cutting-edge design systems that captivate and convert.",
//     },
//     {
//       step: "3",
//       title: "Agile Development",
//       description:
//         "Sprint-based development with weekly demos, continuous integration, and rigorous testing to deliver flawless, scalable applications.",
//     },
//     {
//       step: "4",
//       title: "Launch & Growth",
//       description:
//         "App Store optimization, marketing support, analytics implementation, and ongoing feature development to maximize your app's success.",
//     },
//   ];

//   return (
//     <div className="bg-white text-slate-900 overflow-hidden mb-28">
//       <section className="relative bg-gradient-to-r from-gray-600 to-cyan-500 text-white h-[80vh] flex flex-col justify-center items-center text-center px-6">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
//             Next-Gen Mobile App Development
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
//             Transform your ideas into powerful mobile experiences that captivate
//             users and drive business growth. We build apps that don't just work
//             - they wow.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//             <ModernButton>Start Your Journey</ModernButton>
//             <ModernButton>View Our Portfolio</ModernButton>
//           </div>
//           <div className="flex items-center justify-center gap-6 text-white/90">
//             <div className="flex items-center gap-2">
//               <CheckCircle size={20} />
//               <span>99.9% Uptime</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Rocket size={20} />
//               <span>Fast Delivery</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Globe size={20} />
//               <span>Global Reach</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 px-6 max-w-6xl mx-auto text-center">
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-cyan-500 bg-clip-text text-transparent">
//             Why Top Brands Choose Us
//           </h2>
//           <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             We're not just developers - we're your strategic partners in mobile
//             innovation. Our award-winning team has launched 100+ successful apps
//             that have collectively generated millions in revenue.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           <div className="text-center group">
//             <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//               <Award className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-2">Award-Winning Expertise</h3>
//             <p className="text-slate-600">
//               Featured in TechCrunch, named "Top Mobile Development Agency" by
//               Industry Leaders
//             </p>
//           </div>
//           <div className="text-center group">
//             <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//               <Zap className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-2">
//               Lightning-Fast Performance
//             </h3>
//             <p className="text-slate-600">
//               Sub-second load times, 60fps animations, and apps that feel
//               incredibly responsive on any device
//             </p>
//           </div>
//           <div className="text-center group">
//             <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//               <Users className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-2">Full-Stack Partnership</h3>
//             <p className="text-slate-600">
//               From concept to post-launch growth strategy - we're your dedicated
//               mobile success team
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-cyan-500 bg-clip-text text-transparent">
//               Complete Mobile App Solutions
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               End-to-end mobile development services that transform your
//               business ideas into market-leading applications
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, i) => (
//               <ServiceCard
//                 key={i}
//                 icon={service.icon}
//                 title={service.title}
//                 description={service.description}
//                 delay={i * 100}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-cyan-500 bg-clip-text text-transparent">
//               Our Proven Development Process
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               A battle-tested methodology that has delivered success for
//               startups, Fortune 500 companies, and everything in between
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {processSteps.map((item, i) => (
//               <ProcessStep
//                 key={i}
//                 step={item.step}
//                 title={item.title}
//                 description={item.description}
//                 delay={i * 200}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-gray-600 to-cyan-500 bg-clip-text text-transparent">
//             Success Stories from Industry Leaders
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sarah Chen",
//                 company: "TechVenture Inc.",
//                 role: "CEO",
//                 text: "Their team didn't just build our app - they engineered our success. We hit 100k downloads in the first month and secured Series A funding.",
//               },
//               {
//                 name: "Marcus Rodriguez",
//                 company: "HealthTech Solutions",
//                 role: "CTO",
//                 text: "The most professional development experience we've ever had. They delivered a HIPAA-compliant app that our patients absolutely love.",
//               },
//               {
//                 name: "Emily Watson",
//                 company: "EduInnovate",
//                 role: "Founder",
//                 text: "From prototype to App Store featured app in just 3 months. Their expertise in education technology is unmatched in the industry.",
//               },
//             ].map((testimonial, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="flex justify-center mb-4">
//                   {[...Array(5)].map((_, j) => (
//                     <Star
//                       key={j}
//                       className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200"
//                       size={20}
//                       style={{ animationDelay: `${j * 100}ms` }}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="font-semibold text-slate-800 text-lg">
//                   {testimonial.name}
//                 </div>
//                 <div className="text-slate-500">
//                   {testimonial.role}, {testimonial.company}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-gray-600 to-cyan-500 text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-cyan-500 animate-pulse"></div>
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl font-bold mb-6">
//             Ready to Dominate the App Store?
//           </h2>
//           <p className="mb-8 text-xl leading-relaxed">
//             Join the ranks of successful app entrepreneurs. Your groundbreaking
//             mobile app is just one conversation away from becoming reality.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <ModernButton className="flex items-center gap-2 text-lg px-10 py-5">
//               Launch Your App Project
//               <ArrowRight size={24} />
//             </ModernButton>
//             <ModernButton>Free Strategy Call</ModernButton>
//           </div>
//           <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
//             <div className="group">
//               <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
//                 <AnimatedCounter end={150} />+
//               </div>
//               <div className="text-white/90 font-medium">Apps Launched</div>
//             </div>
//             <div className="group">
//               <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
//                 <AnimatedCounter end={50} />
//                 M+
//               </div>
//               <div className="text-white/90 font-medium">Total Downloads</div>
//             </div>
//             <div className="group">
//               <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
//                 <AnimatedCounter end={98} />%
//               </div>
//               <div className="text-white/90 font-medium">Client Retention</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <div className="mb-8">
//             <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-cyan-500 bg-clip-text text-transparent">
//               Your App Success Starts Here
//             </h3>
//             <p className="text-slate-400 mb-6 text-lg">
//               Get a free consultation and detailed project roadmap. No
//               commitment required - just insights that could change your
//               business.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
//                 <span className="text-2xl">✉️</span>
//                 <span className="font-medium">hello@nextgenapps.com</span>
//               </div>
//               <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300">
//                 <span className="text-2xl">📱</span>
//                 <span className="font-medium">+1 (555) APP-DEVS</span>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-slate-700 pt-8">
//             <p className="text-slate-400">
//               © 2024 Next-Gen Mobile Solutions. Turning visions into viral apps.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }










"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Smartphone,
  AppWindow,
  Cpu,
  Cloud,
  Shield,
  Users,
  Star,
  Award,
  Zap,
  Rocket,
  Globe,
  CheckCircle,
} from "lucide-react";

function ModernButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold rounded-2xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
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
      className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-gradient-to-b from-gray-500 to-gray-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <span className="text-3xl font-bold text-white">{step}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default function Page() {
  const services = [
    { icon: Smartphone, title: "Premium iOS Development", description: "Stunning native iOS apps with Swift & SwiftUI. We craft experiences that feel at home on every Apple device, from iPhone to iPad, with pixel-perfect design and lightning-fast performance." },
    { icon: AppWindow, title: "Android Excellence", description: "Powerful Android apps using Kotlin & modern architecture. We build for the diverse Android ecosystem with Material Design principles and optimal performance across all device types." },
    { icon: Cpu, title: "Cross-Platform Mastery", description: "React Native & Flutter expertise that maximizes your reach. One codebase, multiple platforms - without compromising on native performance or user experience." },
    { icon: Cloud, title: "Scalable Backend Solutions", description: "Enterprise-grade backend architecture with real-time capabilities. From microservices to serverless, we build infrastructure that grows with your success." },
    { icon: Shield, title: "Advanced Security & Compliance", description: "Bank-level security implementation with end-to-end encryption, biometric authentication, and full compliance with GDPR, HIPAA, and industry standards." },
    { icon: Users, title: "24/7 Premium Support", description: "White-glove support and maintenance services. Proactive monitoring, instant updates, and dedicated account management to ensure 99.9% uptime." }
  ];

  const processSteps = [
    { step: "1", title: "Discovery & Strategy", description: "Deep-dive workshops to understand your vision, analyze market opportunities, and create a winning mobile strategy that drives results." },
    { step: "2", title: "Design & Innovation", description: "Award-winning UI/UX design with user research, interactive prototypes, and cutting-edge design systems that captivate and convert." },
    { step: "3", title: "Agile Development", description: "Sprint-based development with weekly demos, continuous integration, and rigorous testing to deliver flawless, scalable applications." },
    { step: "4", title: "Launch & Growth", description: "App Store optimization, marketing support, analytics implementation, and ongoing feature development to maximize your app's success." }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden mb-28">
      <section className="relative bg-gradient-to-r from-gray-500 to-gray-700 text-white h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            Next-Gen Mobile App Development
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Transform your ideas into powerful mobile experiences that captivate
            users and drive business growth. We build apps that don't just work
            - they wow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ModernButton>Start Your Journey</ModernButton>
            <ModernButton>View Our Portfolio</ModernButton>
          </div>
          <div className="flex items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2"><CheckCircle size={20} /><span>99.9% Uptime</span></div>
            <div className="flex items-center gap-2"><Rocket size={20} /><span>Fast Delivery</span></div>
            <div className="flex items-center gap-2"><Globe size={20} /><span>Global Reach</span></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
            Why Top Brands Choose Us
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're not just developers - we're your strategic partners in mobile innovation. Our award-winning team has launched 100+ successful apps that have collectively generated millions in revenue.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[Award, Zap, Users].map((Icon, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {i === 0 ? "Award-Winning Expertise" : i === 1 ? "Lightning-Fast Performance" : "Full-Stack Partnership"}
              </h3>
              <p className="text-slate-600">
                {i === 0
                  ? "Featured in TechCrunch, named 'Top Mobile Development Agency' by Industry Leaders"
                  : i === 1
                  ? "Sub-second load times, 60fps animations, and apps that feel incredibly responsive on any device"
                  : "From concept to post-launch growth strategy - we're your dedicated mobile success team"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Complete Mobile App Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end mobile development services that transform your business ideas into market-leading applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} icon={service.icon} title={service.title} description={service.description} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Our Proven Development Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A battle-tested methodology that has delivered success for startups, Fortune 500 companies, and everything in between
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <ProcessStep key={i} step={item.step} title={item.title} description={item.description} delay={i * 200} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
            Success Stories from Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Sarah Chen", "Marcus Rodriguez", "Emily Watson"].map((name, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200" size={20} />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  {i === 0
                    ? '"Their team didn\'t just build our app - they engineered our success. We hit 100k downloads in the first month and secured Series A funding."'
                    : i === 1
                    ? '"The most professional development experience we\'ve ever had. They delivered a HIPAA-compliant app that our patients absolutely love."'
                    : '"From prototype to App Store featured app in just 3 months. Their expertise in education technology is unmatched in the industry."'}
                </p>
                <div className="font-semibold text-slate-800 text-lg">{name}</div>
                <div className="text-slate-500">
                  {i === 0 ? "CEO, TechVenture Inc." : i === 1 ? "CTO, HealthTech Solutions" : "Founder, EduInnovate"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-gray-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 animate-pulse"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Dominate the App Store?
          </h2>
          <p className="mb-8 text-xl leading-relaxed">
            Join the ranks of successful app entrepreneurs. Your groundbreaking mobile app is just one conversation away from becoming reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ModernButton className="flex items-center gap-2 text-lg px-10 py-5">
              Launch Your App Project <ArrowRight size={24} />
            </ModernButton>
            <ModernButton>Free Strategy Call</ModernButton>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group"><div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"><AnimatedCounter end={150} />+</div><div className="text-white/90 font-medium">Apps Launched</div></div>
            <div className="group"><div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"><AnimatedCounter end={50} />M+</div><div className="text-white/90 font-medium">Total Downloads</div></div>
            <div className="group"><div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"><AnimatedCounter end={98} />%</div><div className="text-white/90 font-medium">Client Retention</div></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Your App Success Starts Here
            </h3>
            <p className="text-slate-400 mb-6 text-lg">
              Get a free consultation and detailed project roadmap. No commitment required - just insights that could change your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"><span className="text-2xl">✉️</span><span className="font-medium">hello@nextgenapps.com</span></div>
              <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"><span className="text-2xl">📱</span><span className="font-medium">+1 (555) APP-DEVS</span></div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">© 2024 Next-Gen Mobile Solutions. Turning visions into viral apps.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

