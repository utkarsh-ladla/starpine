"use client";

import { useState } from "react";
import Image from "next/image";

const Videos = () => {
  const [selectedClip, setSelectedClip] = useState(null);

  const videoClips = [
    {
      id: 1,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/aba1476b4ebf4e499de53f19348a954b.mp4",
      title: "Beauty Tutorial",
      author: "Sarah",
      price: "₹799.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-of-Face-Dewy-Foundation.jpg?v=1741431610",
    },
    {
      id: 2,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/c4a5c12c77844bffb088db87b34d0324.mp4",
      title: "Blue Outfit",
      author: "Jessica",
      price: "₹999.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-of-Face-Dewy-Foundation.jpg?v=1741431610",
    },
    {
      id: 3,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/62912cf1c06144c69baa0521dcc4b499.mp4",
      title: "Orange & Blue Style",
      author: "Priya",
      price: "₹899.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-of-Face-Dewy-Foundation.jpg?v=1741431610",
    },
    {
      id: 4,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/d4259af204914769bb9ba13e44deffd0.mp4",
      title: "Casual Look",
      author: "Amber",
      price: "₹1,299.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-of-Face-Dewy-Foundation.jpg?v=1741431610",
    },
    {
      id: 5,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/f418fc532c6e446393334e561300e00f.mp4",
      title: "Bag Collection",
      author: "Tina",
      price: "₹1,499.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-of-Face-Dewy-Foundation.jpg?v=1741431610",
    },
    {
      id: 6,
      thumbnail:
        "https://cdn.shopify.com/videos/c/o/v/188c0589cf3046b49ba5e8cf6f23c63a.mp4",
      title: "Workout Outfit",
      author: "Michelle",
      price: "₹1,199.00",
      productImage:
        "https://cdn.shopify.com/s/files/1/0906/2558/files/Cloud-Nine-Niacinamide-Glow-Blush_5ad87314.jpg?v=1739962281",
    },
    // ... add more if needed ...
  ];

  const openModal = (clip) => setSelectedClip(clip);
  const closeModal = () => setSelectedClip(null);

  return (
    <div className="flex flex-col min-h bg-white">
      {/* Header */}
      {/* <hr /> */}
      {/* <header className="py-4 sm:py-6 md:py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-xl sm:text-2xl font-medium text-center tracking-widest">
            SUGAR INSTA
          </h1>
        </div>
      </header> */}

      {/* Grid of Videos */}
      <main className="flex-grow container mx-auto  py-4 mt-8 sm:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {videoClips.map((clip) => (
            <div>
              <div
                key={clip.id}
                className="cursor-pointer rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
                onClick={() => openModal(clip)}
              >
                <div className="aspect-[10/12]">
                  <video
                    src={clip.thumbnail}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
              <p className="mt-2 text-2xl text-center">
                {clip?.title}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedClip && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-[80vh]">
            {/* Video */}
            <div className="w-full md:w-2/3 bg-black">
              <video
                src={selectedClip.thumbnail}
                className="w-full h-full object-cover aspect-[9/16] md:aspect-auto"
                autoPlay
                controls
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/3 p-4 md:p-6 flex flex-col justify-between">
              <div>
                <img
                  src={selectedClip.productImage}
                  alt={selectedClip.title}
                  className="w-full h-20 sm:h-32 object-cover mb-3 md:mb-4"
                />

                <h2 className="text-lg">{selectedClip.title}</h2>
                {/* <p className="text-gray-500">{selectedClip.author}</p>
                <p className="text-xl font-bold mt-2">{selectedClip.price}</p> */}
              </div>
              <div className="mt-4 md:mt-0">
                {/* <a
                  href="#"
                  className="block bg-black text-white text-center py-2 rounded-md mb-3 hover:bg-gray-800 transition"
                >
                  SHOP NOW
                </a> */}
                <button
                  onClick={closeModal}
                  className="w-full text-gray-500 hover:text-gray-800 transition text-center py-2 border border-gray-300 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
