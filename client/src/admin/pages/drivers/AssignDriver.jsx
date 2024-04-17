import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import CarService from "../../../api/services/CarService";
import TripService from "../../../api/services/TripService";
import { dismissToast, showToast } from "../../../Components/Toast/showToast";
import { Box } from "@mui/material";
function AssignDriver({ drivers, requests }) {
  const [currentDriver, setCurrentDriver] = useState(
    drivers.length > 0 ? drivers[0] : null
  );
  const [cars, setCars] = useState();
  // eslint-disable-next-line
  const [currentCar, setCurrentCar] = useState();
  const [currentRequest, setCurrentRequest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const loadingToastId = await showToast("Fetching data...");
      try {
        const response = await CarService.findAll();
        dismissToast(loadingToastId);
        setCars(response.data);
        showToast("Data fetched successfully!", 'success');
      } catch (error) {
        dismissToast(loadingToastId);
        console.error("Error fetching data:", error);
        showToast(error.message || "Error fetching data", 'error');
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const loadingToastId = await showToast("Fetching data...");
    try {
      await TripService.create(data);
      dismissToast(loadingToastId);
      showToast("Driver assigned!", "success");
    } catch (error) {
      dismissToast(loadingToastId);
      showToast(error.message || "Error Driver assigning", "error");
    }
  };

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();

  return (
    <Box>
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

    </Box>
  );
}

export default AssignDriver;
