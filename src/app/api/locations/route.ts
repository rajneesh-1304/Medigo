import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { search } = await request.json();
        // const response = await fetch(`https://api.cityapi.org/v1/cities?country_code=IN&search=${search}`, {
        //     // headers: { 'X-CSCAPI-KEY': process.env.LOCATION_API_KEY as string }
        // });
        const apikey = process.env.LOCATION2_API_KEY;
        const response =
            !search ?
                await axios.get("https://api.countrystatecity.in/v1/countries/IN/states",
                    {
                        headers: {
                            "X-CSCAPI-KEY": process.env.LOCATION_API_KEY!,
                        },
                    }
                )
                :
                await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&type=city&filter=countrycode:in&limit=10&apiKey=${apikey}`);
        
        const states = await response.data;
        return NextResponse.json(states);

    } catch (error: any) {
        console.log("Error: ", error);
        return NextResponse.json(
            { message: "Unable to search location" },
            { status: error.response?.status || 500 }
        )
    }
}