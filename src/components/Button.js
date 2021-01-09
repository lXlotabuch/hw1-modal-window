import "./Button.scss";

function Button(props) {
  return (
    <a
      href="#"
      className="btn-big"
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.listener}
    >
      {props.text}
    </a>
  );
}

export default Button;
