/* eslint-disable */
import ProductCard from "../ProductCard";

const OurProducts = ({ productData }) => {
  return (
    <div className=" px-8 lg:px-16 my-8  flex flex-col gap-12">
      <h5 className="text-center text-[20px] font-extrabold tracking-normal lg:text-[22px] decoration-2 underline decoration-primary underline-offset-4">
        OUR PRODUCTS
      </h5>
      <section>
        <h6 className="underline mb-10 font-black text-[18px] lg:text-[20px] decoration-2 decoration-primary underline-offset-4">
          Our Whiskey
        </h6>
        <div className=" flex flex-wrap justify-evenly items-center">
          {productData.map((item, index) => (
            <ProductCard productData={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
