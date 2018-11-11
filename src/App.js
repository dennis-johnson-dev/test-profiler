import React, { Component, Profiler, Suspense } from "react";
// import * as Comlink from "comlink";

// import fetch from "comlink-fetch";

// var Worker = require("worker-loader?name=worker.js!./worker");
// var worker = new Worker();

// const worker = Comlink.proxy(fetch);

// var myWorker = new Worker();
import { myOtherWorker } from "./metrics";

// myOtherWorker.postMessage("ali");

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
            myOtherWorker.postMessage({
              timing,
              phase,
              actualTime,
              baseTime
            });
            // const event = { data: { timing, phase, actualTime, baseTime } };
            // console.log(navigator);
            // navigator.sendBeacon("http://localhost:3000", event.data);
            // pump data to statsd
            // http({
            //   method: "post",
            //   url: "http://localhost:3000",
            //   data: {
            //     timing,
            //     phase,
            //     actualTime,
            //     baseTime
            //   }
            // });
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
