import React from "react";
import Image01 from "../../assets/Image01.png";
import Image02 from "../../assets/Image02.jpg";
import Image03 from "../../assets/Image03.jpg";
import Image04 from "../../assets/Image04.jpg";
import Image05 from "../../assets/Image05.jpg";
import Image06 from "../../assets/Image06.jpg";
import Image from "next/image";

export const UpperProducts = () => {
  const products = [
    {
      productNo: 1,
      name: "Product",
      image: Image01,
      description: "Description of 1st product",
      price: "$10.99",
    },
    {
      productNo: 2,
      image: Image02,
      name: "Product",
      description: "Description of 2nd product",
      price: "$10.99",
    },
    {
      productNo: 3,
      image: Image03,
      name: "Product",
      description: "Description of 3rd product",
      price: "$10.99",
    },
    {
      productNo: 4,
      image: Image04,
      name: "Product",
      description: "Description of 4th product",
      price: "$10.99",
    },
    {
      productNo: 5,
      image: Image05,
      name: "Product",
      description: "Description of 5th product",
      price: "$10.99",
    },
    {
      productNo: 6,
      image: Image06,
      name: "Product",
      description: "Description of 6th product",
      price: "$10.99",
    },
  ];

  return (
    <div className="Parent mx-12 my-16">
      <div className="text-3xl sm:text-4xl font-bold py-8   ">Heading</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-6 ">
        {products.map((product) => {
          return (
            <div key={product.productNo}>
              <div>
                <Image
                  src={product.image}
                  alt="Product Image"
                  className="h-[240px] rounded-xl object-cover"
                />
              </div>
              <div className="my-4 gap-4">
                <div className="text-[20px] font-medium">{product.name}</div>
                <div className="text-[#828282] text-[20px]">
                  {product.description}
                </div>
                <div className="font-bold text-[20px]">{product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
