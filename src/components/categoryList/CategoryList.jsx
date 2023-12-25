import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import img from "./../../../public/coding.png";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData();

  const data = [
    {
      _id: 1,
      slug: "coding",
      img: { img },
      title: "Next",
      category: "coding",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => {
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={`${item.img}`}
                alt="Cat"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
