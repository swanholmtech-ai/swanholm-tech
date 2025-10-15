
import Image from "next/image"
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog"

const StepOne = () => {
    return (
        <>
           <DialogHeader>
                <DialogTitle>Connecting Toturial</DialogTitle>
                <DialogDescription>
                1. Download Swanholme sense App From Google play or App store and Install It
                </DialogDescription>
            </DialogHeader>
            <div className="flex gap-2" style={{backgroundImage: `url('/assets/svgs/mobil.svg')`, backgroundSize: '200px', backgroundRepeat: 'no-repeat', opacity: 0.6,
                backgroundPosition: 'right center', }}>
                <Image src="/assets/svgs/google-play.svg" width={30} height={30} alt="google-play" />
                <Image src="/assets/svgs/app-store.svg" width={30} height={30} alt="app-store" />
            </div>

        </>
    )
}

export default StepOne