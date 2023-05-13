import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CreationEdit from "./pages/CreationEdit"
import CreationIndex from "./pages/CreationIndex"
import CreationNew from "./pages/CreationNew"
import CreationShow from "./pages/CreationShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"








function App() {
  return (
    <>
    < Header/> 
    
    <Routes>
      <Route path="/creationindex" element={<CreationIndex />} />
    </Routes>
    </>
  );
}

export default App;
