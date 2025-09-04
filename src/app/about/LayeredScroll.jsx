"use client";

import { useEffect, useRef, useState } from "react";

export default function LayeredScroll() {
  const [active, setActive] = useState(1);
  const sentinelsRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    sentinelsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // ✅ Store all panel data in one array
  const sections = [
    {
      id: 1,
      bg: "bg-[#d8e6dc]",
      title: "Creative collaboration without creative compromise",
      text: `Content is at the heart of everything we do. In the past, brand
        storytelling and media often worked independently. But in today’s
        content world, a fractured focus can’t keep up. With over 50 years of
        experience crafting brands, that’s why we revolutionized the agency
        model to meet the modern need for agile, dynamic content creation.`,
      video:
        "https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1",
    },
    {
      id: 2,
      bg: "bg-[#f5dcdc]",
      title: "Driving Growth Through Innovation",
      text: `We believe in pushing boundaries with fresh ideas and bold
        strategies. By blending creativity with analytics, we help brands
        grow sustainably and adapt quickly to ever-changing markets.`,
      video:
        "https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1",
    },
    {
      id: 3,
      bg: "bg-[#e6d8f0]",
      title: "Human-Centered Storytelling",
      text: `Great content resonates when it connects emotionally. We craft
        stories that prioritize human experiences while staying aligned with
        your brand’s voice and mission.`,
      video:
        "https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1",
    },
    {
      id: 4,
      bg: "bg-[#d8e6f5]",
      title: "Future-Ready Strategies",
      text: `From emerging tech to evolving media platforms, our strategies
        are designed to stay ahead of the curve. We future-proof your brand
        while staying authentic to its essence.`,
      video:
        "https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1",
    },
  ];

  return (
    <div className="relative">
      {/* Sticky layered panels */}
      <div className="sticky top-0 h-screen">
        {sections.map((section, i) => (
          <Panel
            key={section.id}
            visible={active >= section.id}
            z={`z-${10 * (i + 1)}`}
             className={`${section.bg} flex flex-col md:flex-row mx-10 mb-20 rounded-2xl`}
          >
           {/* <div className="  flex flex-col md:flex-row mx-10 pb-20 rounded-2xl"> */}

              {/* Text */}
             <div className="w-full md:w-1/2 rounded-2xl p-8">
                <h2 className="text-3xl font-serif mb-4 mt-10">
                  {section.title}
                </h2>
                <p>{section.text}</p>
              </div>

             

              <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl mt-10 mx-10 h-80">
                <iframe
                    src={section.video}
                    className="absolute top-0 left-0 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`video-${section.id}`}
                />
                </div>

            {/* </div> */}
          </Panel>
        ))}
      </div>

      {/* Sentinels for scroll trigger */}
      {sections.map((section) => (
        <section
          key={section.id}
          data-index={section.id}
          ref={(el) => (sentinelsRef.current[section.id] = el)}
          className="h-screen"
        />
      ))}
    </div>
  );
}

function Panel({ visible, z = "", className = "", children }) {
  return (
    <div
      className={[
        "absolute inset-0 rounded-2xl",
        "transform transition-transform duration-700 ease-in-out will-change-transform",
        visible ? "translate-y-0" : "translate-y-full",
        z,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
