'use client';
import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </li>

        <li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </li>
        <li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}
