"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#0f172a" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
