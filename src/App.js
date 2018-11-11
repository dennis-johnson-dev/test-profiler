import React, { Profiler, Suspense, useState } from "react";

import { metricsWorker } from "./metrics";

const Child = React.lazy(() => import("./Child"));

function App() {
  return (
    <div>
      <Suspense fallback={<h2>Product list is loading...</h2>}>
        <Profiler
          id="App"
          onRender={(
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime
          ) => {
            metricsWorker.postMessage({
              actualDuration,
              baseDuration,
              commitTime,
              id,
              phase,
              startTime
            });
          }}
        >
          <p>Parent</p>
          <Child prop={"foo"}>Hello</Child>
        </Profiler>
      </Suspense>
    </div>
  );
}

export default App;
