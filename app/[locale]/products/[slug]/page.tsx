"use client";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
import SizeSelector from "@/components/view/order-vest/SizeSelector";
import QuantitySelector from "@/components/view/order-vest/QuantitySelector";
import { Button } from "@/components/ui/button";
import ImageSelector from "@/components/view/product/ImageSelector";
import useProductsStore from "@/store/useProductsStore";
import React from "react";
// const poppinsRegular = Poppins({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params); // ✅ unwrap the Promise

  const { products } = useProductsStore();
  console.log("PRODUCTS", products);
  const productData = products.find((product) => product.id === slug);
  console.log("PRODUCTDATA", productData);
  const imageGallery = productData?.image_url
    ? (productData.image_url as string[])
    : [];
  console.log("SLUG", slug);
  console.log("IMAGEGALLERY", imageGallery);
  return (
    <main className="max-w-7xl mt-32 mx-auto h-[calc(100dvh-8rem)]">
      <h1 className="text-xl mb-2 text-left text-yellow-300">
        {/* {productData.title.rendered} */}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="col-span-2 border border-gray-600 p-2 flex flex-col justify-evenly">
          {/* <div
            className={`prose prose-slate max-w-none text-gray-100 ${poppinsThin.className}`}
            dangerouslySetInnerHTML={{ __html: productData.content.rendered }}
          /> */}
          <div className="text-gray-100 text-md font-bold text-gray-400 flex gap-2 items-center justify-between">
            <div className="text-green-300">
              Price:
              <span className="text-yellow-300"> 1200 SEK</span>
            </div>
            <SizeSelector />
            <QuantitySelector />
            <Button
              variant="outline"
              className="bg-yellow-400 text-black cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <ImageSelector imageGallery={imageGallery} />
      </div>
    </main>
  );
};

export default ProductPage;
