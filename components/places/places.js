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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-5xl m-1">
      {places?.slice(0, 4).map((place) => (
        <Link href={`/places/${place.id}`} key={place.id}>
          <div className="m-1 p-1 border border-2 rounded-lg  hover:cursor-pointer hover:underline bg-white">
            <img
              src={place.main_image || "/avatar.jpeg"}
              //  src="/avatar.jpeg"
              alt="logo"
              className="transition duration-700 h-[200px] md:h-[250px] lg:h-[270px] z-2 w-full rounded-lg"
            />

            <div className="px-2">
              <div className="text-md md:text-lg font-medium lowercase hover:underline transition duration-700 truncate">
                {place.title}
              </div>

              <div className="flex">
                <RadioGroupRating value={place?.rating} />

                <span className="hidden md:inline">
                  {place.rating > 2 ? (
                    <Box sx={{ ml: 1, color: "green" }}>
                      {labels[place?.rating]}
                    </Box>
                  ) : (
                    <Box sx={{ ml: 1, color: "red" }}>
                      {labels[place?.rating]}
                    </Box>
                  )}
                </span>
              </div>

              <div className=" p-1 rounded-full text-sm">
                {place.location && <span>📍 {place.location}</span>}
              </div>

              <p className="rounded-full text-sm font-semibold truncate">
                #{place.type}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
