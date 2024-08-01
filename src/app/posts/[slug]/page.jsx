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
          <h1 className={styles.title}>Ammar Blog</h1>
          <div className={styles.user}>
            
              <div className={styles.userImageContainer}>
                {/* <Image src="/p1.jpeg" alt="" fill className={styles.avatar} /> */}
                <Image src="data:image/jpeg;base64,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" alt="" fill className={styles.avatar} />
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
            {/* <Image src="/p1.jpeg" alt="" fill className={styles.image} /> */}
            <Image src="data:image/jpeg;base64,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" alt="" fill className={styles.image} />
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
            {/* <Comments /> */}
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
