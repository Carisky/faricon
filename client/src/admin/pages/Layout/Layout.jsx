import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css";
import Navigation from '../../Components/Navigation/Navigation';
import {useNavigate} from "react-router-dom"
export default function Layout({ children }) {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
    if (user.role !== "ADMIN") {
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
