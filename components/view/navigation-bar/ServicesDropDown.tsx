"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TutorialHome } from "../connecting-tutorial/TutorialHome";
import { Settings } from "lucide-react";

export function ServicesDropDown() {
  const [open, setOpen] = useState(false);
  const clickOnTutorialHandler = () => {
    console.log("clickOnTutorialHandler");
    setOpen(true);
  };

  return (
    <>
      {open && <TutorialHome setOpen={setOpen} open={open} />}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="cursor-pointer hover:bg-slate-500">
            <Settings size={32} color="white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="center">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={clickOnTutorialHandler}
              className="cursor-pointer"
            >
              Tutorial
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
