import { places } from "./data";

export const fetchPlace = async (id: string) => {
  const results = places.filter((place: any) => {
    return place.id == id;
  });

  return results[0];
};
