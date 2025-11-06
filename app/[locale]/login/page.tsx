import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  return (
    <main className="max-w-7xl mt-40 mx-auto h-[calc(100vh-10rem)]">
      <section className="w-md mx-auto p-2 rounded-sm text-gray-200  md:border md:border-gray-700 md:shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

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
          </div>
          <Button
            type="submit"
            variant="outline"
            className="mt-6 mx-auto cursor-pointer hover:bg-gray-600 transition-colors text-gray-700"
          >
            Login
          </Button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <p className="text-center">
            <Link
              href="/signup"
              className="text-gray-500 hover:text-gray-300 hover:underline"
            >
              Don&apos;t have an account?
            </Link>
          </p>
          <p className="text-center">
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-gray-300 hover:underline"
            >
              Forgot Password
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
