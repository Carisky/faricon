import styles from "../page.module.css";
import Layout from "../layout/Layout";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
function Profile() {

  const userState = useSelector((state) => state.user);

  return (
    <Layout>
      <div className={styles.page}>
        <Box>
          name : {userState.name}
        </Box>
        <Box>
          role : {userState.role}
        </Box>
        <Logout/>
      </div>
    </Layout>
  );
}

export default Profile;
