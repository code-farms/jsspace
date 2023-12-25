import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";

const CardList = async ({ page, cat }) => {
  const posts = [1, 2, 3, 4, 5];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card key={item} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
