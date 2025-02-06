import { X } from "lucide-react";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  isCancelBtn?: boolean;
  submitBtnText: string;
  submitHandler: () => void;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  isCancelBtn,
  submitBtnText,
  submitHandler,
}: ModalProps) => {
  const handleSubmitBtnClicked = () => {
    submitHandler();
    onClose();
  };

  return (
    // backdrop
    <div
      className={`fixed inset-[0px] flex justify-center items-center transition-colors z-50 ${
        isOpen ? "visible bg-neutral-600/30" : "invisible"
      }`}
      onClick={onClose}
    >
      {/* modal */}
      <div
        className={`w-[350px] bg-neutral-50 rounded-lg p-3 flex flex-col gap-5 text-center transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-[8px] right-[8px] cursor-pointer"
          onClick={onClose}
        >
          <X />
        </span>

        {/* content */}
        <div className="flex flex-col gap-3">
          <p className="headline text-neutral-text font-bold">{title}</p>
          <p className="text-neutral-weak text-sm text-center">{description}</p>
        </div>

        {/* action buttons */}
        <div className="flex items-center justify-center gap-5">
          {isCancelBtn && (
            <Button variant="primary" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button variant="error" onClick={handleSubmitBtnClicked}>
            {submitBtnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
