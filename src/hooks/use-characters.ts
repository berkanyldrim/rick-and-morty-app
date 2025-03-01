import { QueryParams } from "@/lib/types";

export async function fetchCharacters(params: QueryParams) {
  const searchParams = new URLSearchParams();

  if (params.status) searchParams.append("status", params.status);
  if (params.gender) searchParams.append("gender", params.gender);
  if (params.page) searchParams.append("page", params.page);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
