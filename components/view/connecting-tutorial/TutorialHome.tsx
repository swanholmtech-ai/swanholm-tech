import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
//   DialogTrigger,
} from "@/components/ui/dialog"
import StepOne from "./StepOne"
export function TutorialHome({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  return (
    <Dialog open={open}>
        <DialogContent className="sm:max-w-[725px] close min-h-[400px]" >
          <StepOne />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Back</Button>
            </DialogClose>
            <Button type="submit" onClick={() => setOpen(false)}>Next</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
