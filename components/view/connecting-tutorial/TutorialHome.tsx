"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  //   DialogTrigger,
} from "@/components/ui/dialog";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TutorialHome({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[725px] close min-h-[400px] flex flex-col gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 bg-red-300 hover:bg-red-400 cursor-pointer"
        >
          <XIcon className="text-white" />
        </Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            {currentStep === 5 && <StepFive />}
            {currentStep === 6 && <StepSix />}
          </motion.div>
        </AnimatePresence>
        <DialogFooter className="h-1/6">
          <DialogClose asChild>
            <Button
              className="cursor-pointer"
              variant="outline"
              disabled={currentStep <= 1}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          </DialogClose>
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() =>
              setCurrentStep(
                currentStep === 6 ? (setOpen(false), 6) : currentStep + 1
              )
            }
          >
            {currentStep === 6 ? "Finish" : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
