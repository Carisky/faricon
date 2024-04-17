import { useState, useEffect } from "react";
import styles from "../page.module.css";
import DriverService from "../../../api/services/DriverService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../Layout/Layout";
import { dismissToast, showToast } from "../../../Components/Toast/showToast";

function Drivers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loadingToastId = await showToast("Fetching data...");
      try {
        const response = await DriverService.findAll();
        dismissToast(loadingToastId);
        setData(response.data);
        console.log(response.data);
        showToast("Data fetched successfully!", "success");
      } catch (error) {
        dismissToast(loadingToastId);
        console.error("Error fetching data:", error);
        showToast(error.message || "Error fetching data", "error");
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.page}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.experience}</TableCell>
                    <TableCell>{row.status ? "Active" : "Inactive"}</TableCell>
                    <TableCell>{row.earnings}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}

export default Drivers;
