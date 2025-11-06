import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Profile() {
  return (
    <main
      className="h-screen"
      style={{
        backgroundColor: "#f2eded",
      }}
    >
      <section
        className="max-w-7xl mx-auto h-[calc(100vh-10rem)]"
        style={{
          backgroundColor: "#f2eded",
        }}
      >
        <div className="h-20"></div>
        <article className="w-full  mx-auto p-2 text-gray-700">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 mt-2">
            <Input
              placeholder="First Name"
              className="border border-gray-400"
            />
            <Input placeholder="Last Name" className="border border-gray-400" />
            <Input placeholder="Phone" className="border border-gray-400" />
          </div>
        </article>
        <article className="w-full  mx-auto p-2 text-gray-700">
          <h2 className="text-2xl font-bold">Company Information</h2>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 mt-2">
            <Input
              placeholder="Company Name"
              className="border border-gray-400"
            />
            <Input
              placeholder="Company Address"
              className="border border-gray-400"
            />
            <Input
              placeholder="Company Phone"
              className="border border-gray-400"
            />
            <Input
              placeholder="Company Website"
              className="border border-gray-400"
            />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value="apple">CEO / Founder</SelectItem>
                  <SelectItem value="banana">CTO / CIO</SelectItem>
                  <SelectItem value="blueberry">
                    HR / People Operation
                  </SelectItem>
                  <SelectItem value="grapes">Manager / Team Lead</SelectItem>
                  <SelectItem value="pineapple">Employee</SelectItem>
                  <SelectItem value="orange">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-20 flex items-center">
            <Button className="mx-auto">Submit</Button>
          </div>
        </article>
        <div className="h-[1px] w-full bg-gray-400 mb-4"></div>
        <div className="flex md:flex-row flex-col md:gap-8 gap-2 justify-evenly">
          <Button className="mx-auto cursor-pointer">Your Vest List</Button>
          <Button className="mx-auto cursor-pointer">Track Orders</Button>
          <Button className="mx-auto cursor-pointer">Support</Button>
          <Button className="mx-auto cursor-pointer">Discount coupon</Button>
          <Button className="mx-auto cursor-pointer">Garanty</Button>
        </div>
      </section>
    </main>
  );
}
