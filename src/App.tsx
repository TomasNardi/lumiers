import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./sections/section1"
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
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

            {/* Fist Section */}
            <Section1 />
            
            {/* Second Section  */}
            <Section2 />

            {/* Third Section */}
            <Section3 fullpageApi={fullpageApi} />

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
