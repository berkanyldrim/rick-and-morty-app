"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Info } from "@/lib/types";

interface PaginationProps {
  info: Info;
}

export function Pagination({ info }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const goToPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => goToPage(currentPage - 1)}
        disabled={!info.prev}
      >
        Previous
      </Button>

      <span className="px-4 py-2 font-medium">
        Page {currentPage} of {info.pages}
      </span>

      <Button
        variant="outline"
        onClick={() => goToPage(currentPage + 1)}
        disabled={!info.next}
      >
        Next
      </Button>
    </div>
  );
}
