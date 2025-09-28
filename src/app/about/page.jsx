import React from "react";
import LayeredScroll from "./LayeredScroll";

function Page() {
  return (
    <>
      {/* upper section */}
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12 lg:px-20 py-12 items-center">
        {/* Video Section */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-video w-full">
            <video
              src="/video/about_1.mp4"
              className="w-full h-full rounded-2xl border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-[#f3f7f4] rounded-2xl p-8 md:p-10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug text-gray-800">
            Creative collaboration without creative compromise
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Content is at the heart of everything we do. In the past, brand
            storytelling and media often worked independently. But in today’s
            content world, a fractured focus can’t keep up. With over 50 years of
            experience crafting brands, that’s why we revolutionized the agency
            model to meet the modern need for agile, dynamic content creation. We
            don’t just understand your brand’s needs, we understand the production
            realities of bringing that vision to life across multiple channels —
            on brand and on strategy.
          </p>
        </div>
      </div>

      {/* Layered Scroll */}
      <LayeredScroll />
    </>
  );
}

export default Page;
