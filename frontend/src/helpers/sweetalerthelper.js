import Swal from "sweetalert2";

const successAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    iconColor: "#40916c",
    showCloseButton: false,
    showConfirmButton: false,
    timer: 2000,
    width: "23em",
    position: "center",
    timerProgressBar: true,
    customClass: "sweetalert",

  });
};

const successAlertFast = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    iconColor: "#40916c",
    showCloseButton: false,
    showConfirmButton: false,
    timer: 1000,
    width: "23em",
    position: "center",
    customClass: "sweetalert",



    timerProgressBar: true,
  });
};

const failedAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    iconColor: "#6a040f",
    confirmButtonText: "Close",
    allowEnterKey: true,
    timer: 1500,
    timerProgressBar: true,
    width: "23em",
    position: "center",
    customClass: "sweetalert",


  });
};

const resetInfoAlert = () => {
  Swal.fire({
    title: "Reset Link sent",
    text: "A link to reset your password has been sent to your email, please check your email",
    icon: "info",
    confirmButtonText: "Close",
    allowEnterKey: true,
    timer: 1500,
    timerProgressBar: true,
  });
};
const infoAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "info",
    confirmButtonText: "Close",
    allowEnterKey: true,
    timer: 1500,
    timerProgressBar: true,
  });
};

const warningAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    iconColor: "#f48c06",
    confirmButtonText: "Close",
    allowEnterKey: true,
    timer: 1500,
    timerProgressBar: true,
    width: "23em",
    position: "center",
    customClass: "sweetalert",


  });
};
export { successAlert, successAlertFast, failedAlert, resetInfoAlert, warningAlert, infoAlert };