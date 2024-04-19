import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import styles from "../page.module.css";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <div className={styles.page}>
        <div>Hello {user.name}</div>
      </div>
    </Layout>
  );
}
export default Home;
