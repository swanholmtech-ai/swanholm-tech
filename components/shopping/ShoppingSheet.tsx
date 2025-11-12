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
      <SheetContent style={{ width: "1000px" }}>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Items</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            {items.map((item, index) => (
              <div key={`${index}-${item.id}`}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.size}</p>
                <Trash2
                  size={20}
                  onClick={() => removeFromCart(item)}
                  className="cursor-pointer"
                />
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
