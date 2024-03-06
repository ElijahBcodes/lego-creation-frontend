import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import CreationEdit from "./pages/CreationEdit";
import CreationIndex from "./pages/CreationIndex";
import CreationNew from "./pages/CreationNew";
import CreationShow from "./pages/CreationShow";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";



function App () {

  const [creations, setCreations] = useState([]);

  useEffect(() => {
    readCreation()
  }, [])

  const readCreation = () => {
    fetch("http://localhost:3000/creations")
      .then((response) => response.json())
      .then((payload) => {
        setCreations(payload)
      }).catch((error) => console.log(error))
  }

  const createCreation = (creation) => {
    fetch("http://localhost:3000/creations ",{
    body: JSON.stringify(creation),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => this.readCreation())
    .catch((errors) => console.log("Creation create errors:", errors))
}

  const updateCreation = (creation, id) => {
    fetch(`http://localhost:3000/creations/${id}`, {
      body: JSON.stringify(creation),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => this.readCreation())
      .catch((errors) => console.log("Creation update errors:", errors))
  }
  const deleteCreation = (id) => {
    fetch(`http://localhost:3000/creations/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => this.readCreation())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/creationindex" element={<CreationIndex creations={creations} /> }/>
        <Route path="/creationshow/:id" element={<CreationShow creations={creations} deleteCreation={deleteCreation}/>} />
        <Route path="/creationnew" element={<CreationNew createCreation={createCreation}/>} />
        <Route path="/creationedit/:id" element={<CreationEdit creations={creations} updateCreation={updateCreation}/>} />
        
        <Route path="*" element={<NotFound/>} /> 
     </Routes>
  </>
  )
};

export default App;
