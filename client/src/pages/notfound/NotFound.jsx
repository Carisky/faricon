import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
    const [timeLeft,setTime] = useState(3)
    useEffect(()=>{
        setInterval(()=>{setTime(timeLeft-1)},1000)
        setTimeout(()=>{navigate("/")},3050)
    },[timeLeft,navigate])

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        backgroundColor: "rgb(16, 20, 24)",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          height: "400px",
          width: "800px",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "80px",
          fontFamily:"fantasy"
        }}
      >
        <Box sx={{color:"#5f0696"}}>404</Box>
        <Box sx={{
            textAlign:"center"
        }}>Page Not Found</Box>
        <Box sx={{
            fontSize:"40px",
            color:"#f58442"
        }}>Redirect In {timeLeft} seconds...</Box>
      </Box>
      
    </Box>
  );
}
