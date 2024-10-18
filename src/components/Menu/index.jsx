import React from "react";
import { menuItems } from "../../constants";

export default function Menu() {
  return (
    <div className="lg:p-28 md:p-16 p-10" id="menu">
      <div className="xl:mx-28 flex flex-col gap-10 ">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold ml-5">
          Today's feature Menu
        </h1>

        <div className="grid lg:grid-cols-2 gap-5 justify-center ">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex gap-5 justify-center items-center border-t-2 border-gray-200 p-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-auto sm:w-36 sm:h-36 object-cover rounded-md"
              />

              <div className="w-8/12">
                <p className="text-2xl font-bold mb-2">{item.name}</p>
                <div className="flex  gap-2">
                  <p className="text-gray-500">Ingredients:</p>
                  <ul className="list-disc  flex flex-wrap">
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient} className="list-none text-gray-500">
                        {ingredient}
                        {", "}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xl font-bold">Price: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
