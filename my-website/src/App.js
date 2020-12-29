import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./Components/Navigation/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer";
import HomePage from "./Screens/HomePage";
import MoreInfoPage from "./Screens/MoreInfoPage";
import Footer from "./Components/Footer";
import "./App.scss";
import ScrollToTop from "./Components/Navigation/ScrollToTop";

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Router>
      <ScrollToTop />
      <Toolbar drawerToggleClicked={toggleSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={toggleSideDrawer} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/more" component={MoreInfoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
