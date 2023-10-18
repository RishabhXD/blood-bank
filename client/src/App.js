import "./App.css";
import FindBlood from "./pages/find_blood/find_blood";
import Donor from "./pages/donors/donors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./pages/Register/register";
import Footer from "./pages/footer/footer";
import Navbar from "./pages/navbar/navbar";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
        <Route exact path="/">
          <Navbar/>
          <FindBlood />
          <Footer/>
        </Route>
        <Route path="/donor">
        <Navbar/>
          <Donor />
          <Footer/>
        </Route>
        <Route path="/refer">
        <Navbar/>
          <Register />
          <Footer/>
        </Route>
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
