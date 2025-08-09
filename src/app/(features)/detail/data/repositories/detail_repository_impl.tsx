import { DetailRepository } from "../../domain/repositories/detail_repository";
import { PokemonDetailEntity } from "../../domain/entities/pokemon_detail_entity";
import { PokemonDetailModel } from "../models/pokemon_detail_model";
import { DetailRemoteDatasource } from "../data_sources/detail_remote_datasource";

export class DetailRepositoryImpl implements DetailRepository {
  datasource: DetailRemoteDatasource;

  constructor() {
    this.datasource = new DetailRemoteDatasource();
  }

  async getPokemonDetail(id: number): Promise<PokemonDetailEntity> {
    const json = await this.datasource.fetchPokemonDetail(id);
    return PokemonDetailModel.fromJson(json);
  }
}   
