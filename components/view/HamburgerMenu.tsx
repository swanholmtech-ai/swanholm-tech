import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";

export function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer fixed top-4 left-6 bg-orange-500 hover:bg-orange-600 rounded-sm text-white hover:text-gray-200 shadow-sm z-50"
        style={{
          boxShadow: "-1px 1px 2px 1px rgba(0, 0, 0, 0.7)",
        }}
      >
        <Button>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <Link href="/profile">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
        </Link>
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/products">
            <DropdownMenuItem>Products</DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link href="/news">
            <DropdownMenuItem>News</DropdownMenuItem>
          </Link>
          <Link href="/contact">
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
