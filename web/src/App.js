import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
