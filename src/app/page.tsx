import { Suspense } from "react";
import { fetchCharacters } from "@/hooks/use-characters";
import { FilterSection } from "@/components/filter-section";
import { CharacterGrid } from "@/components/character-grid";
import { Pagination } from "@/components/pagination";
import { QueryParams } from "@/lib/types";
import { parseAsString } from "nuqs/server";
import type { SearchParams } from "nuqs/server";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await Promise.resolve(searchParams);

  const status = parseAsString.withDefault("").parseServerSide(params.status);
  const gender = parseAsString.withDefault("").parseServerSide(params.gender);
  const page = parseAsString.withDefault("1").parseServerSide(params.page);

  const queryParams: QueryParams = {
    status: status || undefined,
    gender: gender || undefined,
    page: page,
  };

  const data = await fetchCharacters(queryParams);

  return (
    <>
      <Suspense fallback={<div>Loading filters...</div>}>
        <FilterSection />
      </Suspense>

      <div>
        <CharacterGrid data={data} isLoading={false} isError={false} />

        <Pagination info={data.info} />
      </div>
    </>
  );
}
