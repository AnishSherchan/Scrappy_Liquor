import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/Landing";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Set the loading duration in milliseconds (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className=" flex h-screen gap-7 flex-col items-center justify-center bg-back-ground">
        <img
          src="https://cdn.shopify.com/s/files/1/0025/8555/9110/t/46/assets/logo-black_440x.png?v=82187768844039924211675878975"
          alt="Logo"
          className="h-8 lg:h-10 cursor-pointer"
        />{" "}
        <HashLoader color="#36d7b7" />
        <div className=" text-center">
          <h6>Loading</h6>
          <p>It will take a few seconds</p>
        </div>
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
