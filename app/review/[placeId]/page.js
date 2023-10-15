// Import Data
import { fetchPlace } from "@/lib/fetchData";

import CreateReview from "@/components/createReview/index";

export default async function ReviewPage({ params }) {
  const data = await fetchPlace(params.placeId);

  return (
    <div className="max-w-7xl mx-auto p-2">
      <CreateReview {...data} />
    </div>
  );
}
