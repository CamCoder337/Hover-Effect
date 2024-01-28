"use client";
import * as React from "react";
import Image from "next/image";



const data = [
  {
      title: "Desert",
      description: "A vast, arid and often inhospitable expanse, the desert is an ecosystem characterized by landscapes of sand, rock and dunes. Often associated with extreme climatic conditions, the desert is a place where life has evolved to adapt to high temperatures and limited water availability. Vast stretches of sand can create spectacular landscapes, and deserts are often marked by austere tranquillity and profound silence.",
      cover_image:"https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg",
      images: ["https://images.pexels.com/photos/5598631/pexels-photo-5598631.jpeg", "https://images.pexels.com/photos/9335688/pexels-photo-9335688.jpeg"],
  },
  {
      title: "Jungle",
      description: "The jungle, also known as the rainforest, is a lush, dense expanse of tropical vegetation characterized by an abundance of plants, trees and biodiversity. These warm, humid ecosystems are found mainly near the equator, where the heat and humidity favor lush plant growth. Jungles are home to an incredible diversity of species, from exotic plants to fascinating animals. Their thick canopies create an environment where life thrives in all its forms.",
      cover_image:"https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg",
      images: ["https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg", "https://images.pexels.com/photos/1481581/pexels-photo-1481581.jpeg"],
  },
  {
      title: "Mountains",
      description: "Mountains represent imposing geological formations that rise majestically above the earth's surface. These rocky masses, characterized by significant altitudes and steep slopes, offer breathtaking panoramas and diverse ecosystems as altitude changes. Mountains can be covered with lush forests at their feet, alpine meadows higher up, then glaciers and eternal snows on their summits.",
      cover_image:"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      images: ["https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg", "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg"],
  },
]

export default function Home() {
  const [active, setActive] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const handleShow = (index: number) => {
    setShow(true);
    setActive(index);
  };
  const handleShowLeave = () => {
    setShow(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-7xl gap-10 flex w-full items-center justify-between">
        <div className="w-5/12 space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border border-slate-300 rounded-lg p-4 shadow-sm cursor-pointer duration-300 
            ${active === index ? "bg-green-50 w-full" : "bg-white w-11/12"}
            `}
              onMouseEnter={() => handleShow(index)}
              onMouseLeave={handleShowLeave}
            >
              <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
              <div
                className={`description
              ${active === index && "active"}
              `}
              >
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-7/12 rounded-3xl overflow-hidden bg-white h-[500px] flex flex-col border border-slate-200">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 flex items-center justify-center p-4 duration-300"
              style={{
                transform: `translateY(-${active * 100}%)`,
              }}
            >
              {/* <div className="overflow-hidden"> */}
              <Image
                alt="image"
                src={item.cover_image}
                width={1469}
                height={954}
                className="rounded-2xl w-full h-full object-cover"
              />
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
