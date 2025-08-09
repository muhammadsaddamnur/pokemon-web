import {
  PokemonListEntity,
  PokemonEntity,
} from "../../domain/entities/pokemon_entity";

export class PokemonModel {
  static fromJson(json: any): PokemonListEntity {
    return {
      count: json.count,
      next: json.next,
      previous: json.previous,
      results: json.results.map((item: any) => ({
        name: item.name,
        url: item.url,
      })),
    };
  }
}
