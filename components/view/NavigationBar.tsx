"use client";
import Link from "next/link";
import "@/style/nav-bar.css";
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
        <nav className="mx-auto max-w-md z-50 my-2 fixed top-2 left-0 right-0 bg-">
          <ul className="flex gap-4 items-center justify-evenly bg-">
            <Link href="/">
              <Button
                variant="default"
                className="cursor-pointer bg-slate-800 border border-slate-600 hover:bg-slate-500"
              >
                <li>
                  Home
                </li>
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="default"
                className="cursor-pointer bg-slate-800 border border-slate-600 hover:bg-slate-500"
              >
                <li>
                 Products
                </li>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="default"
                className="cursor-pointer bg-slate-800 border border-slate-600 hover:bg-slate-500"
              >
                <li>
                  About
                </li>
              </Button>
            </Link>

            <Link href="/news">
              <Button
                variant="default"
                className="cursor-pointer bg-slate-800 border border-slate-600 hover:bg-slate-500"
              >
                <li>
                  News
                </li>
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="default"
                className="cursor-pointer bg-slate-800 border border-slate-600 hover:bg-slate-500"
              >
                <li>
                  Contact
                </li>
              </Button>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}
