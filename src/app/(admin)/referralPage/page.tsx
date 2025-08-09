"use client";

import { getReferralsByUserId, getUserById } from "@/services/userService";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { UserRowReferral } from "@/types/types"; // Make sure this is in your types file
import { Users } from "lucide-react";

// A simpler type for the referrer, matching the data from getUserById
type Referrer = {
  id: string;
  username: string;
};

export default function ReferralPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  // State to hold the fetched data, loading status, and errors
  const [referrer, setReferrer] = useState<Referrer | null>(null);
  const [referrals, setReferrals] = useState<UserRowReferral[]>([]); // Correctly typed as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 10; // You can adjust this

  useEffect(() => {
    if (!userId) {
      setError("User ID not found in URL.");
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch both referrer details and their referrals concurrently
        const [referrerData, referralsData] = await Promise.all([
          getUserById(userId),
          getReferralsByUserId(userId, currentPage, pageSize),
        ]);

        console.log("Fetched Referrals Data:", referralsData);

        setReferrer(referrerData);
        setReferrals(referralsData);

        setHasMore(referralsData.length === pageSize);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch referral data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [userId, currentPage]);

  // Initial loading state for the whole page
  if (loading && currentPage === 1) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg text-gray-500 animate-pulse">
          Loading Referrals...
        </p>
      </div>
    );
  }

  // Error state for the whole page
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Referral List</h1>
          {referrer && (
            <p className="text-lg text-gray-600 mt-1">
              Showing referrals for{" "}
              <span className="font-semibold text-indigo-600">
                {referrer.username}
              </span>
            </p>
          )}
        </div>

        {/* Referrals Table Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center p-6 text-gray-500 animate-pulse"
                    >
                      Loading more...
                    </td>
                  </tr>
                ) : referrals.length > 0 ? (
                  referrals.map((referral) => (
                    <tr key={referral.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {referral.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.customer_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(referral.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center p-6">
                      <Users className="mx-auto w-12 h-12 text-gray-300" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No referrals found
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        This user hasn &apos; t referred anyone yet.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        {referrals.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || loading}
              className="px-4 py-2 bg-white text-sm font-medium text-gray-700 rounded-md shadow-sm border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">Page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={!hasMore || loading}
              className="px-4 py-2 bg-white text-sm font-medium text-gray-700 rounded-md shadow-sm border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
