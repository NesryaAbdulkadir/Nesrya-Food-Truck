import React from "react";

export default function AboutUs() {
  return (
    <div className=" bg-white p-10 pt-40" id="about">
      <div className=" xl:mx-32 lg:grid lg:grid-cols-2 gap-5 justify-evenlyitems-center">
        <div className="flex justify-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-md overflow-hidden relative">
          <img
            src="/about.jpg"
            alt=""
            className="object-contain absolute sm:-top-64 lg:-top-10 md:m-5 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-10 mt-10 m-10">
          <h1 className="text-5xl font-bold">Get to know us</h1>
          <div className="text-xl ">
            <p>
              Welcome to Nesrya food truck! At our food truck, we believe that
              food is more than just sustenance; it’s an experience that brings
              people together. Founded in 2000, our journey began with a passion
              for a exploring and trying out different cusines and a desire to
              share our love for delicious, high-quality meals on the go.
            </p>
            <p>
              <b>Our mission is simple: </b>to serve up mouthwatering dishes
              made from the freshest ingredients, sourced locally whenever
              possible. Each recipe is crafted with care, blending traditional
              flavors with a modern twist to create unforgettable tastes that
              our customers rave about.
            </p>
            <p>
              Whether you’re a busy professional looking for a quick lunch, a
              family seeking a fun dinner option, or a festival-goer craving
              something special, we’ve got you covered! Our menu features a
              variety of options to satisfy every palate, including vegetarian
              and gluten-free choices.
            </p>
            <p>
              We take pride in our friendly service and vibrant atmosphere,
              making every visit to Nesrya food truck a memorable one. Join us
              at our next stop, and experience the joy of great food on wheels!
            </p>
            {/* <p>

Stay connected with us on [Social Media Links] for updates on our location, menu specials, and upcoming events. We can’t wait to serve you!</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
