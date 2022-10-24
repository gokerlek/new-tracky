import { Dialog } from "@headlessui/react";

const Modal = ({
  isOpen,
  setIsOpen,
  extraFunction,
  stopCloseModalWhenOutsideClicked,
  children,
}) => {
  const closeModal = () => {
    if (!stopCloseModalWhenOutsideClicked) {
      setIsOpen(false);
    }

    if (extraFunction) {
      extraFunction();
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex mt-[194px] justify-center p-4">
        {children}
      </div>
    </Dialog>
  );
};

export default Modal;
