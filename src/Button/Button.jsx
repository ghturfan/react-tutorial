//import styles from './Button.module.css';
import React from 'react';

function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default Button;
