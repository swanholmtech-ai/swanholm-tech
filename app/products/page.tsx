export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product items would go here */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Product Name</h2>
          <p className="text-gray-600 mt-2">Product description goes here</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
        {/* More product items */}
      </div>
    </div>
  );
}
