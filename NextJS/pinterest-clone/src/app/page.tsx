"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TopComp from "@/components/TopComp";
import SearcComp from "@/components/SearchComp";
import SaveComp from "@/components/SaveComp";
import ShopComp from "@/components/ShopComp";
import BottomComp from "@/components/BottomComp";

export default function Home() {

  return (
    <main className={styles.main}>
      <TopComp/>
      <SearcComp/>
      <SaveComp/>
      <ShopComp/>
      <BottomComp/>
    </main>
  );
}
