import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./screens/HomePage";
import MoreInfoPage from "./screens/MoreInfoPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/more" component={MoreInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
