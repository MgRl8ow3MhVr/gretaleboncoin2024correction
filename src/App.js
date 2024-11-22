//import packages
import "./App.css";
import { useState } from "react";
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
import { ToastContainer } from "react-toastify";
import LogBoxModal from "./components/LogBoxModal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const loginOk = (token, user) => {
    setToken(token);
    setOpenModal(false);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const disconnect = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}

      <Header
        token={token}
        user={user}
        setOpenModal={setOpenModal}
        disconnect={disconnect}
      />

      {openModal && (
        <LogBoxModal loginOk={loginOk} setOpenModal={setOpenModal} />
      )}
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route
            path="/publish"
            element={<Publish token={token} user={user} />}
          />

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
