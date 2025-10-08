'use client';
import Link from 'next/link';
import '@/style/nav-bar.css';

export function NavigationBar() {
  return (
    <nav className="bg-zinc-200 mx-auto max-w-xl rounded-xs z-50 my-2 fixed top-0 left-0 right-0 border-1 border-white navbar-fonts"
      style={{
        boxShadow: "-1px 1px 2px 1px rgba(0, 0, 0, 0.4)",
      }}>
      <ul className="flex gap-4 items-center justify-evenly pt-1">
        <li className="navbar-fonts hover:text-gray-400">
          <Link href="/">Home</Link>
        </li>

        <li className="navbar-fonts hover:text-gray-400">
          <Link href="/products">Products</Link>
        </li>

        <li className="navbar-fonts hover:text-gray-400">
          <Link href="/about">About</Link>
        </li>

        <li className="navbar-fonts hover:text-gray-400">
          <Link href="/news">News</Link>
        </li>
        
        <li className="navbar-fonts hover:text-gray-400">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
