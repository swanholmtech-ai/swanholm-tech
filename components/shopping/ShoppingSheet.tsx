import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Trash2 } from "lucide-react";

import { ShoppingCart } from "lucide-react";
import { useShoppingCartStore } from "@/store/useShoppingCartStore";

export function ShoppingSheet() {
  const { items, totalPrice, removeFromCart } = useShoppingCartStore();
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="cursor-pointer top-2 right-[2%] xl:right-[10%] z-50 fixed bg-yellow-400 hover:bg-yellow-600 rounded-full w-8 h-8"
      >
        <Button variant="outline">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Items</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min px-1">
          <div className="grid gap-1">
            {items.map((item, index) => (
              <div
                key={`${index}-${item.id}`}
                className="flex flex-col bg-sky-100 p-1 rounded-sm"
              >
                <div>
                  <p>{item.name}</p>
                </div>
                <div className="flex gap-2 items-center justify-between">
                  <p>
                    <span className="font-bold text-sky-700">S:</span>{" "}
                    {item.size}
                  </p>
                  <p>
                    <span className="font-bold text-sky-700">Q:</span>{" "}
                    {item.quantity}
                  </p>
                  <p>
                    <span className="font-bold text-sky-700">P:</span>{" "}
                    {item.price}
                  </p>
                  <Trash2
                    size={20}
                    onClick={() => removeFromCart(item)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <>Total Price: {totalPrice}</>
          <Button type="submit">Checkout</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
