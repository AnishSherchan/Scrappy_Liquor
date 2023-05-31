/* eslint-disable */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../Banner/Banner";

const OurProducts = ({ productData, banner }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const whiskey = productData.filter((item) => item.category === "Whiskey");
  const wine = productData.filter((item) => item.category === "Wine");
  const beer = productData.filter((item) => item.category === "Beer");

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
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow:
      windowWidth <= 768 ? (
        <Icon
          icon="icon-park-outline:left"
          className=" text-primary h-[16px] w-[8px]"
        />
      ) : null,
    nextArrow:
      windowWidth <= 768 ? <Icon icon="icon-park-outline:right" /> : null,
  };

  return (
    <div className="mx-8 lg:mx-16 my-8 flex flex-col gap-12">
      <h5 className="text-center text-[20px] font-extrabold tracking-normal lg:text-[22px] decoration-2 underline decoration-primary underline-offset-4">
        OUR PRODUCTS
      </h5>
      <section>
        <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
          Our Whiskey
        </h6>
        <div className="p-4">
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {whiskey.map((item, index) => (
              <div className="slider-item" key={index}>
                <div className="product-card-wrapper">
                  <ProductCard productData={item} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
          Our Wine
        </h6>
        <div className="p-4">
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {wine.map((item, index) => (
              <div className="slider-item" key={index}>
                <div className="product-card-wrapper">
                  <ProductCard productData={item} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="relative -mx-8 lg:-mx-16">
        <Banner banner={banner} />
      </section>
      <section>
        <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
          Our Beer
        </h6>
        <div className="p-4">
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {beer.map((item, index) => (
              <div className="slider-item" key={index}>
                <div className="product-card-wrapper">
                  <ProductCard productData={item} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
