import React, { Component, Profiler } from "react";

console.log(Profiler, React);

function App() {
  return (
    <div>
      <Profiler
        id="App"
        onRender={(timing, phase, actualTime, baseTIme) => {
          console.log(timing, phase, actualTime, baseTIme);
        }}
      >
        <p>Hello</p>
      </Profiler>
    </div>
  );
  e;
}

export default App;
