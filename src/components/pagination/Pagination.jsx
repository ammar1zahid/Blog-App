"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext, onPageChange }) => {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
