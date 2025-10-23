// import Image from "next/image";
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
    <main className="max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {productData.title.rendered}
        <p className={`text-m text-slate-200 ${poppinsThin.className}`}>
          {productData.content.rendered}
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-100 w-full">
        <div className="col-span-2 bg-slate-200">Hellos</div>
        <div className="col-span-1 bg-slate-200"></div>
      </div>
    </main>
  );
};

export default ProductPage;
