/* eslint-disable */
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";

const ProductSlider = ({ product, title }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        console.log("object");
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
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
    <div>
      <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
        {title}
      </h6>
      <div className="p-4">
        <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
          {product?.map((item, index) => (
            <div className="slider-item" key={index}>
              <div className="product-card-wrapper">
                <ProductCard productData={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
