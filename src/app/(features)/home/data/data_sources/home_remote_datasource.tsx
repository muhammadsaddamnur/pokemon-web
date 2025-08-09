import { PokemonListEntity } from '../../domain/entities/pokemon_entity';

export class HomeRemoteDatasource {
  async fetchPokemonList(offset: number, limit: number): Promise<PokemonListEntity> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset);
    if (!res.ok) throw new Error("Failed to fetch Pokémon list");
    return res.json();
  }
}
