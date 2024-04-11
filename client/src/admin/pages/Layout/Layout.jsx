import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; // Импортируем useSelector из react-redux
import styles from "./styles.module.css";
import Navigation from '../../Components/Navigation/Navigation';
import {useNavigate} from "react-router-dom"
export default function Layout({ children }) {
  // Получаем информацию о пользователе из Redux-стейта
  const user = useSelector(state => state.user); // Предположим, что ваш стейт называется user и содержит информацию о текущем пользователе
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
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
