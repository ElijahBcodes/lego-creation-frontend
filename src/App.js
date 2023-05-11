import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/creationindex" element={<CreationIndex />} />
    </Routes>
    </>
  );
}

export default App;
