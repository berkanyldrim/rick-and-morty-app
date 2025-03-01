"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { STATUS_OPTIONS, GENDER_OPTIONS } from "@/lib/constants";
import { useQueryStates, parseAsString } from "nuqs";

export function FilterSection() {
  const [query, setQuery] = useQueryStates(
    {
      status: parseAsString.withDefault(""),
      gender: parseAsString.withDefault(""),
      page: parseAsString.withDefault("1"),
    },
    {
      shallow: false,
    }
  );

  const handleResetFilters = () => {
    setQuery({
      status: "",
      gender: "",
      page: "1",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Filter Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Status:</label>
          <Select
            value={query.status}
            onValueChange={(value) => setQuery({ status: value, page: "1" })}
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
            value={query.gender}
            onValueChange={(value) => setQuery({ gender: value, page: "1" })}
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
        {/* <Button onClick={applyFilters}>Apply Filters</Button> */}
      </div>
    </div>
  );
}
