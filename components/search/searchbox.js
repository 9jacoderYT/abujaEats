"use client";
import HomeIcon from "@mui/icons-material/Home";
import TrafficIcon from "@mui/icons-material/Traffic";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import WeekendIcon from "@mui/icons-material/Weekend";


export default function SearchBox({
  type,
  setType,
  results,
  setResults,
}) {
  return (
    <div className="auto-scroll overflow-x-scroll text-gray-700">
      <div className="flex justify-center w-[700px] md:w-[800px] text-2xl space-x-5 md:mx-auto">
        <div
          className={`nav_bar_components ${
            type == "all" ? "border-gray-600" : ""
          }`}
        >
          <HomeIcon />
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
          <RestaurantMenuIcon />
          <span
            onClick={() => {
              setType("resturants");
              const newResult = results.filter((result: any) => {
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
          <TrafficIcon />
          <span
            onClick={() => {
              setType("streetfood");

              const newResult = results.filter((result: any) => {
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
          <LocalBarIcon />
          <span
            onClick={() => {
              setType("bar");
              const newResult = results.filter((result: any) => {
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
          <WeekendIcon />

          <span
            onClick={() => {
              setType("loudge");
              const newResult = results.filter((result: any) => {
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
