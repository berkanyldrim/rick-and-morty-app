import { Suspense } from "react";
import { fetchCharacters } from "@/hooks/use-characters";
import { FilterSection } from "@/components/filter-section";
import { CharacterGrid } from "@/components/character-grid";
import { Pagination } from "@/components/pagination";
import { QueryParams } from "@/lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);

  // URL query parametrelerini prepare et
  const queryParams: QueryParams = {
    status:
      typeof resolvedSearchParams.status === "string"
        ? resolvedSearchParams.status
        : undefined,
    gender:
      typeof resolvedSearchParams.gender === "string"
        ? resolvedSearchParams.gender
        : undefined,
    page:
      typeof resolvedSearchParams.page === "string"
        ? resolvedSearchParams.page
        : "1",
  };

  // SSR ile veri çekme
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
