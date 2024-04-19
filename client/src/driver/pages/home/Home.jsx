import React from "react";
import Layout from "../Layout/Layout";
import styles from "../page.module.css"
import { useSelector } from "react-redux";
export default function Home() {
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <div className={styles.page}>Hello {user.name}</div>
    </Layout>
  );
}
