import { create } from "zustand";
import { PokemonEntity } from "./domain/entities/pokemon_entity";
import { GetPokemonListUseCase } from "./domain/usecases/get_pokemon_list_usecase";
import { HomeRepositoryImpl } from "./data/repositories/home_repository_impl";

interface HomeState {
  pokemons: PokemonEntity[];
  loading: boolean;
  offset: number;
  limit: number;
  fetchPokemons: () => Promise<void>;
  reset: () => void;
}

export const useHomeState = create<HomeState>((set, get) => ({
  pokemons: [],
  loading: false,
  offset: 0,
  limit: 50,

  fetchPokemons: async () => {
    try {
      set({ loading: true });
      const { offset, limit } = get();

      const repo = new HomeRepositoryImpl();
      const usecase = new GetPokemonListUseCase(repo);
      const data = await usecase.execute(offset, limit);

      set((state) => {
        const newOffset = state.offset + state.limit;

        return {
          pokemons: [...state.pokemons, ...data.results],
          loading: false,
          offset: newOffset,
        };
      });
    } catch (error) {
      set({ loading: false });
      console.error("Error fetching pokemons:", error);
    }
  },

  reset: () => set({ pokemons: [], offset: 0 }),
}));
