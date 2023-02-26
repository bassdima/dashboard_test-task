import './App.scss';
import { useState } from "react";
import { Header, Menu } from './components';
import { Customers } from "./pages/Customers";


export const App = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(true);

  return (
    <div className="app">
      <div className="side-menu">
        <Header
          setIsClicked={setIsHamburgerClicked}
          isClicked={isHamburgerClicked}
        />
        <Menu
          isClicked={isHamburgerClicked}
        />
      </div>
      <Customers />
    </div>
  );
}
