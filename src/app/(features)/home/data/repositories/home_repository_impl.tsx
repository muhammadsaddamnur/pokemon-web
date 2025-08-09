import { HomeRepository } from "../../domain/repositories/home_repository";
import { PokemonListEntity } from "../../domain/entities/pokemon_entity";
import { PokemonModel } from "../models/pokemon_model";
import { HomeRemoteDatasource } from "../data_sources/home_remote_datasource";

export class HomeRepositoryImpl implements HomeRepository {
  datasource: HomeRemoteDatasource;

  constructor() {
    this.datasource = new HomeRemoteDatasource();
  }

  async getPokemonList(offset: number, limit: number): Promise<PokemonListEntity> {
    const json = await this.datasource.fetchPokemonList(offset, limit);
    return PokemonModel.fromJson(json);
  }
}
