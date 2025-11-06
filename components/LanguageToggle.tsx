// import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageToggle = () => {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "sv" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    <section
      className="cursor-pointer absolute top-1 bg-sky-900/50 w-8 h-8 flex items-center justify-center hover:bg-sky-900"
      onClick={toggleLanguage}
    >
      <article className="shopping-cart-div text-white">
        {/* <Image
          src={
            locale === "en"
              ? "/assets/svgs/flag-uk.svg"
              : "/assets/svgs/flag-se.svg"
          }
          alt={locale === "en" ? "English" : "Swedish"}
          width={26}
          height={26}
        /> */}
        {locale === "en" ? "EN" : "SV"}
      </article>
    </section>
  );
};

export default LanguageToggle;
