import React from "react";
import RadioGroupRating from "@/lib/rating";
import { labels } from "@/lib/labels";
import Box from "@mui/material/Box";

export default function Reviews({ rating, about }) {
  return (
    <div className="w-full bg-white p-7 border border-1.5 shadow-sm border-[#e0e0e0]">
      <p className="font-medium text-xl pb-2">Ratings and reviews</p>

      <div className="flex my-3 pb-3 border-b-2 md:border-b-0">
        <span className="my-auto font-bold text-xl mr-2">{rating}</span>

        {rating && (
          <>
            <RadioGroupRating value={rating} />
          </>
        )}

        {rating > 2 ? (
          <Box sx={{ ml: 1, color: "green" }}>{labels[rating]}</Box>
        ) : (
          <Box sx={{ ml: 1, color: "red" }}>{labels[rating]}</Box>
        )}

        <span className="text-sm font-medium my-auto ml-3 my-auto">
          675 reviews
        </span>
      </div>

      <p className="font-medium text-md mt-5">About</p>

      <div className="font-light mt-2">{about}</div>
    </div>
  );
}
