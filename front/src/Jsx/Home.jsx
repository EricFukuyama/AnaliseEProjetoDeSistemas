import "../css/home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WishingList } from "./WishingList";
import { TradeMarket } from "./TradeMarket";
import LogoutIcon from "../icons/LogoutIcon";

export const Home = () => {
  return (
    <div className="home">
      <div id="logout">
        <span
          id="icon"
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <LogoutIcon />
        </span>
      </div>

      {/* <div className="title-name">WWW.CHATURBATE.COM</div> */}

      <div className="nav">
        <div className="tabs">
          <Link to="/home/trademarket">Mercado de Figuras</Link>
        </div>
        <div className="tabs">
          <Link to="/home/wishinglist">Lista de Figuras</Link>
        </div>
      </div>

      <div className="content">
        {/* <Router> */}
        <div>
          <Switch>
            <Route path="/home/trademarket">
              <TradeMarket />
            </Route>
            <Route extact path="/home/wishinglist">
              <WishingList />
            </Route>
          </Switch>
        </div>
        {/* </Router> */}
      </div>
    </div>
  );
};
