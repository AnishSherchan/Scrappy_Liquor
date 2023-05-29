import "./App.css";
import Primary from "./components/Button/Primary";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* bg-[url('https://cdn.shopify.com/s/files/1/0025/8555/9110/files/Header-Image_1_1080x.png?v=1675715280')]  */}
      <div className=" relative h-screen w-full bg-[url('/src/assets/mob.png')]   lg:bg-[url('/src/assets/Main.png')] bg-no-repeat bg-center lg:bg-fixed bg-cover">
        <div className=" bg-opacity-40 lg:bg-opacity-0 h-full bg-black">
          <div className="absolute top-[34%] lg:top-[27%] left-[12%]">
            <h1 className="hero text-white text-[30px] lg:text-[40px] tracking-wider">
              Welcome to Scrappy
            </h1>
            <h2 className="hero text-white mt-3 mb-9 text-[22px] lg:text-[28px] tracking-wider">
              Get your Whiskey today.
            </h2>
            <Primary title="Get your Premium Liquors." />
          </div>
        </div>
      </div>
      <div className="h-screen">
        <p>Anish</p>
      </div>
    </div>
  );
}

export default App;
