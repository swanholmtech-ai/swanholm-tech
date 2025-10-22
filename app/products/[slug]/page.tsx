const ProductPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)]">
      <h1>Product Page {params.slug}</h1>
    </main>
  );
};

export default ProductPage;
