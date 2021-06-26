import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import CreateUser from "./Components/CreateUser/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/createUser" exact component={CreateUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
