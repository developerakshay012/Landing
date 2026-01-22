import React from "react";
import { features } from "../work";

const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-200">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
          {" "}
          Feature{" "}
        </span>

        <h2 className="text-3xl lg:text-6xl sm:text-5xl mt-10 lg:mt-20 tracking-wide">
          Easily Build
          <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Your mindset
          </span>{" "}
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
            <div
              className="flex h-full border border-neutral-700 rounded-xl p-6 
                      hover:border-orange-600 transition-all duration-500"
            >
              <div
                className="flex mx-4 h-10 w-10 p-2 bg-neutral-900 text-orange-700 
                        justify-center items-center rounded-full"
              >
                {feature.icon}
              </div>

              <div className="flex flex-col">
                <h5 className="mt-1 mb-3 text-xl font-semibold">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
