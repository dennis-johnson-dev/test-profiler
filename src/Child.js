import React, { Suspense, Profiler } from "react";

import { myOtherWorker } from "./metrics";

import Form from "./Form";

function Child(props) {
  console.log(props);
  return (
    <div>
      <Profiler
        id="Child"
        onRender={(timing, phase, actualTime, baseTime) => {
          myOtherWorker.postMessage({
            timing,
            phase,
            actualTime,
            baseTime
          });
        }}
      >
        <p>From Child {props.prop}</p>
        <Form />
      </Profiler>
    </div>
  );
}

export default Child;
