"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sneackers } from "../../api/sneackers";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Catalog({ handleAddToCart }) {
  const [items, setItems] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const AddCard = (sneacker) => {
    setItems(sneacker);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(sneacker);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const filteredSneackers = sneackers.filter(
    (sneacker) =>
      sneacker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sneacker.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const OpenModal = () => {
    const modal = document.getElementById("myModal");
    const spanClose = document.getElementById("close");

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  const CloseModal = () => {
    const modal = document.getElementById("myModal");
    const spanClose = document.getElementById("close");

    modal.classList.remove("flex");
    modal.classList.add("hidden");
  };

  return (
    <div className=" flex items-center w-full flex-col">
      <div className="my-4 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Найти модель"
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <div
        id="myModal"
        className="fixed inset-0 hidden items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto">
          <span
            onClick={() => CloseModal()}
            id="close"
            className="close text-gray-500 text-2xl font-bold cursor-pointer float-right"
          >
            &times;
          </span>
          <p>Выберите размер:</p>
          <br></br>
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => CloseModal()}
              className="focus:outline-none focus:ring focus:ring-gray-300"
            >
              43
            </Button>
            <Button
              onClick={() => CloseModal()}
              className="focus:outline-none focus:ring focus:ring-gray-300"
            >
              44
            </Button>
            <Button
              onClick={() => CloseModal()}
              className="focus:outline-none focus:ring focus:ring-gray-300"
            >
              45
            </Button>
            <Button
              onClick={() => CloseModal()}
              className="focus:outline-none focus:ring focus:ring-gray-300"
            >
              46
            </Button>
          </div>
        </div>
      </div>
      <main className="flex flex-wrap justify-center mt-10 w-[1400px] gap-16">
        {filteredSneackers.length > 0 ? (
          filteredSneackers.map((sneacker) => (
            <Card className="w-[400px]" key={sneacker.id}>
              <CardHeader>
                <CardTitle>{sneacker.model}</CardTitle>
                <CardDescription>{sneacker.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  className="h-56"
                  src={sneacker.image}
                  alt={sneacker.model}
                  width={300}
                  height={300}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="font-semibold text-lg">{sneacker.price}$</p>
                <Link
                  href={`/product/${sneacker.id}`}
                  className="text-muted-foreground"
                >
                  {sneacker.description}
                </Link>
                <button
                  onClick={() => {
                    AddCard(sneacker);
                    OpenModal();
                  }}
                >
                  Добавить в корзину
                </button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Кроссовки не найдены</p>
        )}
      </main>
    </div>
  );
}
