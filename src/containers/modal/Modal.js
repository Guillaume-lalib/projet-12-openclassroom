import React from "react";

const SimpleModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="modal">
      <button
        className="modal-close"
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <div className="modal-body">{children}</div>
    </div>
  );

  return content;
};

export default SimpleModal;
