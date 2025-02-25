"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useFilterStore } from "@/store/filter-store";
import { STATUS_OPTIONS, GENDER_OPTIONS } from "@/lib/constants";
import { FilterState } from "@/lib/types";

export function FilterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status, gender, setStatus, setGender, resetFilters } =
    useFilterStore();

  useEffect(() => {
    const statusParam = searchParams.get("status") as FilterState["status"];
    const genderParam = searchParams.get("gender") as FilterState["gender"];

    if (statusParam) setStatus(statusParam);
    if (genderParam) setGender(genderParam);
  }, [searchParams, setStatus, setGender]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (status && status !== "all") params.set("status", status);
    if (gender && gender !== "all") params.set("gender", gender);

    router.push(`?${params.toString()}`);
  };

  const handleResetFilters = () => {
    resetFilters();
    router.push("/");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Filter Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Status:</label>
          <Select
            value={status}
            onValueChange={(value) => setStatus(value as FilterState["status"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value || "empty"}
                  value={option.value || "all"}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Gender:</label>
          <Select
            value={gender}
            onValueChange={(value) => setGender(value as FilterState["gender"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              {GENDER_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value || "empty"}
                  value={option.value || "all"}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-end">
        <Button variant="outline" onClick={handleResetFilters}>
          Reset Filters
        </Button>
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  );
}
