import { PokemonListEntity } from "../entities/pokemon_entity";

export abstract class HomeRepository {
  abstract getPokemonList(offset: number, limit: number): Promise<PokemonListEntity>;
}
