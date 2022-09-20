import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const showDefaultSuccessMessage = () => {
  
  return toast("The process is successfull");

};

const showDefaultErrorMessage = () => {
  return toast("Sorry! An error occured");
};

const createToastMessage = (message:string) => {
  return toast(message);
};


export const ToastService = {
  showDefaultSuccessMessage,
  showDefaultErrorMessage,
  createToastMessage
};