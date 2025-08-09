import { PokemonListEntity } from "../entities/pokemon_entity";
import { HomeRepository } from "../repositories/home_repository";

export class GetPokemonListUseCase {
  constructor(private repository: HomeRepository) {}

  async execute(offset: number, limit: number): Promise<PokemonListEntity> {
    return await this.repository.getPokemonList(offset, limit);
  }
}
