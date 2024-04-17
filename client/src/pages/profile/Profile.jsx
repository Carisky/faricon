import styles from "../page.module.css";
import Layout from "../layout/Layout";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
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
              role : {userState.role} <PersonIcon />
            </Box>
            <Logout />
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

export default Profile;
