import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const GOOGLE_AUTOCOMPLETE_URL =
    "https://places.googleapis.com/v1/places:autocomplete";

export async function POST(request: NextRequest) {
    try {
        const { input } = await request.json();

        if (!input?.trim()) {
            return NextResponse.json({
                suggestions: [],
            });
        }

        const response = await axios.post(
            GOOGLE_AUTOCOMPLETE_URL,
            {
                input: input.trim(),
                includedRegionCodes: ["in"],
                languageCode: "en",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key":
                        process.env.GOOGLE_MAPS_API_KEY!,
                    "X-Goog-FieldMask":
                        "suggestions.placePrediction.placeId," +
                        "suggestions.placePrediction.text," +
                        "suggestions.placePrediction.structuredFormat",
                },
            }
        );

        return NextResponse.json(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error(
                "Google Places error:",
                error.response?.data || error.message
            );

            return NextResponse.json(
                {
                    message: "Google Places API request failed",
                },
                {
                    status: error.response?.status || 500,
                }
            );
        }

        console.error("Autocomplete error:", error);

        return NextResponse.json(
            {
                message: "Unable to search location",
            },
            {
                status: 500,
            }
        );
    }
}