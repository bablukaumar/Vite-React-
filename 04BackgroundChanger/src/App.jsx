import React, { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div style={{ backgroundColor: color }} className="w-full h-screen">
        <div
          className="fixed flex flex-wrap
 justify-center bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center
 gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-dark shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "aqua" }}
            >
              Aqua
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("tomato")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "tomato" }}
            >
              Tomato
            </button>
            <button
              onClick={() => setColor("slateBlue")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "slateBlue" }}
            >
              SlateBlue
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("lightGray")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "lightGray" }}
            >
              LightGray
            </button>
            <button
              onClick={() => setColor("aquamarine")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "aquamarine" }}
            >
              Aquamarine
            </button>
            <button
              onClick={() => setColor("bisque")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "bisque" }}
            >
              Bisque
            </button>
            <button
              onClick={() => setColor("chocolate")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "chocolate" }}
            >
              Chocolate
            </button>

            <button
              onClick={() => setColor("coral")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "coral" }}
            >
              Coral
            </button>
            <button
              onClick={() => setColor("Crimson")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "Crimson" }}
            >
              Crimson
            </button>
            <button
              onClick={() => setColor("DarkMagenta")}
              className="outline-none px-4 py-1 rounded-full text-red shadow-lg"
              style={{ backgroundColor: "DarkMagenta" }}
            >
              DarkMagenta
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
