//import packages
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
//import pages called with routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header user={"Pierrecorrecteur"} />
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish" element={<Publish />} />

          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup" element={<SignUp />} />

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
      />
    </Router>
  );
};

export default App;
