'use client';
import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav className="bg-slate-600 mx-auto max-w-xl text-gray-200 rounded-xs h-8 z-50 my-2">
      <ul className="flex gap-4 items-center justify-evenly pt-1">
        <li className=" hover:text-gray-400">
          <Link href="/">Home</Link>
        </li>

        <li className=" hover:text-gray-400">
          <Link href="/products">Products</Link>
        </li>

        <li className=" hover:text-gray-400">
          <Link href="/about">About</Link>
        </li>

        <li className=" hover:text-gray-400">
          <Link href="/news">News</Link>
        </li>
        
        <li className=" hover:text-gray-400">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
