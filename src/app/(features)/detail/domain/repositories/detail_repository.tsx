import { PokemonDetailEntity } from "../entities/pokemon_detail_entity";

export abstract class DetailRepository {
  abstract getPokemonDetail(
    id: number,
  ): Promise<PokemonDetailEntity>;
}
