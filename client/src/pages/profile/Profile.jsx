import styles from "../page.module.css";
import Layout from "../layout/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <Layout>
      <div className={styles.page}>
        {isAuthenticated && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ margin: "auto", width: "min-content" }}>{user.given_name}</div>
            <img style={{ margin: "auto" }} src={user.picture} alt="User Profile" />
            <Logout />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Profile;
