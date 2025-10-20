"use client";
import React, { JSX } from "react";
import ShoppingCard from "./components/ShoppingCard";
import Dropdown from "../components/Dropdown";
import AddressForm from "./components/AddressForm";
import MethodForm from "./components/MethodForm";

export default function Payment(): JSX.Element {
  return (
    <div className="mx-auto my-12 flex max-w-4xl flex-col gap-6">
      <Dropdown title="Ver detalles del carrito" isopen={true}>
        <ShoppingCard />
      </Dropdown>
      <Dropdown title="Información de Envío">
        <AddressForm />
      </Dropdown>
      <Dropdown title="Método de Pago">
        <MethodForm />
      </Dropdown>
    </div>
  );
}
