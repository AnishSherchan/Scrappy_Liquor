/* eslint-disable */
import Banner from "../Banner/Banner";
import ProductSlider from "../ProductSlider/ProductSlider";

const OurProducts = ({ productData, banner }) => {
  const whiskey = productData.filter((item) => item.category === "Whiskey");
  const wine = productData.filter((item) => item.category === "Wine");
  const beer = productData.filter((item) => item.category === "Beer");

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
