import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/Landing";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the loading duration in milliseconds (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
  console.log(isLoading);

  return (
    <div>
      <Navbar />
      <LandingPage />
      <div className="h-screen">
        <p>Anish</p>
      </div>
    </div>
  );
}

export default App;
