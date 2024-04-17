import { toast } from 'react-toastify';

export const showToast = async (message, type = 'info') => {
  const toastId = toast[type](message);
  return toastId;
};

export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};