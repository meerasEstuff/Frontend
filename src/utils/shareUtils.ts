// utils/shareUtils.ts

import { Dispatch, SetStateAction } from "react";
import { getErrorMessage } from "./error"; //

/**
 * Handles sharing a customer ID using Web Share API or copying to clipboard.
 * @param customerId The customer ID to share.
 * @param username The username associated with the customer ID.
 * @param setCopiedMessageId A state setter function to update the copied message ID.
 */
export const handleShareCustomerId = async (
  customerId: string,
  username: string,
  setCopiedMessageId: Dispatch<SetStateAction<string | null>>
) => {
  const shareText = `Check out ${username}'s customer ID: ${customerId} on MeerasEstuff!`;

  if (navigator.share) {
    // Use Web Share API if available
    try {
      await navigator.share({
        title: "MeerasEstuff Customer ID",
        text: shareText,
      });
      // Optionally, you can add a success message here if the share was completed.
      // console.log('Share successful!');
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        (error as { name: string }).name === "AbortError"
      ) {
        console.log("Share canceled by user.");
      } else {
        // Other unexpected errors during sharing
        const errorMessage = getErrorMessage(error); // Use the utility function
        console.error("Error sharing:", errorMessage);
        alert(`Failed to share: ${errorMessage}. Please try again.`); // Provide user feedback for actual errors
      }
    }
  } else {
    // Fallback to copying to clipboard
    try {
      await navigator.clipboard.writeText(customerId);
      setCopiedMessageId(customerId); // Set the ID of the copied item
      setTimeout(() => setCopiedMessageId(null), 2000); // Clear message after 2 seconds
    } catch (err: unknown) {
      // Changed 'err' to 'unknown'
      const errorMessage = getErrorMessage(err); // Use the utility function
      console.error("Failed to copy customer ID:", errorMessage);
      alert(
        `Failed to copy customer ID: ${errorMessage}. Please try again manually.`
      );
    }
  }
};
