/* eslint-disable */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../Banner/Banner";
import ProductSlider from "../ProductSlider/ProductSlider";

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
        <ProductSlider product={whiskey} title="Our Whiskey" />
      </section>

      <section>
        <ProductSlider product={wine} title="Our Wine" />
      </section>

      <section className="relative -mx-8 lg:-mx-16">
        <Banner banner={banner} />
      </section>

      <section>
        <ProductSlider product={beer} title="Our Beer" />
      </section>
    </div>
  );
};

export default OurProducts;
