"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  // State to manage the open/close state of the responsive menu
  const [open, setOpen] = useState(false);

  // Retrieve session data and status from next-auth
  const { data } = useSession();
  const { status } = useSession();

  // Log session data for debugging purposes
  console.log(data);

  return (
    <>
      {/* Display login link if the user is unauthenticated */}
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          {/* Display "Write" and "Logout" links if the user is authenticated */}
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span 
            className={styles.link} 
            onClick={() => signOut()} // Call signOut function on click
          >
            Logout
          </span>
        </>
      )}

      {/* Burger menu for mobile/responsive view */}
      <div 
        className={styles.burger} 
        onClick={() => setOpen(!open)} // Toggle menu open/close on click
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div> 

      {/* Responsive menu, displayed when the burger menu is open */}
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>

          {/* Display login or authenticated links in the responsive menu */}
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span 
                className={styles.link} 
                onClick={() => signOut()} // Call signOut function on click
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
