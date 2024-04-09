import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-input': {
        color: '#fff',
      },
      '& .MuiInputLabel-root': {
        color: '#fff',
      },
    '& label.Mui-focused': {
      color: '#3283a8',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3283a8',
      },
    },
  });

function AddRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CssTextField
        label="Example"
        {...register("example")}
        fullWidth
        margin="normal"
      />

      <CssTextField
        label="Example Required"
        {...register("exampleRequired")}
        fullWidth
        margin="normal"
        error={!!errors.exampleRequired}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default AddRequestForm;
