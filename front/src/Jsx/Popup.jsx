import React, {useEffect} from "react";
import "../css/popup.css";
import CloseIcon from "../icons/CloseIcon";

// Componente de Popup
// Encapsula um componente de tela e possui um trigger pra ser ativado e desativado
// enableCloseIcon é um bool que define se o popup possuirá botão de fechar ou não

export const Popup = ({ children, trigger, setTrigger, enableCloseIcon }) => {
  
  // Tentativa de fazer o popup fechar ao apertar esq
  // useEffect(() => {
  //   document.onkeyprssed = function (event) {
  //     if (event.keyCode == 27) setTrigger(false);
  //   };
  // }, []);


  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          buttonStyle="btn--primary--transparent"
          onClick={() => setTrigger(false)}
        >
          {enableCloseIcon === false ? "" : <CloseIcon style={{size: 24}}/>}
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};
