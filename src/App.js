import "./App.css";
import Button from "./components/Button.js";
import Modal from "./components/Modal.js";
import { useState } from "react";

function App() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return (
    <div className="btn-place">
      <Button
        backgroundColor="tomato"
        text="First button"
        listener={changeShowFirstModal}
      />
      <Button
        backgroundColor="blue"
        text="Second button"
        listener={changeShowSecondModal}
      />
      <div />

      {showFirstModal && (
        <Modal
          header="Do you want to delete this file?"
          closeBtn={true}
          text="Once you delete this file, it won’t be possible to undo this action.
            Are you sure you want to delete it?"
          actions={
            <div className="btn-wrapper">
              <a href="#" className="btn accept">
                Ok
              </a>
              <a href="#" className="btn delay" onClick={deleteAllModal}>
                Cancel
              </a>
            </div>
          }
          deleteModal={deleteAllModal}
        />
      )}

      {showSecondModal && (
        <Modal
          header="Some text"
          closeBtn={false}
          text="Once you delete this file, it won’t be possible to undo this action.
            Are you sure you want to delete it?"
          actions={
            <div className="btn-wrapper">
              <a href="#" className="btn accept">
                Hello
              </a>
              <a href="#" className="btn delay" onClick={deleteAllModal}>
                Bye bye
              </a>
            </div>
          }
          deleteModal={deleteAllModal}
        />
      )}
    </div>
  );

  function changeShowFirstModal() {
    setShowFirstModal(!showFirstModal);
  }

  function changeShowSecondModal() {
    setShowSecondModal(!showSecondModal);
  }

  function deleteAllModal(e) {
    if (
      e.target.className == "modal-background" ||
      e.target.className == "btn-close" ||
      e.target.classList.contains("delay")
    ) {
      setShowFirstModal(false);
      setShowSecondModal(false);
    }
  }
}

export default App;
