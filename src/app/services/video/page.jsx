"use client";

import { Container } from "lucide-react";
import Videos from "./video";

function Page() {
  return (
    <>
      <div className="bg-white text-slate-900 overflow-hidden mx-8 my-12">
        <section className="flex justify-between items-start gap-12">
          <div className="w-1/2">
            <h1 className="text-5xl">
              <i>Our Studio </i>
            </h1>
          </div>
          <div className="w-1/2">
            <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
              Agency Habitat is uniquely designed to keep up with content.
              That’s why we built a full-service production studio on-site. Our
              studio has 10 unique sets, from pre-decorated to blank canvas
              spaces, allowing them to cater to any brand’s video and photo
              needs. This in-house solution saves clients money by eliminating
              studio and equipment rentals. Less out-of-pocket means more
              content for the budget.
            </p>
          </div>
        </section>
        <section>
          <img
            src="https://cdn.mos.cms.futurecdn.net/AbELDaanXrrbXZ9dgwwUTF.jpg"
            alt=""
            className="rounded-2xl my-8"
          />
        </section>

        <section className="flex justify-between items-start gap-8 my-12">
          <div className="w-1/2 mx-20 m-auto">
            <h1 className="text-4xl my-4">
              <i>Make it happen in our content creation studio sets</i>
            </h1>
            <p className="text-lg md:text-xl  mb-6 leading-relaxed">
              Our versatile studio sets allow us to prioritize creating
              high-quality content to promote your brand and drive meaningful
              engagement. Whatever your content needs are, we have the expertise
              and resources to deliver impactful content tailored to you and
              your audience.
            </p>
          </div>
          {/* <div>
            <iframe
              src="https://player.vimeo.com/progressive_redirect/playback/878995448/rendition/720p/file.mp4?loc=external&log_user=0&signature=4412cfe69f2b385c06e54520a29e81ca4f2679c55e73fe34207ca21b7133a81c"
              className=" w-[130%] h-[130%] -translate-x-[10%] -translate-y-[10%] border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}

          <div className="w-1/2  relative overflow-hidden rounded-2xl aspect-[10/12]">
            

           
            <video
              src="https://cdn.shopify.com/videos/c/o/v/0c67981286f34218bfe7ade0e0bf618c.mp4"
              className="w-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
        
          </div>
        </section>

        <Videos />
        <hr className="mt-8" />
        <section className="flex justify-between items-start gap-8 mt-8 ">
          <div className="w-1/2">
            <p>Content Creation</p>
            <p className="text-2xl">Behind the Scenes</p>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl my-4">
              <i>From a simple backdrop to a full production.</i>
            </h1>
          </div>
        </section>

        <section>
          <img src="https://wallpapers.com/images/hd/bedroom-background-e0f1nvtobadsyxgp.jpg" alt="" className="rounded-2xl mt-12 w-full" />
        </section>
      </div>
    </>
  );
}

export default Page;
