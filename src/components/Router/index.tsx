import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Download from "../../pages/Download";

export default function AppRouter() {
  return (
    <Router basename="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}
