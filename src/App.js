import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Product}/>
          <Route path="/contact"/>
          <Route path="/sign-up" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
