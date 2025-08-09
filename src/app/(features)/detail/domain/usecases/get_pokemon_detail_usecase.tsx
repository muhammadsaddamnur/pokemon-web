import { PokemonDetailEntity } from "../entities/pokemon_detail_entity";
import { DetailRepository } from "../repositories/detail_repository";

export class GetPokemonDetailUseCase {
  constructor(private repository: DetailRepository) {}

  async execute(id: number): Promise<PokemonDetailEntity> {
    return await this.repository.getPokemonDetail(id);
  }
}
