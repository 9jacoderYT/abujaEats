"use client";
import SearchBox from "@/components/search/searchbox";
import Search from "@/components/search/search";
import Places from "@/components/places/places";

import Trending from "@/components/trending";

// Import Data
import { places } from "@/lib/data";
import Category from "@/components/category";
import { useState } from "react";

import VerifiedIcon from "@mui/icons-material/Verified";
import { Pagination } from "@mui/material";

export default function Home() {
  const [type, setType] = useState("restaurant");
  const [results, setResults] = useState(null);

  return (
    <main>
      <div className="md:block font-extrabold text-3xl md:text-6xl text-center md:mt-24 md:mb-12 mt-7 mb-3 hidden md:block">
        Where to?
      </div>

      <SearchBox
        type={type}
        setType={setType}
        setResults={setResults}
        results={places}
      />
      <Search results={results} setResults={setResults} places={places} />

      <Places places={results} />

      <div className="mx-auto max-w-6xl justify-center">
        <Pagination count={10} color="primary" sx={{ margin: "0 auto" }} />
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl p-2">
          <div className="mt-4">
            <div className="text-xl font-bold">Upcoming Events</div>
            <div className="text-sm font-light text-green-500">
              Sponsored{" "}
              <span>
                <VerifiedIcon className="text-lg" />
              </span>
            </div>
            <div className="text-sm text-gray-300">
              Select an event to view details
            </div>
          </div>

          <Category />
        </div>
      </div>

      <div className="max-w-7xl mx-auto block md:flex bg-[#f2b203] p-5 space-x-5 my-10">
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/0e/80/f6/caption.jpg?w=1000&h=-1&s=1"
            alt="logo"
          />
        </div>

        <div className="mt-5 md:mt-0">
          <p className="text-3xl font-bold text-white mb-5 text-center">
            AbujaEats
          </p>
          <p className="text-lg font-light text-white mt-10 md:mt-0 text-center">
            AbujaEats was created to help nigerians review popular spots in
            Abuja, giving a guide to tourists on how to navigate the city, also
            allow you the customers to share your expereinces with others
            <br />
            <button className="btn mt-3">Write a review</button>
          </p>
        </div>
      </div>

      {/* Trending */}

      <div className="bg-[#faf1ed]  my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-lg md:text-2xl font-medium">
              Top Ranking Resturants
            </div>
            <div className="text-sm font-light">Based on customers ratings</div>
          </div>

          <Trending />
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto block md:flex bg-[#f2f1ec] p-5 space-x-5 my-10">
        <div className="md:w-[50%]">
          <img src="/images/1.jpg" alt="logo" />
        </div>

        <div className="mt-5 md:mt-0 w-[50%] md:my-auto">
          <p className="text-3xl font-bold text-black mb-5 text-center">
            About AbujaEats
          </p>
          <p className="text-lg font-light text-white mt-10 md:mt-0 text-center">
            Follow us on our journey around Abujas food destinations.
            <br />
            <button className="btn mt-3">Donate now</button>
          </p>
        </div> 
      </div> */}
    </main>
  );
}
