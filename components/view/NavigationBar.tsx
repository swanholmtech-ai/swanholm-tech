"use client";
import Link from "next/link";
import "@/style/nav-bar.css";

export function NavigationBar() {
  return (
    <nav className="mx-auto max-w-xl z-50 my-2 fixed top-0 left-0 right-0">
      <ul className="flex gap-4 items-center justify-evenly">
        <Link
          href="/"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-xs px-2 py-1 navbar-button-shadow navbar-fonts"
        >
          <li>Home</li>
        </Link>

        <Link
          href="/products"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-xs px-2 py-1 navbar-button-shadow navbar-fonts"
        >
          <li>Products</li>
        </Link>

        <Link
          href="/about"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-xs px-2 py-1 navbar-button-shadow navbar-fonts"
        >
          <li>About</li>
        </Link>

        <Link
          href="/news"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-xs px-2 py-1 navbar-button-shadow navbar-fonts"
        >
          <li>News</li>
        </Link>

        <Link
          href="/contact"
          className="bg-cyan-600 hover:bg-cyan-700 rounded-xs px-2 py-1 navbar-button-shadow navbar-fonts"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
