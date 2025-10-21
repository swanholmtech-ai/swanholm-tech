"use client";
import { Poppins } from "next/font/google";

import Link from "next/link";
import "@/style/nav-bar.css";
import "@/style/nav-buttons.css";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { HamburgerMenu } from "./HamburgerMenu";
import { ServicesDropDown } from "./navigation-bar/ServicesDropDown";

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});
export function NavigationBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <nav className="mx-auto max-w-md z-50 my-2 fixed top-2 left-0 right-0 bg-">
          <ul className="flex gap-4 items-center justify-evenly bg-">
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
                <li>Home</li>
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="sm"
                variant="default"
                className={`cursor-pointer hover:bg-slate-500 hover:scale-108 transition-all duration-300 ${poppinsThin.className}`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <li>Products</li>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="sm"
                variant="default"
                className={`cursor-pointer hover:bg-slate-500 hover:scale-108 transition-all duration-300 ${poppinsThin.className}`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <li>About</li>
              </Button>
            </Link>
            <Link href="/news">
              <Button
                size="sm"
                variant="default"
                className={`cursor-pointer hover:bg-slate-500 hover:scale-108 transition-all duration-300 ${poppinsThin.className}`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <li>News</li>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                variant="default"
                className={`cursor-pointer hover:bg-slate-500 hover:scale-108 transition-all duration-300 ${poppinsThin.className}`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <li>Contact</li>
              </Button>
            </Link>
            <li>
              <ServicesDropDown />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
