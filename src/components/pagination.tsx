"use client";
import React from "react";
import { useQueryState, parseAsString } from "nuqs";
import { Button } from "@/components/ui/button";
import { Info } from "@/lib/types";

interface PaginationProps {
  info: Info;
}

export function Pagination({ info }: PaginationProps) {
  const [page, setPage] = useQueryState(
    "page",

    {
      shallow: false,
    }
  );
  const currentPage = parseInt(page || "1", 10);

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => setPage((currentPage - 1).toString())}
        disabled={!info.prev}
      >
        Previous
      </Button>

      <span className="px-4 py-2 font-medium">
        Page {currentPage} of {info.pages}
      </span>

      <Button
        variant="outline"
        onClick={() => setPage((currentPage + 1).toString())}
        disabled={!info.next}
      >
        Next
      </Button>
    </div>
  );
}
