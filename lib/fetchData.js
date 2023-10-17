import { places } from "./data";

export const fetchPlace = async (id) => {
  const results = places.filter((place) => {
    return place.id == id;
  });

  return results[0];
};
