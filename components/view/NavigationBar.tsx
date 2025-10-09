"use client";
import Link from "next/link";
import "@/style/nav-bar.css";
import { Home, Shirt, Store, Newspaper, Send } from "lucide-react";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { HamburgerMenu } from "./HamburgerMenu";

export function NavigationBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <nav className="mx-auto max-w-md z-50 my-2 fixed top-0 left-0 right-0">
          <ul className="flex gap-4 items-center justify-evenly">
            <Link href="/">
              <Button
                variant="default"
                size="icon-lg"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full navbar-button-shadow"
              >
                <li>
                  <Home />
                </li>
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="default"
                size="icon-lg"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full navbar-button-shadow"
              >
                <li>
                  <Shirt />
                </li>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="default"
                size="icon-lg"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full navbar-button-shadow"
              >
                <li>
                  <Store />
                </li>
              </Button>
            </Link>

            <Link href="/news">
              <Button
                variant="default"
                size="icon-lg"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full navbar-button-shadow"
              >
                <li>
                  <Newspaper />
                </li>
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="default"
                size="icon-lg"
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-full navbar-button-shadow"
              >
                <li>
                  <Send />
                </li>
              </Button>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}
