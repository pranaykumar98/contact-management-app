import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContactPage from "./pages/ContactPage";
import ChartsAndMapsPage from "./pages/ChartsAndMapsPage";
import Header from "./components/Header";
import EditContactScreen from "./components/EditContactScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/charts-maps" element={<ChartsAndMapsPage />} />
            <Route path="/edit/:id" element={<EditContactScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
