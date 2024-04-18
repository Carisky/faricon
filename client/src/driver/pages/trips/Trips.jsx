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
import { dismissToast, showToast } from "../../../Components/Toast/showToast";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    const fetchTripsForDriver = async () => {
      const loadingToastId = await showToast("Fetching trips for driver...");
      try {
        const response = await TripService.getTripsForDriver(userState.name);
        dismissToast(loadingToastId);
        setTrips(response.data);
        showToast("Trips for driver fetched successfully!", "success");
      } catch (error) {
        dismissToast(loadingToastId);
        console.error("Error fetching trips for driver:", error);
        showToast(error.message || "Error fetching trips for driver", "error");
      }
    };

    fetchTripsForDriver();
    // eslint-disable-next-line
  }, []);

  const handleFinishTrip = async (trip) => {
    const loadingToastId = await showToast("Finishing trip...");
    try {
      await TripService.finishTrip(userState.name, trip);
      dismissToast(loadingToastId);
      const updatedTrips = trips.filter((t) => t.id !== trip.id);
      setTrips(updatedTrips);
      console.log("Trip finished:", trip);
      showToast("Trip finished successfully!", "success");
    } catch (error) {
      dismissToast(loadingToastId);
      console.error("Error finishing trip:", error);
      showToast(error.message || "Error finishing trip", "error");
    }
  };

  return (
    <Layout>
      <div className={styles.page}>
        <h1>Trips for Driver: {userState.name}</h1>
        {trips.length>0 ? 
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
        :
        <div>
          no trips for {userState.name}
        </div>
        }
      </div>
    </Layout>
  );
}
