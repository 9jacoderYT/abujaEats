"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import { places } from "@/lib/data";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RadioGroupRating from "@/lib/rating";

import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import { labels } from "@/lib/labels";

export default function Trending() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <ArrowCircleRightIcon className="text-green-600 text-3xl" />
          ),
        }}
        backwardBtnProps={{
          children: <ArrowCircleLeftIcon className="text-green-600 text-3xl" />,
        }}
        speed={400}
      >
        {places.slice(0, 7).map((place, index) => (
          <Link href={`/places/${place.id}`} key={place.id}>
            <div className="m-1 p-1 border border-2 rounded-lg  hover:cursor-pointer hover:underline bg-white">
              <img
                src={place.main_image || "/avatar.jpeg"}
                //  src="/avatar.jpeg"
                alt="logo"
                className="transition duration-700 h-[200px] z-2 w-full rounded-lg"
              />

              <div className="px-2">
                <div className="text-md md:text-lg font-medium lowercase hover:underline transition duration-700 truncate">
                  {place.title}
                </div>

                <div className="flex">
                  <RadioGroupRating value={place?.rating} />

                  <span className="hidden md:inline my-auto">
                    {place.rating > 2 ? (
                      <Box sx={{ ml: 1, color: "green" }} className="text-sm">
                        {labels[place?.rating]}
                      </Box>
                    ) : (
                      <Box sx={{ ml: 1, color: "red" }} className="text-sm">
                        {labels[place?.rating]}
                      </Box>
                    )}
                  </span>
                </div>

                <div className=" p-1 rounded-full text-sm">
                  {place.location && <span>📍 {place.location}</span>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
