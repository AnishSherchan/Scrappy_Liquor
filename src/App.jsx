import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/Landing";

function App() {
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
