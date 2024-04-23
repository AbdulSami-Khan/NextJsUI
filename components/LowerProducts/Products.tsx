import React from "react";
import Image from 'next/image'
import Image01 from '../../assets/Image07.jpg'
import Image02 from '../../assets/Image04.jpg'
import Image03 from '../../assets/Image02.jpg'

export const LowerProducts = () => {

  const products =[
    {
      ProductNo :1,
      name:"Featured Product",
      image: Image01,
      description : "description of featured product",
      price : "$10.99"
    },
    {
      ProductNo :2,
      name:"Top Product",
      image:Image02,
      description : "description of top product",
      price : "$10.99"
    },
    {
      ProductNo :3,
      name:"Top Product",
      image:Image03,
      description : "description of Top product",
      price : "$10.99"
    },
  ]

  return (
    <div className="mx-12 my-16">
      <div className="text-3xl sm:text-4xl font-bold mb-8">Heading</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6">
        {products.map((product) =>{
          return(
            <div key={product.ProductNo} className={`${product.ProductNo ===1 ? 'row-span-2':''}`}>
              <div>
                <Image
                  src = {product.image}
                  alt="Product"
                  className= {`${product.ProductNo ===1 ? 'h-[240px] sm:h-[630px] rounded-xl object-cover':'h-[240px] rounded-xl object-cover'}`}
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
          )
        })}
      </div>
    </div>
  );
};
