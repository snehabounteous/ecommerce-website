"use client";

import Image from "next/image";
import { Button } from "@/components/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex gap-4 items-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <Button
                variant="destructive"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <Button variant="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
}
