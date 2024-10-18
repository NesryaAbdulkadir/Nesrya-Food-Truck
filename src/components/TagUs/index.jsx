import React from "react";
import { InstagramContent } from "../../constants";

export default function TagUs() {
  return (
    <div className="lg:p-28 md:p-16 p-10">
      <div className="xl:mx-28 flex flex-col gap-10 ">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold ml-5 mb-16">
          Tag Us <b className="text-gray-600">#nesryafoodtruck</b> on Instagram
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10 justify-center items-center xl:mx-28">
        {InstagramContent.map((item, index) => (
          <div key={index} className="flex gap-5 justify-center items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-80 h-96 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
