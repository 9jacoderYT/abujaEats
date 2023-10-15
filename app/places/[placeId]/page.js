import PlaceDetails from "@/components/place-details/placedetails";
import Reviews from "@/components/reviews/index";
import Heading from "@/components/heading/index";
import Gallary from "@/components/carousel/index";

// Import Data
import { places } from "@/lib/data";
import { fetchPlace } from "@/lib/fetchData";

export default async function PlacePage({ params }) {
  const data = await fetchPlace(params.placeId);

  return (
    <div className="">
      <div className="bg-white mt-2">
        <div className="max-w-7xl mx-auto">
          <Heading {...data} />
        </div>
      </div>

      <div className="bg-[#ededed]">
        <div className="max-w-7xl mx-auto m-3">
          <Gallary data={data} />

          <div className="mx-auto text-center mt-3 border  border-1.5 shadow-sm  border-[#e0e0e0]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18577.94615819137!2d7.412318232162165!3d9.107691611940385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75623fe2d863%3A0xb13df4127a71dbf6!2sCrush%20Cafe!5e0!3m2!1sen!2sng!4v1696193124444!5m2!1sen!2sng"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <PlaceDetails data={data} />
          <Reviews />
        </div>
      </div>
    </div>
  );
}
