import {
  PokemonDetailEntity,
  Ability,
  Species,
  GameIndex,
  Move,
  VersionGroupDetail,
  Sprites,
  Other,
  DreamWorld,
  Home,
  OfficialArtwork,
  Versions,
  GenerationI,
  RedBlue,
  GenerationIi,
  Crystal,
  Gold,
  GenerationIii,
  FireredLeafgreen,
  GenerationIv,
  DiamondPearl,
  GenerationV,
  BlackWhite,
  Animated,
  GenerationVi,
  GenerationVii,
  Icons,
  GenerationViii,
  Stat,
  Type,
} from "../../domain/entities/pokemon_detail_entity";

export class PokemonDetailModel {
  static fromJson(json: any): PokemonDetailEntity {
    return {
      abilities: json.abilities?.map((a: any) => ({
        ability: a.ability
          ? { name: a.ability.name, url: a.ability.url }
          : undefined,
        is_hidden: a.is_hidden,
        slot: a.slot,
      })),
      base_experience: json.base_experience,
      forms: json.forms?.map((f: any) => ({
        name: f.name,
        url: f.url,
      })),
      game_indices: json.game_indices?.map((gi: any) => ({
        game_index: gi.game_index,
        version: gi.version
          ? { name: gi.version.name, url: gi.version.url }
          : undefined,
      })),
      height: json.height,
      held_items: json.held_items,
      id: json.id,
      is_default: json.is_default,
      location_area_encounters: json.location_area_encounters,
      moves: json.moves?.map((m: any) => ({
        move: m.move ? { name: m.move.name, url: m.move.url } : undefined,
        version_group_details: m.version_group_details?.map((vgd: any) => ({
          level_learned_at: vgd.level_learned_at,
          move_learn_method: vgd.move_learn_method
            ? {
                name: vgd.move_learn_method.name,
                url: vgd.move_learn_method.url,
              }
            : undefined,
          version_group: vgd.version_group
            ? { name: vgd.version_group.name, url: vgd.version_group.url }
            : undefined,
        })),
      })),
      name: json.name,
      order: json.order,
      past_types: json.past_types,
      species: json.species
        ? { name: json.species.name, url: json.species.url }
        : undefined,
      sprites: json.sprites
        ? {
            back_default: json.sprites.back_default,
            back_female: json.sprites.back_female,
            back_shiny: json.sprites.back_shiny,
            back_shiny_female: json.sprites.back_shiny_female,
            front_default: json.sprites.front_default,
            front_female: json.sprites.front_female,
            front_shiny: json.sprites.front_shiny,
            front_shiny_female: json.sprites.front_shiny_female,
            other: json.sprites.other
              ? {
                  dream_world: json.sprites.other.dream_world
                    ? {
                        front_default:
                          json.sprites.other.dream_world.front_default,
                        front_female:
                          json.sprites.other.dream_world.front_female,
                      }
                    : undefined,
                  home: json.sprites.other.home
                    ? {
                        front_default: json.sprites.other.home.front_default,
                        front_female: json.sprites.other.home.front_female,
                        front_shiny: json.sprites.other.home.front_shiny,
                        front_shiny_female:
                          json.sprites.other.home.front_shiny_female,
                      }
                    : undefined,
                  official_artwork: json.sprites.other.official_artwork
                    ? {
                        front_default:
                          json.sprites.other.official_artwork.front_default,
                        front_shiny:
                          json.sprites.other.official_artwork.front_shiny,
                      }
                    : undefined,
                }
              : undefined,
            versions: json.sprites.versions, // kalau mau, ini bisa di-mapping detail juga
          }
        : undefined,
      stats: json.stats?.map((s: any) => ({
        base_stat: s.base_stat,
        effort: s.effort,
        stat: s.stat ? { name: s.stat.name, url: s.stat.url } : undefined,
      })),
      types: json.types?.map((t: any) => ({
        slot: t.slot,
        type: t.type ? { name: t.type.name, url: t.type.url } : undefined,
      })),
      weight: json.weight,
    };
  }
}
