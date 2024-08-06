"use client";

import React, { useState, useEffect } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { useRouter, useSearchParams } from "next/navigation";

// Function to fetch posts data from the API based on page, category, and search query
const getData = async (page, cat, searchQuery) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}&search=${searchQuery || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = ({ cat }) => {
  // Initialize router and search parameters for navigation and query handling
  const router = useRouter();
  const searchParams = useSearchParams();

  // State hooks for posts data, total count, search query, and current page
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page")) || 1);

  // Fetch posts data whenever currentPage, category, or searchQuery changes
  useEffect(() => {
    const fetchPosts = async () => {
      const { posts, count } = await getData(currentPage, cat, searchQuery);
      setPosts(posts);
      setCount(count);
    };

    fetchPosts();
  }, [currentPage, cat, searchQuery]);

  // Constants for pagination
  const POST_PER_PAGE = 2;
  const hasPrev = currentPage > 1; // Determine if there is a previous page
  const hasNext = POST_PER_PAGE * currentPage < count; // Determine if there is a next page

  // Handle search input changes and update the URL and state
  const handleSearch = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    setCurrentPage(1); // Reset to first page on new search
    const url = new URL(window.location);
    url.searchParams.set("page", 1);
    url.searchParams.set("search", newSearchQuery);
    window.history.pushState({}, '', url);
  };

  // Handle page changes and update the URL and state
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const url = new URL(window.location);
    url.searchParams.set("page", newPage);
    window.history.pushState({}, '', url);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchQuery}
        onChange={handleSearch}
        className={styles.searchBar}
      />
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination 
        page={currentPage} 
        hasPrev={hasPrev} 
        hasNext={hasNext} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default CardList;
