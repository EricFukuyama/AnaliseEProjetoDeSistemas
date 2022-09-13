import { useState } from "react";
import { Popup } from "./Popup";
import "../css/trademarket.css";
import { Button } from "./Button";
import { MarketPopup } from "./MarketPopup"

export const TradeMarket = () => {

    const [openPopup,setOpenPopup] = useState(false);
    
  return (
    <div className="trademarket">
      <div id="market-tittle"></div>
      <div className="grid-container">
        <div className="grid-item">
          <div className="box-picture">
            <img
              id="img"
              src="https://s2.glbimg.com/XZo5vn5AZJrMjK56fPvKJrSdgH4=/0x0:577x747/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/8/q/Kc2z6zQjq9vLFshcLR0w/figurinha-lionel-messi.jpg"
              alt=""
            />
          </div>
          <div className="box-info">
            <div className="box-user">Josney</div>
            <div className="box-player">Quer o Messi</div>
          </div>
          <div className="box-btn">
            {" "}
            <Button
              buttonStyle={"btn--primary--outline"}
              buttonSize={"btn--small"}
              onClick={() =>{
                setOpenPopup(true)
              }}
            >
              Eu tenho
            </Button>
          </div>
        </div>
        <div className="grid-item">
          <div className="box-picture">
            <img
              id="img"
              src="https://s2.glbimg.com/4KTZ0lE2CyiZZV4wON2GKicmouA=/0x0:575x746/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/L/t/HTz1c0S0AlAhVJwc5vjA/figurinha-cristiano-ronaldo.jpg"
              alt=""
            />
          </div>
          <div className="box-info">
            <div className="box-user">Virjão</div>
            <div className="box-player">Quer o ROBO</div>
          </div>
          <div className="box-btn">
            <Button
              buttonStyle={"btn--primary--outline"}
              buttonSize={"btn--small"}
              onClick={() =>{
                setOpenPopup(true)
              }}
            >
              Eu tenho
            </Button>
          </div>
        </div>
      </div>
      <Popup trigger={openPopup} setTrigger={setOpenPopup}>
              <MarketPopup></MarketPopup>
      </Popup>
    </div>
  );
};
