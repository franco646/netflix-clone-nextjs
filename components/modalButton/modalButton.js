import { useState } from "react";

const ModalButton = ({ icon, iconOnClick }) => {
  const [wasClicked, setWasClicked] = useState(false);
  return (
    <button
      onClick={() => setWasClicked(!wasClicked)}
      className="text-white w-6 h-6 rounded-full bg-modal-button hover:bg-modal-button-hover border-modal-button-border hover:border-white border-solid border-[1px] m-0.5"
    >
      <div className="flex items-center justify-center">
        {wasClicked ? iconOnClick || icon : icon}
      </div>
    </button>
  );
};

export default ModalButton;
