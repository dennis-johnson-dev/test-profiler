import React, { Profiler, Suspense, useState } from "react";

import Context from "./context";

import { metricsWorker } from "./metrics";

const Child = React.lazy(() => import("./Child"));

function App() {
  const [context, setContext] = useState({
    parentId: "Initial Load"
  });

  return (
    <div>
      <Suspense fallback={<h2>Product list is loading...</h2>}>
        <Context.Provider
          value={{ parentId: context.parentId, updateContext: setContext }}
        >
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
                parentId: context.parentId,
                phase,
                startTime
              });
            }}
          >
            <p>Parent</p>
            <Child prop={"foo"}>Hello</Child>
          </Profiler>
        </Context.Provider>
      </Suspense>
    </div>
  );
  e;
}

export default App;
