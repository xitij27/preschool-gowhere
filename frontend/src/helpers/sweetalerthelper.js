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
  });
};
export { successAlert, failedAlert, resetInfoAlert, warningAlert, infoAlert };