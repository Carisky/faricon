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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <LocalPoliceIcon
                sx={{
                  height: "200px",
                  width: "200px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>name : {userState.name}</Box>
              </Box>
              <Box
                sx={{
                  color:"#90caf9",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                role : {userState.role}
              </Box>
              <Logout />
            </Box>
          </Box>
        </Box>
      </div>
    </Layout>
  );
}

export default Profile;
