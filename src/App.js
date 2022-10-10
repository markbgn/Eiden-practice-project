import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import LoginPanel from "./components/Login/LoginPanel";
import NavPanel from "./components/NavBar/NavPanel";
import AccountPanel from "./components/Account/AccountPanel";
import EventsPanel from "./components/Events/EventsPanel";
import CouponsPanel from "./components/Coupons/CouponsPanel";
import HeaderPanel from "./components/Header/HeaderPanel";
import TransitionCard from "./components/Cards/TransitionCard";

function App() {
  const [activeWindow, setActiveWindow] = useState("Events"); // function for navigation bar buttons
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const locLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("Effect");
    if (locLoggedIn == 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const navPanelButtonHandler = (selectedWindow) => {
    setActiveWindow(selectedWindow);
    console.log(activeWindow);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <TransitionCard>
        <HeaderPanel />
        {!isLoggedIn && <LoginPanel onLogin={loginHandler} />}
        {isLoggedIn && activeWindow === "Account" && <AccountPanel />}
        {isLoggedIn && activeWindow === "Events" && <EventsPanel />}
        {isLoggedIn && activeWindow == "Coupons" && <CouponsPanel />}
        {isLoggedIn && <NavPanel buttonClicked={navPanelButtonHandler} />}
      </TransitionCard>
    </div>
  );
}

export default App;
