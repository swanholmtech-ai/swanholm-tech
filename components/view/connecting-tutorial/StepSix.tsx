import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
const StepSix = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>
            Connecting Toturial &nbsp;&nbsp;&nbsp;
            <span className="text-red-500">Step 6</span>
          </DialogTitle>
          <DialogDescription>
            Now You&apos;r App is Ready To Use, Thank You For Using Our App
            <br />
            <br />
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="flex gap-2 h-[240px] w-full justify-evenly py-2">
        <Image
          src="/assets/t-imgs/07.avif"
          width={140}
          height={140}
          alt="app-store"
        />
      </div>
    </div>
  );
};

export default StepSix;
