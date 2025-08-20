// app/page.tsx

import Link from "next/link"
import { Button } from "./ui/buttons"


export default function HomePage() {
  const services = [
    {
      title: "Web Development",
      description:
        "We design and develop sleek, responsive websites that not only look stunning but also convert visitors into customers.",
      href: "/services/web",
    },
    {
      title: "Mobile Apps",
      description:
        "From iOS to Android, we craft powerful, user-friendly mobile applications that keep your audience engaged on the go.",
      href: "/services/mobile",
    },
    {
      title: "SEO & Growth",
      description:
        "Boost your online presence with SEO-optimized solutions that rank higher, load faster, and attract the right audience.",
      href: "/services/seo",
    },
  ]


  const features=[
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
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
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

<section className="relative bg-gray-50 ">
  <div className="max-w-full mx-4">
    <div className="overflow-hidden rounded-xl shadow-xl">
      <video
        src="https://v.ftcdn.net/00/48/31/12/700_F_48311251_QBFZ12uyt4op5MORsYTYiTxn6AXu1ZhI_ST.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full  object-cover"
        aria-hidden="true"
      />
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">What We Do Best</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white shadow rounded-2xl hover:shadow-xl transition flex flex-col items-start text-left"
              >
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
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
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Amazing</h2>
        <p className="text-lg text-gray-300 mb-8">
          Whether it’s a website, mobile app, or custom solution — we’re here to make it happen.
        </p>
        <Button asChild className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 text-lg">
          <Link href="/contact">Request a Proposal</Link>
        </Button>
      </section>

     
     
    </main>
  )
}
