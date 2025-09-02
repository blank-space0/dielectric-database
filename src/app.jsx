import { useState } from "react";
import "./styles.css"; // keep your original selectors
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import ComparisonPage from "./components/ComparisonPage.jsx";
import MaterialSearchPage from "./components/MaterialSearchPage.jsx";
import Placeholder from "./components/Placeholder.jsx";

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <>
      <Navbar route={route} setRoute={setRoute} />
      {route === "home" && <HomePage />}
      {route === "search" && <MaterialSearchPage />}
      {route === "comparison" && <ComparisonPage />}
      {route === "methods" && <Placeholder title="Methods" />}
      {route === "contact" && <Placeholder title="Contact" />}
    </>
  );
}
