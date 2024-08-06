"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

// Pagination component for navigating through pages
const Pagination = ({ page, hasPrev, hasNext, onPageChange }) => {
  const router = useRouter();

  // Handler for page changes, calls the onPageChange prop function
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className={styles.container}>
      {/* Button to navigate to the previous page */}
      <button
        className={styles.button}
        disabled={!hasPrev} // Disable if no previous page
        onClick={() => handlePageChange(page - 1)} // Go to previous page
      >
        Previous
      </button>

      {/* Display the current page number */}
      <span>Page {page}</span>

      {/* Button to navigate to the next page */}
      <button
        className={styles.button}
        disabled={!hasNext} // Disable if no next page
        onClick={() => handlePageChange(page + 1)} // Go to next page
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
