import React from "react";
import Cart from "./Cart";
import Pizza from "./Pizza";
import db from "../data/db.json";
import SpecialOffer from "./SpecialOffer";
import AppStateProvider from "./AppState";
import AppCSS from "../css/App.module.css";
import PizzaSVG from "../assets/svg/pizza.svg";

const App = () => {
  const specialOfferPizza = db.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza List</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {db.map((item) => {
            return <Pizza key={item.id} pizza={item} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
