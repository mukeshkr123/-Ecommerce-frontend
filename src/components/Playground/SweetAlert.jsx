import Swal from "sweetalert2";

const SweetAlert = ({ icon, title, text }) => {
  Swal.fire({
    icon,
    title,
    text,
  });
};

export default SweetAlert;
