"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  IndianRupee,
  ShoppingCart,
  LogOut,
  ChevronDown,
  Mail,
  MessageSquare,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// --- Dummy Data Generation ---
interface UserData {
  id: string;
  customer_id: string;
  username: string;
  email: string;
  phone: string;
  total_referrals: number;
  joined_date: string; // Stored as string, will parse to Date for filtering
}

const generateDummyUsers = (count: number): UserData[] => {
  const users: UserData[] = [];
  const prefixes = ["CUST-", "MEERAS-"];
  const domains = ["example.com", "test.org", "mail.net"];
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
    "Kyle",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
  ];

  for (let i = 1; i <= count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomAlphanumeric = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    const customerId = `${randomPrefix}${randomAlphanumeric}`;
    const email = `${randomName.toLowerCase()}${i}@${
      domains[Math.floor(Math.random() * domains.length)]
    }`;
    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`; // Indian 10-digit number starting with 9
    const totalReferrals = Math.floor(Math.random() * 20); // 0 to 19 referrals

    // Generate joined_date within the last 2 years for better filtering distribution
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    const randomTime =
      twoYearsAgo.getTime() +
      Math.random() * (Date.now() - twoYearsAgo.getTime());
    const joinDate = new Date(randomTime).toLocaleDateString("en-US");

    users.push({
      id: `user-${i}`,
      customer_id: customerId,
      username: `${randomName} ${i}`,
      email: email,
      phone: phone,
      total_referrals: totalReferrals,
      joined_date: joinDate,
    });
  }
  return users;
};

const ALL_DUMMY_USERS = generateDummyUsers(50); // Generate 50 dummy users

// --- Admin Dashboard Component ---
function AdminDashboardPage() {
  const router = useRouter();

  // State for dashboard metrics
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // State for user list and pagination
  const [users, setUsers] = useState<UserData[]>([]); // This now holds the original, unfiltered list
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 10 users per page

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByTime, setFilterByTime] = useState<string>("all"); // 'all', '1m', '3m', '6m', '8m', '12m'

  // Ref for admin profile dropdown
  const adminProfileDropdownRef = useRef<HTMLDivElement>(null);
  const [isAdminProfileDropdownOpen, setIsAdminProfileDropdownOpen] =
    useState(false);

  // Simulate fetching data on component mount
  useEffect(() => {
    // Simulate API calls for metrics
    setTotalUsers(ALL_DUMMY_USERS.length);
    setTotalRevenue(ALL_DUMMY_USERS.length * 1000); // Assuming 1000 Rs per user activation

    setUsers(ALL_DUMMY_USERS); // Set the original list of users
    // Initial filtering will happen in the next useEffect
  }, []);

  // Effect for filtering users based on search term and time filter
  useEffect(() => {
    // START OF CHANGE: Use the 'users' state as the source for filtering
    let tempUsers = users;
    // END OF CHANGE:

    // Apply search term filter
    if (searchTerm) {
      tempUsers = tempUsers.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.customer_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply time-based filter
    if (filterByTime !== "all") {
      const now = new Date();
      const cutoffDate = new Date(now);

      switch (filterByTime) {
        case "1m":
          cutoffDate.setMonth(now.getMonth() - 1);
          break;
        case "3m":
          cutoffDate.setMonth(now.getMonth() - 3);
          break;
        case "6m":
          cutoffDate.setMonth(now.getMonth() - 6);
          break;
        case "8m":
          cutoffDate.setMonth(now.getMonth() - 8);
          break;
        case "12m":
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          break;
      }

      tempUsers = tempUsers.filter((user) => {
        const userJoinedDate = new Date(user.joined_date);
        // Ensure userJoinedDate is valid before comparison
        if (isNaN(userJoinedDate.getTime())) {
          console.warn(
            `Invalid date format for user ${user.id}: ${user.joined_date}`
          );
          return false; // Exclude users with invalid dates
        }
        return userJoinedDate >= cutoffDate;
      });
    }

    setFilteredUsers(tempUsers);
    setCurrentPage(1); // Reset to first page on filter change
    // START OF CHANGE: Add 'users' to the dependency array
  }, [searchTerm, filterByTime, users]);
  // END OF CHANGE:

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle clicks outside the admin profile dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        adminProfileDropdownRef.current &&
        !adminProfileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAdminProfileDropdownOpen(false);
      }
    }

    if (isAdminProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAdminProfileDropdownOpen]);

  const handleAdminLogout = () => {
    console.log("Admin logged out");
    // In a real app, clear admin session/token
    router.push("/adminAuth");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Company Icon & Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/meeras-logo.jpg" // Corrected to .png based on your file structure in the screenshot.
              alt="MeerasEstuff_Logo"
              width={34}
              height={34}
              className="rounded-full shadow-md"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              MeerasEstuff Admin
            </span>
          </div>
          {/* Right: Admin Profile Icon with Dropdown */}
          <div className="relative" ref={adminProfileDropdownRef}>
            <button
              onClick={() =>
                setIsAdminProfileDropdownOpen(!isAdminProfileDropdownOpen)
              }
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-expanded={isAdminProfileDropdownOpen}
              aria-haspopup="true"
            >
              <Users className="w-6 h-6" />{" "}
              {/* Using Users icon for admin profile */}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isAdminProfileDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isAdminProfileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-100"
              >
                <button
                  onClick={handleAdminLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto w-full">
        {" "}
        {/* Added xl:px-12 and w-full for more width */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Overview of your MeerasEstuff platform.
          </p>
        </motion.div>
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Total Users Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <Users className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Total Users
            </h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              {totalUsers}
            </p>
            <p className="text-sm text-gray-500 mt-1">Registered accounts</p>
          </motion.div>
          {/* Total Revenue Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col items-center text-center"
          >
            <IndianRupee className="w-8 h-8 text-pink-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Total Revenue
            </h3>
            <p className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Rs. {totalRevenue.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Lifetime earnings (approx)
            </p>
          </motion.div>
        </div>
        {/* User List Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">User List</h2>

          {/* Filter and Search - Responsive Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="relative w-full sm:w-1/2 flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by username, email, or ID..."
                className="w-full pl-10 pr-3 py-2 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-sm border-gray-200 focus:border-indigo-500 focus:bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Time-based filter dropdown */}
            <div className="relative w-full sm:w-auto flex items-center gap-2 flex-shrink-0">
              {" "}
              {/* Changed space-x-2 to gap-2 */}
              <select
                id="timeFilter"
                className="block w-full sm:w-auto px-4 py-2 pr-8 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-0 focus:border-indigo-500 appearance-none transition-all duration-300 flex-shrink-0"
                value={filterByTime}
                onChange={(e) => setFilterByTime(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="1m">Last 1 Month</option>
                <option value="3m">Last 3 Months</option>
                <option value="6m">Last 6 Months</option>
                <option value="8m">Last 8 Months</option>
                <option value="12m">Last 12 Months</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
              {/* Filter icon positioned correctly beside the select */}
              <Filter className="w-5 h-5 text-gray-500 ml-1 sm:ml-0" />{" "}
              {/* Added ml-1 for small screens, sm:ml-0 for larger */}
            </div>
          </div>

          {/* User Table - Responsive Overflow */}
          <div className="overflow-x-auto custom-scrollbar rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referrals
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-4 text-center text-gray-500"
                    >
                      No users found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.username}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.customer_id}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.phone}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.total_referrals}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.joined_date}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {filteredUsers.length > itemsPerPage && (
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl shadow-md">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                MeerasEstuff Admin
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 md:mt-0">
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contact@meerasestuff.com" // Replace with actual email
                className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>contact@meerasestuff.com</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-0">
              © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminDashboardPage;
