import React, { Profiler, Suspense, useState } from "react";

import { metricsHandler } from "./metrics";

const Child = React.lazy(() => import("./Child"));

function App() {
  return (
    <div>
      <Suspense fallback={<h2>Product list is loading...</h2>}>
        <Profiler id="App" onRender={metricsHandler}>
          <Child prop={"foo"}>foo</Child>
        </Profiler>
      </Suspense>
    </div>
  );
}

export default App;
