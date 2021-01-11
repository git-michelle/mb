import { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toolbar from "./Components/Navigation/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer";
import HomePage from "./Screens/HomePage";
import MoreInfoPage from "./Screens/MoreInfoPage";
import Footer from "./Components/Footer";
import "./App.scss";
import ScrollToTop from "./Components/Navigation/ScrollToTop";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GAnalytics_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
};

export default App;
