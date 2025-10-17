import Image from "next/image";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const StepOne = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>Connecting Toturial &nbsp;&nbsp;&nbsp;<span className="text-red-500">Step 1</span></DialogTitle>
          <DialogDescription>
            1. Download Swanholme sense App From Google play or App store and
            Install It
            <br />
            &nbsp;&nbsp;&nbsp;Also can find the link at the website
            <br />
            <br />
            2. Install and Open The App
            <br />
            &nbsp;&nbsp;&nbsp;Note: The Bluetooth must be on

          </DialogDescription>
        </DialogHeader>
      </div>
        <div
          className="flex gap-2 h-[220px]"
          style={{
            backgroundImage: `url('/assets/svgs/mobil.svg')`,
            backgroundSize: "200px",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            backgroundPosition: "right center",
          }}
        >
          <Image
            src="/assets/svgs/google-play.svg"
            width={50}
            height={50}
            alt="google-play"
          />
          <Image
            src="/assets/svgs/app-store.svg"
            width={50}
            height={50}
            alt="app-store"
          />
        </div>
    </div>
  );
};

export default StepOne;
