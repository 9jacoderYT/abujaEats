"use client";
import WriteReview from "./write-review";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export default function CreateReview({ main_image, title, location, type }) {
  return (
    <div className="md:flex md:space-x-2">
      <div className=" md:w-[30%] p-5">
        <div className=" shadow-xl hover:cursor-pointer hover:underline bg-white w-[250px] md:w-full">
          <img
            src={main_image || "/avatar.jpeg"}
            //  src="/avatar.jpeg"
            className="transition duration-700 z-2 h-[250px] md:h-[300px] w-[250px] md:w-full"
          />

          <div className="p-2">
            <div className="text-md md:text-xl font-medium lowercase hover:underline transition duration-700 truncate">
              {title}
            </div>

            <div className=" p-1 rounded-full text-sm">
              {location && <span>📍 {location}</span>}
            </div>

            <p className="p-1 rounded-full text-md font-semibold truncate">
              #{type}
            </p>
          </div>
        </div>
      </div>

      <div className=" md:flex-1 p-2">
        <WriteReview />
      </div>
    </div>
  );
}
