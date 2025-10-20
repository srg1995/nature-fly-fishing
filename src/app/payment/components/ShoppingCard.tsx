import Dropdown from "@/app/components/Dropdown";
import { useUserContext } from "@/app/context/userContext";
import React from "react";

export default function ShoppingCart() {
  const { shoppingCart } = useUserContext();
  const total = shoppingCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (shoppingCart.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Tu carrito está vacío 🛒
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-semibold">Carrito de compras</h2>

      <ul className="space-y-4">
        {shoppingCart.map((item, index) => (
          <li
            key={index}
            className="bg-secondary/50 flex items-center justify-between rounded-md p-4 shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-tertiary font-semibold">{item.product}</h3>
                <p className="text-primary text-sm">Tamaño: #{item.size}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-tertiary font-semibold">
                {item.price.toFixed(2)} €
              </p>
              <p className="text-primary text-sm">Cantidad: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right text-lg font-bold">
        Total: {total.toFixed(2)} €
      </div>
    </div>
  );
}
