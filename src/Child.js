import React, { Suspense, Profiler, useContext } from "react";

import Context from "./context";
import { myOtherWorker } from "./metrics";

import Form from "./Form";

function Child(props) {
  let { parentId } = useContext(Context);

  return (
    <div>
      <Profiler
        id="Child"
        onRender={(timing, phase, actualTime, baseTime) => {
          myOtherWorker.postMessage({
            parentId,
            timing,
            phase,
            actualTime,
            baseTime
          });
        }}
      >
        <p>From Child {props.prop}</p>
        <button onClick={e => props.updateTraceId({ parentId: "test" })}>
          Update Trace id
        </button>
        <Form />
      </Profiler>
    </div>
  );
}

export default Child;
