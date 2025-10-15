import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
const StepThree = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>
            Connecting Toturial &nbsp;&nbsp;&nbsp;
            <span className="text-red-500">Step 3</span>
          </DialogTitle>
          <DialogDescription>
            5. Agree with the location permission
            <br />
            6. Click on Next to Pair the vest
            <br />
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="flex gap-2 h-[240px] w-full justify-evenly py-2">
        <Image
          src="/assets/t-imgs/001.avif"
          width={120}
          height={120}
          alt="google-play"
        />
        <Image
          src="/assets/t-imgs/002.avif"
          width={140}
          height={140}
          alt="app-store"
        />
        <Image
          src="/assets/t-imgs/003.avif"
          width={120}
          height={120}
          alt="app-store"
        />
      </div>
    </div>
  );
};

export default StepThree;
