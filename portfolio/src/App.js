import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contactme from "./pages/Contactme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
<Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactme" component={Contactme} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;