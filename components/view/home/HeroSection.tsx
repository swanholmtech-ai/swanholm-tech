import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Welcome to Swanholm Tech
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Empowering your business with innovative technology solutions. Discover our products and services designed to help you succeed in a digital world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Products
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-200 text-blue-700 rounded-md font-semibold hover:bg-gray-300 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="mt-10">
       
      </div>
    </section>
  );
}
