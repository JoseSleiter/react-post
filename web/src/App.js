import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Perfil from "./components/pages/Perfil/Perfil";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/perfil">
            <Perfil></Perfil>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
