import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../Layout/Layout";
import RequestService from "../../../api/services/RequestService";
import DriverService from "../../../api/services/DriverService";
import AssignDriver from "../drivers/AssignDriver";
import { dismissToast, showToast } from "../../../Components/Toast/showToast";
import { Button } from "@mui/material";

function Requests() {
  const [data, setData] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
    fetchDrivers();
  }, []); // Fetch data whenever currentPage changes

  const fetchData = async () => {
    const loadingToastId = await showToast("Fetching request data...");
    try {
      const response = await RequestService.findAll();
      dismissToast(loadingToastId);
      setData(response.data);
      console.log(response.data);
      showToast("Request data fetched successfully!", "success");
    } catch (error) {
      dismissToast(loadingToastId);
      console.error("Error fetching request data:", error);
      showToast(error.message || "Error fetching request data", "error");
    }
  };

  const fetchDrivers = async () => {
    const loadingToastId = await showToast("Fetching driver data...");
    try {
      const response = await DriverService.findAll();
      dismissToast(loadingToastId);
      setDrivers(response.data);
      console.log(response.data);
      showToast("Driver data fetched successfully!", "success");
    } catch (error) {
      dismissToast(loadingToastId);
      console.error("Error fetching drivers:", error);
      showToast(error.message || "Error fetching drivers", "error");
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  return (
    <Layout>
      <div className={styles.page}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Cargo Type</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Cargo Quantity</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.slice(startIndex, endIndex).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.cargoType?.name}</TableCell>
                    <TableCell>{row.destination?.name}</TableCell>
                    <TableCell>
                      {row.cargoQuantity == null ? "0" : row.cargoQuantity}
                    </TableCell>
                    <TableCell>{row.status ? "Active" : "Inactive"}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Button
            disabled={currentPage === 1} // Disable previous button on first page
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={endIndex >= data.length} // Disable next button on last page
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </TableContainer>
        <AssignDriver drivers={drivers} requests={data} />
      </div>
    </Layout>
  );
}

export default Requests;
