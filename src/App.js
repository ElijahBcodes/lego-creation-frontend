import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import CreationEdit from "./pages/CreationEdit";
import CreationIndex from "./pages/CreationIndex";
import CreationNew from "./pages/CreationNew";
import CreationShow from "./pages/CreationShow";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import mockCreations from './mockCreations.js';


function App () {

  const [creations, setCreations] = useState(mockCreations);

  const createCreation = (creation) => {
  };

  const updateCreation =(creation, id) => {
    console.log("creation:", creation)
    console.log ("id:", id)
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/creationindex" element={<CreationIndex creations={creations} /> }/>
        <Route path="/creationshow/:id" element={<CreationShow creations={creations}/>} />
        <Route path="/creationnew" element={<CreationNew createCreation={createCreation}/>} />
        <Route path="/creationedit/:id" element={<CreationEdit creations={creations} updateCreation={updateCreation}/>} />
        <Route path="*" element={<NotFound/>} /> 
     </Routes>
  </>
  )
};

export default App;
