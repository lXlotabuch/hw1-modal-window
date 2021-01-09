import "./Modal.scss";

function Modal(props) {
  return (
    <div className="modal-background" onClick={props.deleteModal}>
      <div className="modal">
        <div className="modal-header">
          <p className="header-name">{props.header}</p>
          {props.closeBtn && (
            <a href="#" className="btn-close" onClick={props.deleteModal}>
              X
            </a>
          )}
        </div>
        <div className="modal-content">
          <p className="content-text">{props.text}</p>
          {props.actions}
        </div>
      </div>
    </div>
  );
}

export default Modal;
