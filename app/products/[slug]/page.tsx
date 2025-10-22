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
      <h1 className="text-3xl font-bold mb-6">
        Product Page {productData.title.rendered}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </main>
  );
};

export default ProductPage;
