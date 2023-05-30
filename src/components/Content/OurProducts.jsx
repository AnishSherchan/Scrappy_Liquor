/* eslint-disable */
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProducts = ({ productData }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className=" px-8 lg:px-16 my-8  flex flex-col gap-12">
      <h5 className="text-center text-[20px] font-extrabold tracking-normal lg:text-[22px] decoration-2 underline decoration-primary underline-offset-4">
        OUR PRODUCTS
      </h5>
      <section>
        <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
          Our Whiskey
        </h6>

        <div className=" p-4 ">
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {productData.map((item, index) => (
              <ProductCard productData={item} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
