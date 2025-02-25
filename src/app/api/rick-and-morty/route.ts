import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { CHARACTERS_ENDPOINT } from "@/lib/constants";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Gelen query parametrelerini işle
  const status = searchParams.get("status");
  const gender = searchParams.get("gender");
  const page = searchParams.get("page") || "1";

  // Rick and Morty API için sorgu stringi oluştur
  const queryParams = new URLSearchParams();
  if (status) queryParams.append("status", status);
  if (gender) queryParams.append("gender", gender);
  if (page) queryParams.append("page", page);

  try {
    const response = await axios.get(
      `${CHARACTERS_ENDPOINT}?${queryParams.toString()}`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching Rick and Morty data:", error);

    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}
