"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navStyler = "text-white bg-cyan-600 hover:bg-cyan-600 hover:text-gray-600 transition-all duration-300"
export function NavigationBar() {
  return (
    <NavigationMenu viewport={false} className="max-w-screen-md mx-auto bg-cyan-600 mt-4 rounded-sm">
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navStyler}`}>
            <Link href="/docs">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navStyler}`}>
            <Link href="/docs">Products</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navStyler}`}>
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navStyler}`}>
            <Link href="/docs">News</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navStyler}`}>
            <Link href="/docs">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

