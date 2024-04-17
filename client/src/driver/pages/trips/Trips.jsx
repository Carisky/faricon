import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import styles from "../page.module.css";
import TripService from "../../../api/services/TripService";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    const fetchTripsForDriver = async () => {
      try {
        const response = await TripService.getTripsForDriver(userState.name);
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips for driver:", error);
      }
    };

    fetchTripsForDriver();
  }, []);

  const handleFinishTrip = async (trip) => {
    try {
        await TripService.finishTrip(userState.name, trip);
        const updatedTrips = trips.filter(t => t.id !== trip.id);
        setTrips(updatedTrips);
        console.log("Trip finished:", trip);
    } catch (error) {
        console.error("Error finishing trip:", error);
    }
};


  return (
    <Layout>
      <div className={styles.page}>
        <h1>Trips for Driver: {userState.name}</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trip ID</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Car Brand</TableCell>
                <TableCell>Carrying Capacity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Intermediate Cost</TableCell>
                <TableCell>Finish</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trips?.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.id}</TableCell>
                  <TableCell>{trip.request.destination.name}</TableCell>
                  <TableCell>{trip.car.brand}</TableCell>
                  <TableCell>{trip.car.carryingCapacity}</TableCell>
                  <TableCell>{trip.status ? "Active" : "Inactive"}</TableCell>
                  <TableCell>{trip.intermediateCost}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleFinishTrip(trip)}>
                      Finish
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
