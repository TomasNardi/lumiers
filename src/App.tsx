import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./sections/section1"
import "./App.css";

const App: React.FC = () => {
  return (
<ReactFullpage
  credits={{ enabled: false }}
  scrollingSpeed={700}
  navigation
  sectionsColor={["#000", "#000", "#000"]}
  render={({ fullpageApi })=> {
        return (
          <ReactFullpage.Wrapper>
            <Section1 />

            <div className="section flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-semibold mb-2">Sección 2</h2>
              <p className="text-lg">Aquí puedes poner cualquier contenido que quieras.</p>
            </div>

            <div className="section flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-semibold mb-2">Sección 3</h2>
              <p className="text-lg">¡Y otra sección más para probar FullPage.js!</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-purple-700 font-bold rounded hover:bg-purple-200 transition"
                onClick={() => fullpageApi.moveTo(1)}
              >
                Volver al inicio
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
