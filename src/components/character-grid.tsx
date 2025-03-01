"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/hooks/use-characters";
import { QueryParams } from "@/lib/types";
import { CharacterCard } from "@/components/character-card";
import { Pagination } from "@/components/pagination";
import type { Character } from "@/lib/types";

interface CharacterGridProps {
  queryParams: QueryParams;
}

export function CharacterGrid({ queryParams }: CharacterGridProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", queryParams],
    queryFn: () => fetchCharacters(queryParams),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {data.info && <Pagination info={data.info} />}
    </>
  );
}
