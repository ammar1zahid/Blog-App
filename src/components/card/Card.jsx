import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

// const Card = ({ key, item }) => {
const Card = () => {
  return (
    <div className={styles.container} >
      
      
        <div className={styles.imageContainer}>
          hell this is image
         
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

  
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
             29.07.2024
          </span>
          <span className={styles.category}>Travel</span>
        </div>
        <Link href={`/`}>
          <h1>post tittle</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cupiditate, ad odit temporibus pariatur magni et ex numquam modi, vitae perferendis ea maxime cum, recusandae alias accusantium nulla reiciendis dolorem.</p>
        
        {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/> */}
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>


    // <div className={styles.container} key={key}>
    //   {item.img && (
    //     <div className={styles.imageContainer}>
    //       <Image src={item.img} alt="" fill className={styles.image} />
    //     </div>
    //   )}
    //   <div className={styles.textContainer}>
    //     <div className={styles.detail}>
    //       <span className={styles.date}>
    //         {item.createdAt.substring(0, 10)} -{" "}
    //       </span>
    //       <span className={styles.category}>{item.catSlug}</span>
    //     </div>
    //     <Link href={`/posts/${item.slug}`}>
    //       <h1>{item.title}</h1>
    //     </Link>
    //     {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
    //     <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
    //     <Link href={`/posts/${item.slug}`} className={styles.link}>
    //       Read More
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Card;
