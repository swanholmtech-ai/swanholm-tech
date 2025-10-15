import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
//   DialogTrigger,
} from "@/components/ui/dialog"

export function TutorialHome({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  return (
    <Dialog open={open}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>  */}
        <DialogContent className="sm:max-w-[425px] close">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              
              Welcome to the tutorial
            </div>
            <div className="grid gap-3">
              
              Swanholm Tech is a company that specializes in 
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={() => setOpen(false)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
