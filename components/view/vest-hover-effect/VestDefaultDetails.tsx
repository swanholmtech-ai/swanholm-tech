import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

const VestDefaultDetails = () => {
  return (
    <div className="flex flex-col justify-center h-full text-left p-3 gap-4">
      <p
        className={`text-2xl ${poppinsBold.className} text-gray-600 cursor-pointer hover:scale-105 transition-all hover:text-gray-400 hover:rotate-2 hover:translate-y-2`}
      >
        AI Fall Detection
      </p>
      <p
        className={`text-2xl ${poppinsBold.className} text-gray-600 cursor-pointer hover:scale-105 transition-all hover:text-gray-400 hover:rotate-2 hover:translate-y-2`}
      >
        Three Alarm Types
      </p>
      <p
        className={`text-2xl ${poppinsBold.className} text-gray-600 cursor-pointer hover:scale-105 transition-all hover:text-gray-400 hover:rotate-2 hover:translate-y-2`}
      >
        Active Printed Light
      </p>
      <p
        className={`text-2xl ${poppinsBold.className} text-gray-600 cursor-pointer hover:scale-105 transition-all hover:text-gray-400 hover:rotate-2 hover:translate-y-2`}
      >
        Swanholm Sense App
      </p>
    </div>
  );
};

export default VestDefaultDetails;
