import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import MainPage from "./Home";

const NotFound = () => {
  return <h1>Page not Found</h1>;
}

const Test = ()=>{
  return <h1>It is time to start playing with React JS. This is so good.</h1>;
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to='/' className="navbar-brand">Home</Link>
        <Link to='/content' className="navbar-brand">Pepe</Link>
        <Link to='/test' className="navbar-brand">Test</Link>
      </nav>

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/test" exact component={Test} />
        <Route component={NotFound} />
      </Switch>
    </Router>    
  );
}

export default App;
