import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Character } from "@/lib/types";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  }[character.status];

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <div className="aspect-square relative">
        <Image
          src={character.image}
          alt={character.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-bold truncate">
          {character.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`} />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {character.status} - {character.species}
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Last known location:
          </p>
          <p className="text-sm truncate">{character.location.name}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-gray-500 dark:text-gray-400">Gender:</p>
          <p className="text-sm">{character.gender}</p>
        </div>
      </CardContent>
    </Card>
  );
}
