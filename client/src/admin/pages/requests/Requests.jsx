import { useState, useEffect } from "react";
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

function Requests() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RequestService.findAll();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
                <TableCell>Cargo Type</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Cargo Quantity</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row) => (
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
        </TableContainer>
      </div>
    </Layout>
  );
}

export default Requests;
