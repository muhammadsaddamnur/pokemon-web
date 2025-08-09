export class DetailRemoteDatasource {
  async fetchPokemonDetail(id: number): Promise<PokemonDetailEntity> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    if (!res.ok) throw new Error("Failed to fetch Pokémon detail");
    return res.json();
  }
}
