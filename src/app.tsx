import { Outlet } from "react-router-dom";

import Composer from "./components/composer";
import Header from "./components/header";
import Nav from "./components/nav";

import "./app.scss";

const App = () => {
  return (
    <div className="app z-flex z-flex-row z-relative">
      <div className="app__nav z-flex z-flex-col z-sticky">
        <Nav />
      </div>
      <div className="z-flex z-flex-col z-flex-1 z-relative">
        <div className="app__main z-flex z-flex-col z-relative">
          <div className="app__header z-sticky">
            <Header />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
        <div className="app__composer z-sticky" role="region">
          <Composer />
        </div>
      </div>
    </div>
  );
};

export default App;
