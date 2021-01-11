import "./Button.scss";

export default function Button({ backgroundColor, listener, text }) {
  return (
    <a
      href="#"
      className="btn-big"
      style={{ backgroundColor: backgroundColor }}
      onClick={listener}
    >
      {text}
    </a>
  );
}
