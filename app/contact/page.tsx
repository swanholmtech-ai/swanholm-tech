import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
export default function ContactPage() {
  return (
    <main className="max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)] text-center text-gray-200">
      <div className="flex justify-evenly items-center align-center w-full">
        <div className="flex-1 p-4 rounded-sm border border-gray-600">
          <div className="flex flex-row justify-left gap-2 items-center align-center py-4">
            <Phone className="text-cyan-300" />
            +46 73 649 7710
          </div>
          <div className="flex flex-row justify-left gap-2 items-center align-center py-4">
            <Mail className="text-cyan-300" />
            info@swanholmtech.com
          </div>
          <div className="flex flex-row justify-left gap-2 items-center align-center py-4">
            <Image
              aria-hidden
              src="/assets/svgs/swan.svg"
              alt="Linkedin icon"
              width={32}
              height={32}
            />
            Swanholm Technology AB
          </div>
          <div className="flex flex-row justify-left gap-2 items-center align-center py-4">
            <MapPin className="text-cyan-300" />
            Ranhammarsvägen 24
          </div>
          <div className="flex flex-row justify-left gap-2 items-center align-center py-4">
            <ChevronRight className="text-cyan-300" />
            168 67 Bromma, Sweden
          </div>
        </div>
        <div className="flex-2 bg-green-500">2</div>
      </div>
    </main>
    // <main className="max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)] text-center text-gray-200">
    //   <h1 className="text-3xl font-bold mb-6 text-gray-200">Contact </h1>
    //   <div className="flex justify-evenly items-center align-center w-full">
    //     <div className="flex flex-row justify-evenly gap-2 items-center align-center">
    //       <Phone />
    //       +46 73 649 7710
    //     </div>
    //     <div className="flex flex-row justify-evenly gap-2 items-center align-center">
    //       <Mail />
    //       info@swanholmtech.com
    //     </div>
    //   </div>
    // </main>
  );
}
