import { Suspense } from "react";
import { FilterSection } from "@/components/filter-section";
import { CharacterGrid } from "@/components/character-grid";
import { QueryParams } from "@/lib/types";
import { parseAsString } from "nuqs/server";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchCharacters } from "@/hooks/use-characters";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await Promise.resolve(searchParams);
  const queryClient = new QueryClient();

  const status = parseAsString.withDefault("").parseServerSide(params.status);
  const gender = parseAsString.withDefault("").parseServerSide(params.gender);
  const page = parseAsString.withDefault("1").parseServerSide(params.page);

  const queryParams: QueryParams = {
    status: status || undefined,
    gender: gender || undefined,
    page: page,
  };

  await queryClient.prefetchQuery({
    queryKey: ["characters", queryParams],
    queryFn: () => fetchCharacters(queryParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FilterSection />
      <div>
        <CharacterGrid queryParams={queryParams} />
      </div>
    </HydrationBoundary>
  );
}
