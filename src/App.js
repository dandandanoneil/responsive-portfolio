import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Switch >
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
