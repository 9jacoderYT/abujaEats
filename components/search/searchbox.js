"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";

export default function SearchBox({ type, setType, results, setResults }) {
  return (
    <div className="auto-scroll overflow-x-scroll ">
      <div className="flex justify-center w-[750px] md:w-[800px] text-2xl space-x-5 md:mx-auto pb-5">
        <div
          className={`nav_bar_components ${
            type == "all" ? "border-gray-600" : ""
          }`}
        >
          <HomeOutlinedIcon />
          <span
            onClick={() => {
              setType("all");

              setResults(results);
            }}
          >
            Search All
          </span>
        </div>
        <div
          className={`nav_bar_components ${
            type == "resturants" ? "border-gray-600" : ""
          }`}
        >
          <RamenDiningOutlinedIcon />
          <span
            onClick={() => {
              setType("restaurant");
              const newResult = results.filter((result) => {
                return result.type == "restaurant";
              });
              setResults(newResult);
            }}
          >
            Restaurants
          </span>
        </div>
        <div
          className={`nav_bar_components ${
            type == "streetfood" ? "border-gray-600" : ""
          }`}
        >
          <TrafficOutlinedIcon />
          <span
            onClick={() => {
              setType("streetfood");

              const newResult = results.filter((result) => {
                return result.type == "streetfood";
              });
              setResults(newResult);
            }}
          >
            Street Food
          </span>
        </div>
        <div
          className={`nav_bar_components ${
            type == "bar" ? "border-gray-600" : ""
          }`}
        >
          <LocalBarOutlinedIcon />
          <span
            onClick={() => {
              setType("bar");
              const newResult = results.filter((result) => {
                return result.type == "bar";
              });
              setResults(newResult);
            }}
          >
            Bar
          </span>
        </div>
        <div
          className={`nav_bar_components ${
            type == "loudge" ? "border-gray-600" : ""
          }`}
        >
          <WeekendOutlinedIcon />

          <span
            onClick={() => {
              setType("loudge");
              const newResult = results.filter((result) => {
                return result.type == "loudge";
              });
              setResults(newResult);
            }}
          >
            Loudge
          </span>
        </div>
      </div>
    </div>
  );
}
