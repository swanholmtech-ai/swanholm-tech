'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
//   DialogTrigger,
} from "@/components/ui/dialog"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import { XIcon } from "lucide-react"

export function TutorialHome({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <Dialog open={open}>
        <DialogContent className="sm:max-w-[725px] close min-h-[400px] flex flex-col gap-2">
          <Button variant="ghost" size="icon-sm" onClick={() => setOpen(false)} className="absolute top-2 right-2 bg-red-300 hover:bg-red-400 cursor-pointer">
            <XIcon className="text-white" />
          </Button>
          <div>
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
          </div>
          <DialogFooter className="h-1/6">
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
            </DialogClose>
            <Button type="submit" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
