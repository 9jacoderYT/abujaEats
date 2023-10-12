"use client";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DevicesIcon from "@mui/icons-material/Devices";
import PhoneIcon from "@mui/icons-material/Phone";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import RadioGroupRating from "@/lib/rating";
import { Box } from "@mui/material";

import { labels } from "@/lib/labels";
import ReviewModal from "../reviews/reviewModal";
import Link from "next/link";

export default function Heading({
  title,
  google_map_address,
  phone_number,
  website,
  opening_time,
  closing_time,
  rating,
  id,
}) {
  return (
    <div className="m-5 lg:m-0 space-y-2 md:flex">
      <div className="flex-1">
        <div className="text-2xl font-medium">
          {title} <VerifiedIcon className="text-green-400" />
        </div>

        <div className="mt-3 text-lg text-[#333]">
          <div className="flex">
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
          </div>
          {google_map_address && (
            <>
              📍
              <span className="border-b-2 border-dotted border-gray-200 hover:border-black hover:border-solid hover:cursor-pointer">
                {google_map_address}
              </span>
            </>
          )}
          ,{" "}
          {phone_number && (
            <>
              <PhoneIcon className="text-green-500 text-xl" />
              <span className="border-b-2 border-dotted border-gray-200 hover:border-black hover:border-solid hover:cursor-pointer">
                {phone_number}
              </span>
            </>
          )}
          ,{" "}
          {phone_number && (
            <>
              <DevicesIcon className="text-blue-500 text-xl mr-1" />
              <span className="border-b-2 border-dotted border-gray-200 hover:border-black hover:border-solid hover:cursor-pointer">
                website
              </span>
            </>
          )}
        </div>

        <div className="hover:cursor-pointer hover:underline">
          <AccessTimeIcon className="mr-2" />
          <span className="font-medium">Opens : </span>
          <span className="font-light">
            {opening_time} - {closing_time}
          </span>
        </div>
      </div>

      <div className="flex">
        {/* <FavoriteBorderOutlinedIcon className="mr-2 " /> */}
        <span className="text-xl underline text-black outline-none">
          <Link target="_blank" href={`/review/${id}`}>
            <ModeOutlinedIcon className="mr-2" />
            Write a review
          </Link>
        </span>
      </div>
    </div>
  );
}
