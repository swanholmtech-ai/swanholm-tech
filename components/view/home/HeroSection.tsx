import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-dvw h-dvh bg-gray-100 flex">
      <div className="w-1/2 h-full bg-red-500"></div>
      <div className="w-1/2 h-full bg-blue-500"></div>
    </section>
  );
}
