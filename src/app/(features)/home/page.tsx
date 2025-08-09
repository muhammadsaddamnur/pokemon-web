"use client";

import Image from "next/image";
import Sidebar from "@/app/components/sidebar";

import { useEffect } from "react";
import { useHomeState } from "./home_state";

export default function HomePage() {
  const { pokemons, loading, fetchPokemons } = useHomeState();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 py-8 pr-8 pl-8 md:ml-64">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {pokemons.map((pokemon) => {
            const id = new URL(pokemon.url).pathname.split("/")[4];

            return (
              <div
                key={`${id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer transition-shadow duration-300"
                onClick={() => {
                  window.location.href = `/detail/${id}`;
                }}
              >
                <div className="relative aspect-square w-full max-w-sm mx-auto rounded-lg overflow-hidden">
                  <span className="absolute top-4 left-4 text-7xl font-bold">
                    #{id}
                  </span>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={pokemon.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-xl font-semibold mt-3 text-gray-800">
                  {pokemon.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8 col-span-full">
          <button
            onClick={fetchPokemons}
            className="bg-gray-600 text-white px-4 py-2 rounded-4xl disabled:opacity-50 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </main>
    </div>
  );
}
