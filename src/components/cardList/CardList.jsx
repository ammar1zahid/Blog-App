"use client";

import React, { useState, useEffect } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page")) || 1);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts, count } = await getData(currentPage, cat, searchQuery);
      setPosts(posts);
      setCount(count);
    };

    fetchPosts();
  }, [currentPage, cat, searchQuery]);

  const POST_PER_PAGE = 2;

  const hasPrev = currentPage > 1;
  const hasNext = POST_PER_PAGE * currentPage < count;

  const handleSearch = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    setCurrentPage(1); // Reset to first page on new search
    const url = new URL(window.location);
    url.searchParams.set("page", 1);
    url.searchParams.set("search", newSearchQuery);
    window.history.pushState({}, '', url);
  };

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
