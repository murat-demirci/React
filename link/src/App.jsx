import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import NotFound from "./components/NotFound";
import History from "./components/History";
import Company from "./components/Company";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import Team from "./components/Team";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* http://localhost:5173/aboutUs */}
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />

        <Route path="/mission" element={<Mission />} />

        {/* Nested Route */}
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>

        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
