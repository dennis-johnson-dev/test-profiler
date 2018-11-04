import React, { Component, Profiler, Suspense } from "react";

import http from "./service";

// import Child from "./Child";
const Child = React.lazy(() => import("./Child"));

function App() {
  return (
    <div>
      <Suspense fallback={<h2>Product list is loading...</h2>}>
        <Profiler
          id="App"
          onRender={(timing, phase, actualTime, baseTime) => {
            console.log(timing, phase, actualTime, baseTime);
            // pump data to statsd
            http({
              method: "post",
              url: "http://localhost:3000",
              data: {
                timing,
                phase,
                actualTime,
                baseTime
              }
            });
          }}
        >
          <p>Parent</p>
          <Child prop={"foo"}>Hello</Child>
        </Profiler>
      </Suspense>
    </div>
  );
  e;
}

export default App;
