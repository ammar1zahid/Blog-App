"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useState } from "react";

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   const data = await res.json();

//   if (!res.ok) {
//     const error = new Error(data.message);
//     throw error;
//   }

//   return data;
// };

const Comments = () => {
// const Comments = ({ postSlug }) => {
  // const { status } = useSession();

  // const { data, mutate, isLoading } = useSWR(
  //   `http://localhost:3000/api/comments?postSlug=${postSlug}`,
  //   fetcher
  // );

  const status = "authenticated";

  // const [desc, setDesc] = useState("");

  // const handleSubmit = async () => {
  //   await fetch("/api/comments", {
  //     method: "POST",
  //     body: JSON.stringify({ desc, postSlug }),
  //   });
  //   mutate();
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            // onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} 
          // onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/p1.jpeg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/p1.jpeg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                
                    <Image
                      src="/p1.jpeg"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
              
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Ammar Zahid</span>
                    <span className={styles.date}>31.07.2024</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae dolores eius doloremque hic, nemo ipsam ipsa consequuntur dicta. Eligendi, rerum ducimus explicabo impedit atque nemo? Assumenda omnis corrupti blanditiis!</p>
              </div>
      </div>



      {/* <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div> */}
    </div>
  );
};

export default Comments;
