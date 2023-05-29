import "./App.css";
import Primary from "./components/Button/Primary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" relative h-[100vh] w-full bg-[url('/src/assets/mob.jpg')] lg:bg-[url('/src/assets/Main.png')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="absolute top-[27%] left-[12%]">
          <h1 className="text-white text-[30px] lg:text-[40px] tracking-wider">
            Welcome to Scrappy
          </h1>
          <h2 className="text-white mt-3 mb-9 text-[22px] lg:text-[28px] tracking-wider">
            Get your Whiskey today.
          </h2>
          <Primary title="Get your Premium Liquors." />
        </div>
      </div>
      <div className="h-screen">
        <p>Anish</p>
      </div>
    </div>
  );
}

export default App;
