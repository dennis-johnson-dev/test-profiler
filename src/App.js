import React, { Component, Profiler, Suspense, useState } from "react";

import Context from "./context";

import { myOtherWorker } from "./metrics";

const Child = React.lazy(() => import("./Child"));

function App() {
  const [context, setContext] = useState({
    parentId: "parent"
  });

  return (
    <div>
      <Suspense fallback={<h2>Product list is loading...</h2>}>
        <Context.Provider value={{ parentId: context.parentId }}>
          <Profiler
            id="App"
            onRender={(timing, phase, actualTime, baseTime) => {
              myOtherWorker.postMessage({
                actualTime,
                baseTime,
                parentId: context.parentId,
                phase,
                timing
              });
            }}
          >
            <p>Parent</p>
            <Child prop={"foo"} updateTraceId={setContext}>
              Hello
            </Child>
          </Profiler>
        </Context.Provider>
      </Suspense>
    </div>
  );
  e;
}

export default App;
