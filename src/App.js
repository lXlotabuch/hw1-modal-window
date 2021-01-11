import "./App.css";
import Button from "./components/Button.js";
import Modal from "./components/Modal.js";
import { Component } from "react";

export default class App extends Component {
  state = {
    firstModal: false,
    secondModal: false,
  };

  render() {
    return (
      <div className="btn-place">
        <Button
          backgroundColor="tomato"
          text="First button"
          listener={changeShowFirstModal.bind(this)}
        />
        <Button
          backgroundColor="blue"
          text="Second button"
          listener={changeShowSecondModal.bind(this)}
        />
        <div />

        {this.state.firstModal && (
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
                <a
                  href="#"
                  className="btn delay"
                  onClick={deleteAllModal.bind(this)}
                >
                  Cancel
                </a>
              </div>
            }
            deleteModal={deleteAllModal.bind(this)}
          />
        )}

        {this.state.secondModal && (
          <Modal
            header="Some text"
            closeBtn={false}
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, tenetur?"
            deleteModal={deleteAllModal.bind(this)}
          />
        )}
      </div>
    );
  }
}

function changeShowFirstModal() {
  this.setState({ firstModal: !this.state.firstModal });
}

function changeShowSecondModal() {
  this.setState({ secondModal: !this.state.secondModal });
}

function deleteAllModal(e) {
  if (
    e.target.classList.contains("modal-background") ||
    e.target.classList.contains("btn-close") ||
    e.target.classList.contains("delay")
  ) {
    this.setState({ firstModal: false, secondModal: false });
  }
}
