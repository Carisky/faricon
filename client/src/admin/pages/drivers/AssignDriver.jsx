import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import CarService from "../../../api/services/CarService";
import TripService from "../../../api/services/TripService";

function AssignDriver({ drivers, requests }) {
  const [currentDriver, setCurrentDriver] = useState(
    drivers.length > 0 ? drivers[0] : null
  );
  const [cars, setCars] = useState();
  const [currentCar, setCurrentCar] = useState();
  const [currentRequest, setCurrentRequest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CarService.findAll();
        setCars(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const fetchData = async () => {
      try {
        const response = await TripService.create(data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required={true}
        select
        label="Driver"
        {...register("driver")}
        fullWidth
        margin="normal"
        onChange={(e) => {
          setCurrentDriver(e.target.value);
        }}
      >
        {drivers.map(
          (driver) =>
            driver.status && (
              <MenuItem key={driver.id} value={driver}>
                {driver.name}
              </MenuItem>
            )
        )}
      </TextField>

      <TextField
        required={true}
        select
        label="Request"
        {...register("request")}
        fullWidth
        margin="normal"
        onChange={(e) => {
          setCurrentRequest(e.target.value);
        }}
      >
        {requests.map(
          (request) =>
            currentDriver &&
            request.cargoType.require_xp <= currentDriver.experience && (
              <MenuItem key={request.id} value={request}>
                {request.destination.name}
              </MenuItem>
            )
        )}
      </TextField>

      <TextField
        required={true}
        select
        label="Car"
        {...register("car")}
        fullWidth
        margin="normal"
        onChange={(e) => {
          setCurrentCar(e.target.value);
        }}
      >
        {cars?.map(
          (car) =>
            car.carryingCapacity >= currentRequest?.cargoQuantity &&
            car.condition && (
              <MenuItem key={car.id} value={car}>
                {car.brand}
              </MenuItem>
            )
        )}
      </TextField>

      <Button type="submit" variant="contained" color="primary">
        Assign Driver
      </Button>
    </form>
  );
}

export default AssignDriver;
