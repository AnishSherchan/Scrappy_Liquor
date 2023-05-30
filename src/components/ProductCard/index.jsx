/* eslint-disable */
const ProductCard = ({ productData, onLoad }) => {
  console.log(productData);

  return (
    <div className="product_item cursor-pointer py-6 px-6 w-[270px] h-full rounded-[20px]">
      <div className=" w-full flex justify-center items-center object-cover h-[280px] mb-4">
        <img onLoad={onLoad} src={productData.img} alt={productData.category} />
      </div>
      <div className=" flex flex-col justify-end gap-3">
        <p className=" text-[18px] font-semibold">{productData.name}</p>
        <p className=" text-[14px] text-right text-[#3B3C36] font-semibold">
          {productData.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
