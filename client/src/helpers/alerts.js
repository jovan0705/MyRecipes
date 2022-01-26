import Swal from "sweetalert2";

export const successAlert = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: "success",
    title: message,
    color: "#0e0e1d",
    iconColor: "#0e0e1d",
    background: "#edc707",
  });
};

export const errorAlert = (message) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
