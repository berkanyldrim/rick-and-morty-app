// API'den gelen karakter yapısı
export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

// API'den gelen bilgi yapısı
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// API yanıtı yapısı
export interface ApiResponse {
  info: Info;
  results: Character[];
}

// Filtre durumu için type
export interface FilterState {
  status: "Alive" | "Dead" | "unknown" | "" | "all";
  gender: "Female" | "Male" | "Genderless" | "unknown" | "" | "all";
  setStatus: (status: "Alive" | "Dead" | "unknown" | "" | "all") => void;
  setGender: (
    gender: "Female" | "Male" | "Genderless" | "unknown" | "" | "all"
  ) => void;
  resetFilters: () => void;
}

// URL query parametrelerini temsil eden type
export interface QueryParams {
  status?: string;
  gender?: string;
  page?: string;
}
