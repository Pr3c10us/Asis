import React from "react";


const Products = ({ name, price, collaborations, images }) => {
  return (
    <div className="h-[445px] w-[268px] cursor-pointer">
      <div className="h-[380px] w-[268px] border-[1px] border-[#878787]">
        <img
          src={` https://asis.blob.core.windows.net/asisimages/${images[0]}`}
          alt="products_img"
          className="h-[100%] w-[100%] object-cover object-top"
        />
      </div>
      <p></p>
      <div className="mt-2 font-[600] uppercase">
        <p className="text-[16px]/[20px]">{name}</p>
        <div className="flex gap-4">
          {collaborations?.map((data) => {
            return (
              <div>
                <p className="text-[12px]/[16px] text-[#17A500]">{data}</p>
              </div>
            );
          })}
        </div>
        <p className="text-[12px]/[16px] text-[#0B0B0B]">{price} ngn</p>
      </div>
    </div>
  );
};

export default Products;
