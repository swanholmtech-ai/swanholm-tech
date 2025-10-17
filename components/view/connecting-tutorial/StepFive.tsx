import { Poppins } from "next/font/google";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import Image from "next/image";

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

const StepFive = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>
            Connecting Toturial &nbsp;&nbsp;&nbsp;
            <span className="text-red-500">Step 5</span>
          </DialogTitle>
          <DialogDescription>
            9. To ensure alerts are sent when the app is inactive, the
            application requires permission to run in the foreground.
            <br />
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="flex gap-2 h-[240px] w-full justify-evenly py-2">
        <Image
          src="/assets/t-imgs/05.svg"
          width={140}
          height={140}
          alt="google-play"
        />
        <Image
          src="/assets/t-imgs/06.svg"
          width={140}
          height={140}
          alt="app-store"
        />
      </div>
    </div>
  );
};

export default StepFive;
