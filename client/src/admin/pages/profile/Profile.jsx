import styles from "../page.module.css";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Layout from "../Layout/Layout";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
function Profile() {
  const userState = useSelector((state) => state.user);

  return (
    <Layout>
      <div className={styles.page}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box>name : {userState.name}</Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              role : {userState.role} <LocalPoliceIcon />
            </Box>
            <Logout />
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

export default Profile;
