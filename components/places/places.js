"use client";
import AVATAR from "@/public/avatar.jpeg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";

import RadioGroupRating from "@/lib/rating";

import Link from "next/link";

import { labels } from "@/lib/labels";

export default function Places({ places }) {
  const value = 3.5;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl m-1">
      {places.map((place) => (
        <Link href={`/places/${place.id}`} key={place.id}>
          <div className="m-1 md:m-3 shadow-xl hover:cursor-pointer hover:underline bg-white">
            <img
              src={place.main_image || "/avatar.jpeg"}
              //  src="/avatar.jpeg"
              className="transition duration-700 z-2 h-[250px] md:h-[300px] w-full"
            />

            <div className="p-2">
              <div className="text-md md:text-xl font-medium lowercase hover:underline transition duration-700 truncate">
                {place.title}
              </div>

              <div className="hidden md:flex">
                <RadioGroupRating value={place?.rating} />

                {place.rating > 2 ? (
                  <Box sx={{ ml: 1, color: "green" }}>
                    {labels[place?.rating]}
                  </Box>
                ) : (
                  <Box sx={{ ml: 1, color: "red" }}>
                    {labels[place?.rating]}
                  </Box>
                )}
              </div>

              <div className=" p-1 rounded-full text-sm">
                {place.location && <span>📍 {place.location}</span>}
              </div>

              {place.opening_time ? (
                <p className="hidden lg:flex space-x-2">
                  <AccessTimeIcon />
                  <span className="my-auto">{place.opening_time}</span>
                </p>
              ) : null}

              <p className="p-1 rounded-full text-md font-semibold truncate">
                #{place.type}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
