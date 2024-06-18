export interface Pokemon {
  name: string;
  url: string;
}

export interface BaseItem {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetailsResponse {
  id: number;
  weight: number;
  height: number;
  name: string;
  order: number;
  is_default: boolean;
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: BaseItem[];
  game_indices: Index[];
  held_items: any[];
  location_area_encounters: string;
  moves: Move[];
  past_abilities: any[];
  past_types: any[];
  species: BaseItem;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  ability: BaseItem;
  is_hidden: boolean;
  slot: number;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Index {
  game_index: number;
  version: BaseItem;
}

export interface Move {
  move: BaseItem;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BaseItem;
  version_group: BaseItem;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    [key: string]: {[key: string]: string | null};
  };
  versions: {
    [key: string]: {[key: string]: {[key: string]: string | null}};
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: BaseItem;
}

export interface Type {
  slot: number;
  type: BaseItem;
}
