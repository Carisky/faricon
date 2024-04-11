import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CargoTypeService from "../../api/services/CargoTypeService";
import DestinationService from "../../api/services/DestinationService";
import RequestService from "../../api/services/RequestService";

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
    try {
      await RequestService.create(data);
    } catch (error) {
      console.error("Error creating request:", error);
    }
  };

  return (
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
  );
}

export default AddRequestForm;
