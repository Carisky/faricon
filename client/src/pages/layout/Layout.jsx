import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"
import Navigation from '../../Components/Navigation/Navigation';
export default function Layout({ children }) {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
    if (user.role !== "USER") {
      navigate("/access-denied")
    }
    // eslint-disable-next-line
  }, [user.role,navigate]);
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
    </div>
  );
}
