import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.reviews;
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={review.image || "default-image-url.jpg"}
          alt={review.name || "Image"}
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute z-[-10] top-[-6px] left-[5px]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
      </div>

      <div className="text-center">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>
      <div className="text-violet-400 flex justify-center mt-5 ">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">{review.text}</div>
      <div className="text-violet-400 flex justify-center mt-5 ">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
