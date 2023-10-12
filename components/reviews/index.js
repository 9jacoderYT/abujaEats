import ReviewModal from "./reviewModal";

export default function Reviews() {
  return (
    <div className="bg-white p-5 my-2">
      <div className="border-b-2 pb-2 flex">
        <div className="flex-1 text-3xl">
          Reviews <span className="text-[#8c8c8c]">(99) </span>
        </div>

        <ReviewModal />
      </div>

      <div className="mt-5">
        <textarea
          className="textarea textarea-accent w-full text-2xl"
          placeholder="Please write an honest review of your experience at this location"
        ></textarea>
      </div>
    </div>
  );
}
