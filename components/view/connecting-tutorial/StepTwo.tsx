import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const StepTwo = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-1/2">
        <DialogHeader>
          <DialogTitle>Connecting Toturial &nbsp;&nbsp;&nbsp;<span className="text-red-500">Step 2</span></DialogTitle>
          <DialogDescription>
            3. Turn on the vest With the button on the collar 
            <br />
            &nbsp;&nbsp;&nbsp;Also can find the link at the website
            <br />
            <br />
            4. Click on pair at Application
            <br />

          </DialogDescription>
        </DialogHeader>
      </div>
        <div
          className="flex gap-2 h-[220px]"
          style={{
            backgroundImage: `url('/assets/imgs/vest-button.avif')`,
            backgroundSize: "200px",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
            backgroundPosition: "right center",
          }}
        >
          <div className="w-[200px] h-[100px] bg-gray-900 flex flex-col justify-center items-center text-white mt-10">
            <p>Vest Not Paired</p>
            <p>Turn On the Vest</p>
            <div className="w-[100px] h-[30px] bg-blue-600 flex justify-center items-center text-white rounded-md">Pair</div>
          </div>
        </div>
    </div>
  );
};

export default StepTwo;
