import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

export const IziSuccess = (msg) =>
  iziToast.success({
    message: msg,
    position: "topRight",
  });

export const IziError = (msg) =>
  iziToast.error({
    title: "Error",
    message: msg,
    position: "topRight",
  });

export const IziWarning = (msg) =>
  iziToast.warning({
    title: "warning",
    message: msg,
    position: "topRight",
  });
