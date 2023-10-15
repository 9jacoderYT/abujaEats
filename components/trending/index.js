"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import { places } from "@/lib/data";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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
            background: "blue",
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
              <div className="m-4 shadow-xl hover:cursor-pointer hover:underline bg-white w-[250px] md:w-[400px]">
                <img
                  src={place.main_image}
                  className="w-full h-[250px] md:h-[350px]"
                />

                <div className="p-4">
                  <div className="text-xl font-medium lowercase hover:underline transition duration-700 truncate">
                    {place.title}
                  </div>

                  <div className="flex">
                    <Rating
                      name="text-feedback"
                      value={place?.rating}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />

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
                </div>
              </div>
            </Link>
          
        ))}
      </Carousel>
    </div>
  );
}
