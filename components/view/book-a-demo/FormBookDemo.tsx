"use client";

import { Input } from "@/components/ui/input";

const FormBookDemo = () => {
  return (
    <form className="">
      <div className="flex flex-col lg:flex-row mx-2 w-[94vw] md:w-full">
        <div className="flex-1">
          <div className="">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium">
              Company
            </label>
            <Input
              id="company"
              type="text"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="flex-1 mr-0 ml-0 lg:mr-4 lg:ml-2">
          <label htmlFor="message" className="text-sm font-medium">
            Extra Information
          </label>
          <textarea
            id="message"
            className="w-full border rounded-md mr-2 p-2"
            placeholder="Enter your message"
            rows={6}
          />
        </div>
      </div>

      {/* <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Book Demo
      </button> */}
    </form>
  );
};

export default FormBookDemo;
