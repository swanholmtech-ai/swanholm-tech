import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SignupPage() {
  const t = useTranslations("sign-up");
  return (
    <main className="max-w-7xl mt-40 mx-auto h-[calc(100vh-10rem)]">
      <section className="w-md mx-auto p-2 rounded-sm text-gray-200  md:border md:border-gray-700 md:shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">{t("signup")}</h1>

        <form action="" className="flex flex-col items-center">
          <div className="w-full px-4">
            <div id="email" className="py-2">
              <label htmlFor="email">{t("email")}</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={t("email")}
                className="w-full"
              />
            </div>
            <div id="password" className="py-2">
              <label htmlFor="password">{t("password")}</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder={t("password")}
                className="w-full"
              />
            </div>
            <div id="confirm-password" className="py-2">
              <label htmlFor="confirm-password">{t("confirmPassword")}</label>
              <Input
                type="password"
                id="confirm-password"
                placeholder={t("confirmPassword")}
                name="confirm-password"
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="outline"
            className="mt-6 mx-auto cursor-pointer hover:bg-gray-600 transition-colors text-gray-700"
          >
            {t("submit")}
          </Button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <p className="text-center">
            <Link
              href="/login"
              className="text-gray-500 hover:text-gray-300 hover:underline"
            >
              {t("already-have-account")}
            </Link>
          </p>
          <p className="text-center">
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-gray-300 hover:underline"
            >
              {t("forgotPassword")}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
