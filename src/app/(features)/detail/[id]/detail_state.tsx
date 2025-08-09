import { create } from "zustand";
import { PokemonDetailEntity } from "../domain/entities/pokemon_detail_entity";
import { GetPokemonDetailUseCase } from "../domain/usecases/get_pokemon_detail_usecase";
import { DetailRepositoryImpl } from "../data/repositories/detail_repository_impl";

interface DetailState {
  pokemon: PokemonDetailEntity | null;
  loading: boolean;
  fetchPokemon: (id: number) => Promise<void>;
  reset: () => void;
}

export const useDetailState = create<DetailState>((set) => ({
  pokemon: null,
  loading: false,
  offset: 0,
  limit: 50,

  fetchPokemon: async (id: number) => {
    try {
      set({ loading: true });

      const repo = new DetailRepositoryImpl();
      const usecase = new GetPokemonDetailUseCase(repo);
      const data = await usecase.execute(id);

      set(() => {
        return {
          pokemon: data,
          loading: false,
        };
      });
    } catch (error) {
      set({ loading: false });
      console.error("Error fetching pokemon:", error);
    }
  },

  reset: () => set({ pokemon: null }),
}));
