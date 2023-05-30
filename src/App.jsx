import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/Landing";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesLoaded = () => {
      setIsLoading(false);
    };

    const images = document.querySelectorAll("img");
    const totalImages = images.length;
    let loadedImages = 0;

    images.forEach((image) => {
      if (image.complete) {
        loadedImages++;
      } else {
        image.addEventListener("load", () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            imagesLoaded();
          }
        });
      }
    });

    if (loadedImages === totalImages) {
      imagesLoaded();
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", imagesLoaded);
      });
    };
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
