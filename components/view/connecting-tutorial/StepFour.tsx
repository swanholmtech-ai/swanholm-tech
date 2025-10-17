import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
const StepFour = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>
            Connecting Toturial &nbsp;&nbsp;&nbsp;
            <span className="text-red-500">Step 4</span>
          </DialogTitle>
          <DialogDescription>
            7. Found and Select your vest from the Bluetooth list
            <br />
            8. Click on Next Button
            <br />
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="flex gap-2 h-[240px] w-full justify-evenly py-2">
        <Image
          src="/assets/t-imgs/03.svg"
          width={140}
          height={140}
          alt="google-play"
        />
        <Image
          src="/assets/t-imgs/04.svg"
          width={140}
          height={140}
          alt="app-store"
        />
      </div>
    </div>
  );
};

export default StepFour;
