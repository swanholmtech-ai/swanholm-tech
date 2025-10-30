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
        className="cursor-pointer fixed bottom-4 right-8 z-50 sm:right-20 md:right-24 lg:right-28 xl:right-32"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-slate-700 hover:text-white"
        >
          <CalendarClock size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-slate-300">
        <div className="mx-auto w-full max-w-4xl overflow-x-hidden overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle>Book A Demo</DrawerTitle>
            <DrawerDescription>
              Book a demo to learn more about our product.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex w-4xl flex-col md:flex-row">
            <div className="lg:flex-2 flex-1">
              <FormBookDemo />
            </div>
            <div className="flex-1">
              <CalendarBookDemo />
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-300 mt-24"></div>
          <DrawerFooter
            className="bg-slate-200 fixed bottom-0 w-full max-w-4xl"
            style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)" }}
          >
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
