import React from "react";

const Products = ({ name, price, collaborations, images }) => {
  const renderCollaborations = () => {
    if (collaborations) {
      return collaborations.map((data, index) => (
        <p key={index} className="text-xs text-[#17A500]">
          {data}
        </p>
      ));
    }
    return null;
  };

  return (
    <div className="h-[445px] w-[268px] cursor-pointer ">
      <div className="h-[380px] w-[268px] border-[1px] border-[#878787] max-md:w-full">
        <img
          src={`${import.meta.env.VITE_BLOB_URL}${images[0]}`}
          alt="products_img"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="mt-2 font-semibold uppercase">
        <p className="text-sm">{name}</p>
        <div className="flex gap-4">{renderCollaborations()}</div>
        <p className="text-xs text-asisDark">{price?.toLocaleString()} ngn</p>
      </div>
    </div>
  );
};

export default Products;
