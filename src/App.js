// import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreationEdit from "./pages/CreationEdit";
import CreationIndex from "./pages/CreationIndex";
import CreationNew from "./pages/CreationNew";
import CreationShow from "./pages/CreationShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import "./App.css"

import mockCreations from "./mockCreations";

const App = () => {
  const [creations, setCreations] = useState(mockCreations);

  console.log(creations);

  return (
    <>
      <Header />
      <Home />
      <CreationIndex />
      <CreationShow />
      <CreationNew />
      <CreationEdit />
      <NotFound />
      <Footer />
    </>
  );
};

export default App;
