import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreationEdit from "./pages/CreationEdit";
import CreationIndex from "./pages/CreationIndex";
import CreationNew from "./pages/CreationNew";
import CreationShow from "./pages/CreationShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//mockData
import mockCreations from "./mockCreations";

function App () {
  const [creations, setCreations] = useState(mockCreations);
  console.log(creations);

  const createCreation =(creation) => {
    console.log(creation);
  }

  const updateCreation =(creation, id) => {
    console.log("creation:", creation);
    console.log("id:", id);
  }

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/creationindex" element={<CreationIndex creations={creations}/> }/>
        <Route path="/creationshow" element={<CreationShow creations={creations}/>} />
        <Route path="/creationnew" element={<CreationNew creations={creations}/>} />
        <Route path="/creationedit/:id" element={<CreationEdit creations={creations} updateCreation={updateCreation}/>} />
        <Route path="*" element={<NotFound />} />
     </Routes>
     <Footer />
  </>
  )
};

export default App;
