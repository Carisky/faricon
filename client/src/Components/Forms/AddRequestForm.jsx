import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CargoTypeService from "../../api/services/CargoTypeService";
import DestinationService from "../../api/services/DestinationService";
import RequestService from "../../api/services/RequestService";
import { Box } from "@mui/material";
import { dismissToast, showToast } from "../Toast/showToast";
function AddRequestForm() {
  const [cargoTypes, setCargoTypes] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CargoTypeService.findAll();
        setCargoTypes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DestinationService.findAll();
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loadingToastId = await showToast("Submitting request...");
    try {
      const response = await RequestService.create(data);
      dismissToast(loadingToastId);
      if (response.status === 200) {
        showToast("Request submitted successfully!", 'success');
      } else {
        showToast("Failed to submit request. Please try again later.", 'error');
      }
    } catch (error) {
      dismissToast(loadingToastId);
      showToast(error.message || "Something went wrong", 'error');
    }
  };

  return (
    <Box>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Cargo Quantity"
        {...register("cargo_quantity")}
        fullWidth
        margin="normal"
        error={!!errors.cargo_quantity}
        type="number"
      />
      <TextField
        select
        label="Cargo Type"
        {...register("cargo_type")}
        fullWidth
        margin="normal"
      >
        {cargoTypes.map((cargoType) => (
          <MenuItem key={cargoType.id} value={cargoType.id}>
            {cargoType.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Destination"
        {...register("destination_id")}
        fullWidth
        margin="normal"
      >
        {destinations.map((destination) => (
          <MenuItem key={destination.id} value={destination.id}>
            {destination.name}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

    </form>
    </Box>
  );
}

export default AddRequestForm;
