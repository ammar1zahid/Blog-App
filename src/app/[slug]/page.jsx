import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// const SinglePage = async ({ params }) => {
const SinglePage = async () => {
  // const { slug } = params;

  // const data = await getData(slug);


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          {/* <h1 className={styles.title}>{data?.title}</h1> */}
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
           
            {/* {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )} */}
            <div className={styles.userTextContainer}>
              {/* <span className={styles.username}>{data?.user.name}</span> */}
              <span className={styles.username}>Ammar Zahid</span>
              <span className={styles.date}>30.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )} */}
       
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
       
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nihil quas pariatur, velit quos nulla corporis at dignissimos rem voluptatum hic. At placeat error, consequuntur facilis quibusdam accusamus ea amet.</p>
          </div>
          {/* <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          /> */}
          <div className={styles.comment}>
            {/* <Comments postSlug={slug}/> */}
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
