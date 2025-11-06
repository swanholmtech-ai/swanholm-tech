"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useRouter } from "@/i18n/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = Object.fromEntries(
      new FormData(event.currentTarget)
    ) as Record<string, string>;
    console.log(formData);

    const email = formData.email;
    const password = formData.password;

    const { error } = await login(email, password);
    if (error) {
      toast.error(error, {
        duration: 3000,
        position: "top-center",
      });
      return;
    }
    toast.success("Login successful!", {
      duration: 3000,
      position: "top-center",
    });
    router.push("/");
  }

  return (
    <main className="max-w-7xl mt-40 mx-auto h-[calc(100vh-10rem)]">
      <section className="w-md mx-auto p-2 rounded-sm text-gray-200  md:border md:border-gray-700 md:shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
