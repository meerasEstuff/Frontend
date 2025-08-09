import { Suspense } from "react";
import ReferralPageComponent from "@/components/admin/ReferralPageComponent";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <p className="text-lg text-gray-500 animate-pulse">Loading Page...</p>
    </div>
  );
}

export default function ReferralPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ReferralPageComponent />
    </Suspense>
  );
}
