import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAuthStore from "../../../states/useAuthStore";
import Navigation from '../../../Components/Navigation/Navigation';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state);

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/access-denied")
    }
  }, [user.role,navigate]);

  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
    </div>
  );
}
