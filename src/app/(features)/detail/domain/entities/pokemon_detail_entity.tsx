export interface PokemonDetailEntity {
  abilities?: Ability[];
  base_experience?: number;
  forms?: Species[];
  game_indices?: GameIndex[];
  height?: number;
  held_items?: any[];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Move[];
  name?: string;
  order?: number;
  past_types?: any[];
  species?: Species;
  sprites?: Sprites;
  stats?: Stat[];
  types?: Type[];
  weight?: number;
}

export interface Ability {
  ability?: Species;
  is_hidden?: boolean;
  slot?: number;
}

export interface Species {
  name?: string;
  url?: string;
}

export interface GameIndex {
  game_index?: number;
  version?: Species;
}

export interface Move {
  move?: Species;
  version_group_details?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at?: number;
  move_learn_method?: Species;
  version_group?: Species;
}

export interface Sprites {
  back_default?: string;
  back_female?: any;
  back_shiny?: string;
  back_shiny_female?: any;
  front_default?: string;
  front_female?: any;
  front_shiny?: string;
  front_shiny_female?: any;
  other?: Other;
  versions?: Versions;
}

export interface Other {
  dream_world?: DreamWorld;
  home?: Home;
  official_artwork?: OfficialArtwork;
}

export interface DreamWorld {
  front_default?: string;
  front_female?: any;
}

export interface Home {
  front_default?: string;
  front_female?: any;
  front_shiny?: string;
  front_shiny_female?: any;
}

export interface OfficialArtwork {
  front_default?: string;
  front_shiny?: string;
}

export interface Versions {
  generation_i?: GenerationI;
  generation_ii?: GenerationIi;
  generation_iii?: GenerationIii;
  generation_iv?: GenerationIv;
  generation_v?: GenerationV;
  generation_vi?: GenerationVi;
  generation_vii?: GenerationVii;
  generation_viii?: GenerationViii;
}

export interface GenerationI {
  red_blue?: RedBlue;
  yellow?: RedBlue;
}

export interface RedBlue {
  back_default?: string;
  back_gray?: string;
  back_transparent?: string;
  front_default?: string;
  front_gray?: string;
  front_transparent?: string;
}

export interface GenerationIi {
  crystal?: Crystal;
  gold?: Gold;
  silver?: Gold;
}

export interface Crystal {
  back_default?: string;
  back_shiny?: string;
  back_shiny_transparent?: string;
  back_transparent?: string;
  front_default?: string;
  front_shiny?: string;
  front_shiny_transparent?: string;
  front_transparent?: string;
}

export interface Gold {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald?: OfficialArtwork;
  firered_leafgreen?: FireredLeafgreen;
  ruby_sapphire?: FireredLeafgreen;
}

export interface FireredLeafgreen {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
}

export interface GenerationIv {
  diamond_pearl?: DiamondPearl;
  heartgold_soulsilver?: DiamondPearl;
  platinum?: DiamondPearl;
}

export interface DiamondPearl {
  back_default?: string;
  back_female?: any;
  back_shiny?: string;
  back_shiny_female?: any;
  front_default?: string;
  front_female?: any;
  front_shiny?: string;
  front_shiny_female?: any;
}

export interface GenerationV {
  black_white?: BlackWhite;
}

export interface BlackWhite {
  animated?: Animated;
  back_default?: string;
  back_female?: any;
  back_shiny?: string;
  back_shiny_female?: any;
  front_default?: string;
  front_female?: any;
  front_shiny?: string;
  front_shiny_female?: any;
}

export interface Animated {
  back_default?: string;
  back_female?: any;
  back_shiny?: string;
  back_shiny_female?: any;
  front_default?: string;
  front_female?: any;
  front_shiny?: string;
  front_shiny_female?: any;
}

export interface GenerationVi {
  omegaruby_alphasapphire?: Home;
  x_y?: Home;
}

export interface GenerationVii {
  icons?: Icons;
  ultra_sun_ultra_moon?: Home;
}

export interface Icons {
  front_default?: string;
  front_female?: any;
}

export interface GenerationViii {
  icons?: Icons;
}

export interface Stat {
  base_stat?: number;
  effort?: number;
  stat?: Species;
}

export interface Type {
  slot?: number;
  type?: Species;
}
