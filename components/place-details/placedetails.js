"use client";
import Reviews from "./reviewsBox";
import About from "./aboutBox";
import Contact from "./contactBox";

export default function PlaceDetails({ data }) {
  return (
    <div className="md:flex space-y-2 md:space-y-0 md:space-x-2 mt-2">
      <Reviews {...data} />
      <About {...data} />
      <Contact {...data} />
    </div>
  );
}
