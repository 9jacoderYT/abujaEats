import VerifiedIcon from "@mui/icons-material/Verified";

export default function About({
  about,
  max_budget,
  min_budget,
  meals,
  cuisines,
}) {
  const mealsList = meals.split(",");
  const cuisinesList = cuisines.split(",");

  return (
    <div className="w-full bg-white p-7 space-y-2 border  border-1.5 shadow-sm  border-[#e0e0e0]">
      <p className="font-medium text-xl border-b-2 md:border-b-0 pb-5 flex">
        <span className="flex-1">Details</span>
        <span>
          <VerifiedIcon className="text-green-400" />
        </span>
      </p>

      <p className="font-medium text-sm mt-5">PRICE RANGE</p>
      <div className="font-light">
        NGN{min_budget} - NGN{max_budget}
      </div>

      <p className="font-medium text-sm mt-5">MEALS</p>
      <div className="font-light">
        {mealsList.map((meal, index) => (
          <div key={index}>{meal}</div>
        ))}
      </div>

      <p className="font-medium text-sm mt-5">CUISINE</p>
      <div className="font-light">
        {cuisinesList.map((meal, index) => (
          <div key={index}>{meal}</div>
        ))}
      </div>
    </div>
  );
}
