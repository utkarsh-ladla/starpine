import React from 'react'
import LayeredScroll from './LayeredScroll'

function Page() {
  return (
<>
    {/* upper section */}
  <div className="flex flex-col md:flex-row gap-6 px-10 pb-20">

  <div className="w-full md:w-1/2  overflow-hidden rounded-2xl">
  <iframe
    src="https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1"
    className=" w-[130%] h-[130%] -translate-x-[10%] -translate-y-[10%] border-0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

  <div className="w-full md:w-1/2 bg-[#d8e6dc] rounded-2xl p-8  pb-10">
    <h2 className="text-3xl font-serif mb-4 mt-10">
      Creative collaboration without creative compromise
    </h2>
    <p className="">
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


  {/* <div className="  bg-[#d8e6dc] flex flex-col md:flex-row mx-10 pb-20 rounded-2xl">

  <div className="w-full md:w-1/2 rounded-2xl p-8  pb-10">
    <h2 className="text-3xl font-serif mb-4 mt-10">
      Creative collaboration without creative compromise
    </h2>
    <p className="">
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


    <div className="w-full md:w-1/2  overflow-hidden rounded-2xl mt-10 mx-10 ">
  <iframe
    src="https://player.vimeo.com/video/969148663?autoplay=1&loop=1&muted=1&background=1&playsinline=1"
    className=" w-[130%] h-[130%] -translate-x-[10%] -translate-y-[10%] border-0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
</div> */}


<LayeredScroll/>

</>

  )
}

export default Page