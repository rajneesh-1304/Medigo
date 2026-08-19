import { State, City } from "country-state-city";

const INDIA_CODE = "IN";

let idCounter = 1;
const allIndianCities = State.getStatesOfCountry(INDIA_CODE).flatMap((state) =>
    City.getCitiesOfState(INDIA_CODE, state.isoCode).map((city) => ({
        id: String(idCounter++),
        name: city.name,
    }))
);

export const searchCities = (query: string) => {
    if (!query.trim()) {
        return allIndianCities.slice(0, 20);
    }

    const lowerQuery = query.toLowerCase();

    return allIndianCities
        .filter((city) => city.name.toLowerCase().includes(lowerQuery))
        .slice(0, 20);
};

export const getCityByName = (name: string) => {
    return allIndianCities.find((city) => city.name.toLowerCase() === name.toLowerCase()) || null;
};