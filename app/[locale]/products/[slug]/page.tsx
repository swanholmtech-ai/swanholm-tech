// import Image from "next/image";
import { Poppins } from "next/font/google";
import SizeSelector from "@/components/view/order-vest/SizeSelector";
import QuantitySelector from "@/components/view/order-vest/QuantitySelector";
import ImageSelector from "@/components/view/product/ImageSelector";
import AddToCart from "@/components/view/shopping-cart/AddToCart";
// const poppinsRegular = Poppins({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const poppinsThin = Poppins({
  weight: ["200"],
  subsets: ["latin"],
});
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const data = await fetch(
    `https://www.swanholmtech.com/wp-json/wp/v2/products/${slug}`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  const productData = await data.json();
  const imageGallery = productData.image_url
    .split(",")
    .map(
      (url: string) =>
        `https://www.swanholmtech.com/wp-content/uploads/${url.trim()}`
    );

  return (
    <main className="max-w-7xl mt-32 mx-auto h-[calc(100dvh-8rem)] w-full">
      <h1 className="text-xl mb-2 text-left text-sky-800">
        {productData.name}
      </h1>
      <div className="flex xl:flex-row flex-col w-full">
        <div className="col-span-2  md:border border-gray-600 p-2 flex flex-col justify-evenly bg-zinc-500">
          <div
            className={`prose prose-slate max-w-none text-zinc-100 ${poppinsThin.className}`}
            dangerouslySetInnerHTML={{ __html: productData.description }}
          />
          <div className="text-gray-100 text-md font-bold text-gray-400 flex md:flex-row flex-col gap-2  md:items-center  items-start md:justify-between">
            <div className="text-green-300">
              Price:{" "}
              <span className="text-yellow-300">{productData.price}</span>
            </div>
            <SizeSelector sizes={productData.sizes} />
            <QuantitySelector />
            <AddToCart productData={productData} />
          </div>
        </div>
        <ImageSelector imageGallery={imageGallery} />
      </div>
    </main>
  );
};

export default ProductPage;
