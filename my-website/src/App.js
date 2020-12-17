import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./screens/HomePage";
import MoreInfoPage from "./screens/MoreInfoPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/more" component={MoreInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
