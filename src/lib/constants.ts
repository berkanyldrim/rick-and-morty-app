export const API_BASE_URL = "https://rickandmortyapi.com/api";
export const CHARACTERS_ENDPOINT = `${API_BASE_URL}/character`;

export const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const GENDER_OPTIONS = [
  { value: "all", label: "All Genders" },
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
  { value: "Genderless", label: "Genderless" },
  { value: "unknown", label: "Unknown" },
];
