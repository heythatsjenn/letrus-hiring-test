import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./routes/characterList/characterList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="personagens" element={<CharacterList />} />
      </Routes>
    </Router>
  );
};

export default App;
