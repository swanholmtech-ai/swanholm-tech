"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CalendarBookDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [hour, setHour] = React.useState<string>("09");
  const [minute, setMinute] = React.useState<string>("00");

  const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  const minutes = ["00", "15", "30", "45"];

  return (
    <div className="flex flex-col items-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
      <div className="mt-4 p-2">
        <label htmlFor="time-select" className="block mb-2">
          Select Time
        </label>
        <div className="flex w-[150px] mx-auto">
          <div className="flex-1">
            <Select value={hour} onValueChange={setHour}>
              <SelectTrigger id="hour-select">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={minute} onValueChange={setMinute}>
              <SelectTrigger id="minute-select">
                <SelectValue placeholder="Min" />
              </SelectTrigger>
              <SelectContent>
                {minutes.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
