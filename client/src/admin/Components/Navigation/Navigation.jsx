import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { Box, Divider } from "@mui/material";

const root="/admin";

const actions = [
  { link: root, label: "Home" },
  { link: root+"/drivers", label: "drivers" },
  { link: root+"/requests", label: "requests" },
  { link: root+"/profile", label: "profile" },
];

function Navigation() {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const selectedAction = actions.find(
      (action) => action.link === currentPath
    );
    setIsSelected(selectedAction ? selectedAction.link : null);
  }, [location]);

  return (
    <nav className={styles.nav}>
      <Box className={styles.navlist}>
        {actions.map((element, index) => (
          <Box key={index}>
            <Box
              className={`${styles.navelement} ${
                isSelected === element.link ? styles.selected : ""
              }`}
            >
              <Link className={styles.link} to={element.link}>
                {element.label}
              </Link>
            </Box>
            <Divider
              sx={{
                background: "#fff",
                width: "90%",
                margin: "auto",
              }}
              className={styles.divider}
            />
          </Box>
        ))}
      </Box>
    </nav>
  );
}

export default Navigation;
