"use client";

const FormBookDemo = () => {
  return (
    <form className="space-y-4 p-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full border rounded-md px-3 py-2"
          placeholder="Enter your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded-md px-3 py-2"
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          type="text"
          className="w-full border rounded-md px-3 py-2"
          placeholder="Enter your company name"
        />
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
