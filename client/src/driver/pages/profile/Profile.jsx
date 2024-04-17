import styles from "../page.module.css";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Layout from "../Layout/Layout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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
              role : {userState.role} <DirectionsCarIcon />
            </Box>
            <Logout />
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

export default Profile;
