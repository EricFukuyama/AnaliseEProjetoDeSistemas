import { useState } from "react";
import "../css/marketpopup.css";
import { Button } from "./Button";

export const MarketPopup = (setTrigger) => {

  const [sendTradeOffer, setSendTradeOffer] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState([1]);

  const handleChange = (e) => {
    console.log(e)
    setSendTradeOffer({
      ...sendTradeOffer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="marketpopup">
      <div className="inputs">
        {numberOfPlayers.map(() => {
          return (
            <div>
              <div className="txt"
              onChange={handleChange}>Nome</div>
              <input type="text" name="" id="numero" />
              <div className="txt"
              onChange={handleChange}>Numero</div>
              <input type="text" name="" id="nome" />
            </div>
          );
        })}
      </div>
      <div id="btn">
        <Button
          buttonStyle={"btn--primary--outline"}
          buttonSize={"btn--small"}
          onClick={() => {
            var tempArray = [1];
            setNumberOfPlayers(numberOfPlayers.concat(tempArray));
            console.log(numberOfPlayers);
          }}
        >
          Adicionar um jogador
        </Button>

        <Button
          buttonStyle={"btn--primary--outline"}
          buttonSize={"btn--small"}
          onClick={() => {
            setSendTradeOffer(handleChange());
            console.log(sendTradeOffer)
            setTrigger(false);
          }}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};
