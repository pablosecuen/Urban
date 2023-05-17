import { ToastContainer, toast } from "react-toastify";

const ToastComponent = ({
  position = "bottom-right",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = false,
  pauseOnHover = false,
  draggable = true,
  theme = "light",
  closeButton = false,
}: any) => {
  return (
    <>
      <ToastContainer
        closeButton={closeButton}
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        closeOnClick={closeOnClick}
        pauseOnHover={pauseOnHover}
        draggable={draggable}
        theme={theme}
      />
    </>
  );
};

export default ToastComponent;
