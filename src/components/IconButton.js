import React from "react";
import useStyles from "../styles/IconButtonStyles";
import { Link } from "react-router-dom";

export default function IconButton(props) {
  const classes = useStyles();
  const link = props.link || "/";
  const text = props.text || "Button";
  const icon = props.icon || "fas fa-play";
  return (
    <Link className={classes.button} to={link}>
      <span>{text}</span> <i class={icon} />
    </Link>
  );
}
