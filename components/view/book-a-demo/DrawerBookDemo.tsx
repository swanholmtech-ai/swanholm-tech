"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { CalendarClock } from "lucide-react";
import { CalendarBookDemo } from "./CalendarBookDemo";

import FormBookDemo from "./FormBookDemo";

export function DrawerBookDemo() {
  return (
    <Drawer>
      <DrawerTrigger
        asChild
        className="cursor-pointer fixed bottom-4 right-18 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-slate-700 hover:text-white"
        >
          <CalendarClock size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle>Book A Demo</DrawerTitle>
            <DrawerDescription>
              Book a demo to learn more about our product.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex bg-slate-700 w-4xl">
            <FormBookDemo />
            <CalendarBookDemo />
          </div>
          <DrawerFooter>
            <div className="flex w-full">
              <div className="flex-1 text-center">
                <DrawerClose asChild>
                  <Button variant="outline" className="cursor-pointer">
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex-1 text-center">
                <Button className="cursor-pointer">Submit</Button>
              </div>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
