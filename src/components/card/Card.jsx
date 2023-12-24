import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import img from "./../../../public/coding";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10/11/2023</span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2>iu iuonhi jil</h2>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          //   dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
