"use client";

import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import { useDetailState } from "@/app/(features)/detail/[id]/detail_state";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function DetailPage() {
  const { pokemon, fetchPokemon } = useDetailState();

  const id = useParams().id;

  useEffect(() => {
    fetchPokemon(Number(id));
  }, [id, fetchPokemon]);
  
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 py-8 pr-8 pl-8 md:ml-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden w-full max-w-sm">
              <div className="absolute inset-0 bg-opacity-50 flex items-start justify-start p-4">
                <p className="text-black-200 text-8xl font-bold">
                  #{pokemon.id}
                </p>
              </div>
              {pokemon?.id ? (
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={`${pokemon.name || 'Pokemon'}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="animate-pulse">
                  <div className="h-100 w-100 bg-gray-200 rounded-lg"></div>
                </div>
              )}
            </div>

            {/* Name */}
            <h1 className="text-xl font-semibold text-black pt-3">
              {pokemon.name ? (
                pokemon.name.toUpperCase()
              ) : (
                <div className="animate-pulse">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
              )}
            </h1>

            {/* Species */}
            <div className="text-gray-600">
              {pokemon?.species ? (
                <>
                  <span>species: {pokemon?.species?.name ? pokemon.species.name : ""}</span>
                  <br />
                  <span>height: {pokemon?.height ? pokemon.height / 10 : 0} m</span>
                  <br />
                  <span>weight: {pokemon?.weight ? pokemon.weight / 10 : 0} kg</span>
                </>
              ) : (
                <div className="animate-pulse">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Types */}
            <h1 className="text-xl py-3 font-semibold text-black">Types</h1>
            <div className="flex flex-wrap space-x-2">
              {pokemon?.types ? (
                pokemon.types.map((type) => (
                  <span
                    key={type?.type?.name}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {type?.type?.name}
                  </span>
                ))
              ) : (
                <div className="animate-pulse">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Abilities */}
            <h1 className="text-xl py-3 font-semibold text-black">Abilities</h1>
            {pokemon?.abilities ? (
              <div className="flex flex-wrap space-x-2">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability?.ability?.name}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {ability?.ability?.name}
                  </span>
                ))}
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
              </div>
            )}
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <h1 className="text-xl py-3 font-semibold text-black">Stats</h1>
            <div className="relative aspect-square rounded-lg h-80 overflow-hidden w-full md:max-w-sm">
              {pokemon?.stats ? (
                <div>
                  {pokemon.stats.map((stat) => (
                    <div key={stat?.stat?.name}>
                      <div className="flex justify-between text-gray-500">
                        <span>{stat?.stat?.name ? stat.stat.name : ""}</span>
                        <span>{stat?.base_stat ? stat.base_stat : 0}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-green-600 h-4 rounded-full"
                          style={{ width: `${stat?.base_stat ? stat.base_stat : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="animate-pulse space-y-2">
                  <div className="h-6 w-100 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-100 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-100 bg-gray-200 rounded-full"></div>
                  <div className="h-6 w-100 bg-gray-200 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Moves */}
            <h1 className="text-xl py-3 font-semibold text-black">Moves</h1>
            {pokemon?.moves ? (
              <div className="flex flex-wrap space-x-2 space-y-2">
                {pokemon.moves.map((move) => (
                  <span
                    key={move?.move?.name}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {move?.move?.name}
                  </span>
                ))}
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="h-6 w-100 bg-gray-200 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
