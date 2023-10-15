"use client";
import HomeIcon from "@mui/icons-material/Home";
import TrafficIcon from "@mui/icons-material/Traffic";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import WeekendIcon from "@mui/icons-material/Weekend";

export default function Navbar() {
  return (
    <>
      <div className="auto-scroll overflow-x-scroll">
        <div className="flex justify-center w-[1100px] md:w-[1100px] text-2xl space-x-5 md:mx-auto">
          <div className={`nav_bar_components_secondary `}>
            <span>Hotels</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Things to do</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Resturants</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Shawarma Spots</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Open Grill</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Tours</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Educational Spots</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Burger Joints</span>
          </div>
          <div className={`nav_bar_components_secondary `}>
            <span>Fast Food</span>
          </div>
        </div>
      </div>
    </>
  );
}
