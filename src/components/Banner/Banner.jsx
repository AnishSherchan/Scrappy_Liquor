/* eslint-disable */
import React from "react";

const Banner = ({ banner }) => {
  return (
    <>
      <img
        className=" h-[310px] w-full object-cover"
        src={banner.img}
        alt="sss"
      />
      <h5 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hero text-back-ground">
        ❝ {banner.title} ❞
      </h5>
    </>
  );
};

export default Banner;
