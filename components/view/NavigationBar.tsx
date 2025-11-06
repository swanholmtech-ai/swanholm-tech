"use client";
import { Poppins } from "next/font/google";

import Link from "next/link";
import "@/style/nav-buttons.css";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { HamburgerMenu } from "./HamburgerMenu";
import { ServicesDropDown } from "./navigation-bar/ServicesDropDown";
import { useTranslations } from "next-intl";
import LanguageToggle from "../LanguageToggle";

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});
export function NavigationBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const t = useTranslations("navbar");
  return (
    <>
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <nav className="mx-auto max-w-md z-50 fixed top-1 left-0 right-0">
          <ul className="flex gap-4 items-center justify-center">
            {/* <div className="holographic-container">
              <div className="holographic-card">
                <h2>HOLOGRAM</h2>
              </div>
            </div>{" "} */}
            <Link href="/" className="holographic-container">
              <Button
                size="sm"
                variant="default"
                className={`holographic-card ${poppinsThin.className} cursor-pointer`}
              >
                <li>{t("home")}</li>
              </Button>
            </Link>
            <Link href="/products" className="holographic-container">
              <Button
                size="sm"
                variant="default"
                className={`holographic-card ${poppinsThin.className} cursor-pointer`}
              >
                <li>{t("products")}</li>
              </Button>
            </Link>
            <Link href="/about" className="holographic-container">
              <Button
                size="sm"
                variant="default"
                className={`holographic-card ${poppinsThin.className} cursor-pointer`}
              >
                <li>{t("about")}</li>
              </Button>
            </Link>
            <Link href="/news" className="holographic-container">
              <Button
                size="sm"
                variant="default"
                className={`holographic-card ${poppinsThin.className} cursor-pointer`}
              >
                <li>{t("news")}</li>
              </Button>
            </Link>
            <Link href="/contact" className="holographic-container">
              <Button
                size="sm"
                variant="default"
                className={`holographic-card ${poppinsThin.className} cursor-pointer`}
              >
                <li>{t("contact")}</li>
              </Button>
            </Link>
            <li>
              <ServicesDropDown />
            </li>
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
