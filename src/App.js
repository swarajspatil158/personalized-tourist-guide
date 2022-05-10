import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./containers/MainPage";
import Footer from "./Components/Footer/Footer";
import MustVisit from "./Components/MustVisit/MustVisit";
import BigCarousel from "./Components/Carousel/BigCarousel";
import HomePage from "./Components/HomePage/HomePage";
const App = () => (
  <Router>
    <Navbar />
    <HomePage />
    <Switch>
      <Route exact path={routes.MAIN} component={MainPage} />
    </Switch>
    <BigCarousel />
    <MustVisit />
    <Footer />
  </Router>
);

export default App;
