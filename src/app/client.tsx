"use client";

import { useSearchParams } from "next/navigation";
import { useCharacters } from "@/hooks/use-characters";
import { CharacterGrid } from "@/components/character-grid";
import { Pagination } from "@/components/pagination";
import { QueryParams } from "@/lib/types";

export default function ClientPage() {
  const searchParams = useSearchParams();

  // URL parametrelerini al
  const queryParams: QueryParams = {
    status: searchParams.get("status") || undefined,
    gender: searchParams.get("gender") || undefined,
    page: searchParams.get("page") || "1",
  };

  // React Query ile verileri çek
  const { data, isLoading, isError } = useCharacters(queryParams);

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <CharacterGrid data={data} isLoading={isLoading} isError={isError} />
      {data && <Pagination info={data.info} />}
    </>
  );
}
