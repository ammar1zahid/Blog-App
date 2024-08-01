import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = () => {
// const BlogPage = ({ searchParams }) => {
  // const page = parseInt(searchParams.page) || 1;
  // const { cat } = searchParams;

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>{cat} Blog</h1> */}
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        {/* <CardList page={page} cat={cat}/> */}
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
