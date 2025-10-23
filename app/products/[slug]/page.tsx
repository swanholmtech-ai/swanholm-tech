import Image from "next/image";
import { Poppins } from "next/font/google";

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
    `https://www.swanholmtech.com/wp-json/wp/v2/product/${slug}`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );
  const productData = await data.json();

  return (
    <main className="max-w-7xl mt-32 mx-auto h-[calc(100vh-5rem)]">
      <h1 className="text-xl mb-2 text-left text-yellow-300">
        {productData.title.rendered}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="col-span-2 border border-gray-600 p-2 flex flex-col justify-evenly">
          <div
            className={`prose prose-slate max-w-none text-gray-100 ${poppinsThin.className}`}
            dangerouslySetInnerHTML={{ __html: productData.content.rendered }}
          />
          <div className="text-gray-100 text-md font-bold">
            <div>Price: {productData.price}</div>
            <div className="flex gap-2 items-center">
              Sizes:
              <div className="text-gray-100 text-md bg-gray-800 p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                S
              </div>
              ,
              <div className="text-gray-100 text-md bg-gray-800 p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                M
              </div>
              ,
              <div className="text-gray-100 text-md bg-gray-800 p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                L
              </div>
              ,
              <div className="text-gray-100 text-md bg-gray-800 p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                XL
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="https://www.swanholmtech.com/wp-content/uploads/2025/02/vast-lo-arm2.png"
            alt={productData.title.rendered}
            width={500}
            height={500}
          />
          <div className="flex gap-2">
            <div className="flex-1 w-1/4 h-24 bg-gray-800 border border-gray-600 text-center text-gray-100">
              Image
            </div>
            <div className="flex-1 w-1/4 h-24 bg-gray-800 border border-gray-600 text-center text-gray-100">
              Image
            </div>
            <div className="flex-1 w-1/4 h-24 bg-gray-800 border border-gray-600 text-center text-gray-100">
              Image
            </div>
            <div className="flex-1 w-1/4 h-24 bg-gray-800 border border-gray-600 text-center text-gray-100">
              Image
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
