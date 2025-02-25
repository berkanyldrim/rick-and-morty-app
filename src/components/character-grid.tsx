import React from "react";
import { CharacterCard } from "@/components/character-card";
import { ApiResponse } from "@/lib/types";

interface CharacterGridProps {
  data: ApiResponse;
  isLoading: boolean;
  isError: boolean;
}

export function CharacterGrid({
  data,
  isLoading,
  isError,
}: CharacterGridProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center p-10">
        <h3 className="text-xl font-bold text-red-500">
          Error loading characters
        </h3>
        <p className="mt-2">Please try again later or adjust your filters.</p>
      </div>
    );
  }

  if (data.results.length === 0) {
    return (
      <div className="text-center p-10">
        <h3 className="text-xl font-bold">No characters found</h3>
        <p className="mt-2">
          Try adjusting your filters to see more characters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
