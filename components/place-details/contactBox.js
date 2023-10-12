import LocationOnIcon from "@mui/icons-material/LocationOn";
import DevicesIcon from "@mui/icons-material/Devices";
import CallMadeIcon from "@mui/icons-material/CallMade";
import PhoneIcon from "@mui/icons-material/Phone";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

export default function Contact({ google_map_address, location }) {
  return (
    <div className="w-full bg-white p-7 space-y-3 border  border-1.5 shadow-sm  border-[#e0e0e0]">
      <div className="font-medium text-xl  border-b-2 md:border-b-0 pb-2">
        Location and contact
      </div>

      <div className="space-x-5 font-light text-md">
        <LocationOnIcon className="text-black text-3xl" />
        <span>{location}</span>
      </div>

      <div className="space-x-5 font-light text-md">
        <EmojiTransportationIcon className="text-black text-3xl" />
        <span>{google_map_address}</span>
      </div>

      <div className="space-x-5 font-light text-md">
        <DevicesIcon className="text-black text-3xl" />
        <span className="underline hover:cursor-pointer">
          Website <CallMadeIcon className="text-md" />
        </span>
      </div>
      <div className="space-x-5 font-light text-md">
        <PhoneIcon className="text-black text-3xl" />
        <span>Call</span>
      </div>

      <div className="font-bold hover:cursor-pointer">
        Improve this listening
      </div>
    </div>
  );
}
