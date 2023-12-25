import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import img from "./../../../public/coding.png";

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
        <h2 className={styles.heading}>iu iuonhi jil</h2>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sint
          perferendis sit velit alias deserunt suscipit quibusdam. Iste,
          exercitationem nobis!
        </p>
        <div className={styles.desc} />
        <Link href="" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
