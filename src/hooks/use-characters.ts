import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, QueryParams } from "@/lib/types";
import { CHARACTERS_ENDPOINT } from "@/lib/constants";

export const fetchCharacters = async (
  queryParams: QueryParams
): Promise<ApiResponse> => {
  // Query parametrelerinden sorgu stringi oluştur
  const queryString = Object.entries(queryParams)
    .filter(([key, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join("&");

  const response = await axios.get<ApiResponse>(
    `${CHARACTERS_ENDPOINT}${queryString ? `?${queryString}` : ""}`
  );

  return response.data;
};

export const useCharacters = (queryParams: QueryParams) => {
  return useQuery({
    queryKey: ["characters", queryParams],
    queryFn: () => fetchCharacters(queryParams),
    staleTime: 1000 * 60 * 5,
  });
};
