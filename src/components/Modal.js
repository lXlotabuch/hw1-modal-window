import "./Modal.scss";

export default function Modal({
  deleteModal,
  header,
  closeBtn,
  text,
  actions,
}) {
  return (
    <div className="modal-background" onClick={deleteModal}>
      <div className="modal">
        <div className="modal-header">
          <p className="header-name">{header}</p>
          {closeBtn && (
            <a href="#" className="btn-close" onClick={deleteModal}>
              X
            </a>
          )}
        </div>
        <div className="modal-content">
          <p className="content-text">{text}</p>
          {actions}
        </div>
      </div>
    </div>
  );
}
