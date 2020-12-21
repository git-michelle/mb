import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./Components/Navigation/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer";
import HomePage from "./Screens/HomePage";
import MoreInfoPage from "./Screens/MoreInfoPage";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const handleDrawerToggle = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Router>
      <Toolbar drawerToggleClicked={handleDrawerToggle} />
      <SideDrawer open={showSideDrawer} closed={handleSideDrawerClose} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/more" component={MoreInfoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
