"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

interface UserRow {
  id: string;
  email: string;
  phone: string;
  customer_id: string;
  Joined: string;
  Referrals: number;
}

interface UserListProps {
  users: UserRow[];
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
}

export default function UserList({ users, onSearch, onFilter }: UserListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All Time");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filterDropdownRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Reset to page 1 when users change (e.g., after search/filter)
  useEffect(() => {
    setCurrentPage(1);
  }, [users]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    onFilter(filter);
    setIsFilterDropdownOpen(false);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 mt-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">User List</h2>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-grow w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by username, email, or ID..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 shadow-sm"
          />
        </div>

        <div className="relative flex-shrink-0" ref={filterDropdownRef}>
          <button
            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-indigo-400 text-indigo-700 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors duration-200"
          >
            <span>{selectedFilter}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isFilterDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <SlidersHorizontal className="w-5 h-5 ml-2" />
          </button>
          {isFilterDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border"
            >
              {[
                "All Time",
                "Last 1 Month",
                "Last 3 Months",
                "Last 6 Months",
                "Last 8 Months",
                "Last 12 Months",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleFilterSelect(option)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    selectedFilter === option
                      ? "bg-gray-50 font-medium text-indigo-700"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Username",
                "Customer ID",
                "Email",
                "Phone",
                "Referrals",
                "Joined",
              ].map((title) => (
                <th
                  key={title}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center px-4 py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {user.email.split("@")[0]}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.customer_id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.phone}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.Referrals}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {user.Joined}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 text-sm text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600 pt-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 text-sm text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
}
