import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="max-w-7xl mt-40 mx-auto h-[calc(100vh-5rem)]">
      <section className="bg-gray-100 w-md mx-auto p-2 rounded-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>

        <form action="" className="flex flex-col items-center">
          <div className="w-full px-4">
            <div id="email" className="py-2">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full"
              />
            </div>
            <div id="password" className="py-2">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full"
              />
            </div>
            <div id="confirm-password" className="py-2">
              <label htmlFor="confirm-password">Confirm Password</label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 mx-auto cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </Button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <p className="text-center">
            <Link
              href="/login"
              className="text-gray-500 hover:text-gray-700 hover:underline"
            >
              Already have an account?
            </Link>
          </p>
          <p className="text-center">
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-gray-700 hover:underline"
            >
              Forgot Password
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
