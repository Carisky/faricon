import styles from "../page.module.css";
import Login from "./Login";
import Layout from "../layout/Layout";
function Profile() {
  return (
    <Layout>
      <div className={styles.page}>
        <Login />
      </div>
    </Layout>
  );
}
export default Profile;
