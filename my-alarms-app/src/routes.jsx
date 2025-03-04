import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import History from "./pages/History";
import MedicineEdit from "./pages/MedicineEdit";
import ConsumptionAnalysis from "./pages/ConsumptionAnalysis";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/history" element={<History />} /> */}
        <Route path="/edit-medicine/:id" element={<MedicineEdit />} />
        <Route path="/consumption-analysis" element={<ConsumptionAnalysis />} />
      </Routes>
    </Router>
  );
}
