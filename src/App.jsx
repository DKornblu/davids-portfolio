import { useState } from "react";
import image1 from "./img/1.png";
import "./App.css";

function App() {
  const [img, setImg] = useState(image1);

  return (
    <div className="flex h-screen bg-white text-black">
      <div className="border border-blue-400 flex-1 p-8">
        list of projects
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>
      <div className="flex flex-col h-full justify-center border-2 border-orange-400 text-center">
        <div className="border border-red-400">
          <h1>Hi! I'm David.</h1>
        </div>
        <div>
          <img
            src={img}
            alt="David Smiling"
            className="h-auto w-60 border border-green-400 rounded-full"
          />
        </div>
        <div className="border border-red-400">
          <h1>I'm a nice guy.</h1>
          <h1>I'm also a developer.</h1>
        </div>
      </div>
      <div className="border border-blue-400 flex-1 p-8">
        list of projects
        <div>Project 4</div>
        <div>Project 5</div>
        <div>Project 6</div>
      </div>
    </div>
  );
}

export default App;
