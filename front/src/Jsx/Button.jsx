import React from "react";
import "../css/button.css";

/** Vetor com todos os estilos diferentes */
const STYLES = [
  "btn--primary--solid",
  "btn--disabled--solid",
  "btn--primary--outline",
  "btn--primary--transparent",
  "btn--icon--solid",
  "btn--icon--outline",
  "btn--icon--transparent",
  "btn--icon--disabled",
  "btn--primary--open",
  "btn--primary--cancel",
  "btn--primary--disable"
];

/** Vetor com todos os tamanhos diferentes */
const SIZES = ["btn--large", "btn--medium", "btn--small", "btn--auto"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  /** 
   * Se o estilo contido em buttonStyle recebido não
   * pertencer a STYLES, usa STYLES[0] como padrão
   */
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  /**
   * Se o tamanho recebido em buttonSize recebido não
   * pertencer a SIZES, usa SIZES[0] como padrão
   */
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      /** Concatenação */
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};