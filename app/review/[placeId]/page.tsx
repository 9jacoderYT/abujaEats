// Import Data
import { fetchPlace } from "@/lib/fetchData";

import WriteReview from "@/components/createReview/index";

export default async function ReviewPage({
  params,
}: {
  params: { placeId: string };
}) {
  const data = await fetchPlace(params.placeId);

  return (
    <div className="max-w-7xl mx-auto my-10 p-5">
      <WriteReview />
    </div>
  );
}
