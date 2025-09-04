"use client";

import { Container } from "lucide-react";

function Page() {
  return (
    <>
      <div className="bg-white text-slate-900 overflow-hidden mx-8 my-12">
        <section className="flex justify-between items-start gap-12">
          <div>
            <h1 className="text-4xl">Our Studio</h1>
          </div>
          <div>
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
          <div className="mx-20 mt-20">
            <h1 className="text-4xl my-4">
              Make it happen in our content creation studio sets
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
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

          <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl h-105">
            <iframe
              src="https://player.vimeo.com/progressive_redirect/playback/878995448/rendition/720p/file.mp4?loc=external&log_user=0&signature=4412cfe69f2b385c06e54520a29e81ca4f2679c55e73fe34207ca21b7133a81c"
              className="absolute top-0 left-0 w-[100%] h-[180%] translate-x[40%] -translate-y[10%] border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
             
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
