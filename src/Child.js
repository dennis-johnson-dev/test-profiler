import React, { Profiler, useContext } from "react";

import Table from "react-bootstrap/lib/Table";

import Context from "./context";
import { metricsWorker } from "./metrics";

import Form from "./Form";

function Child(props) {
  let { parentId, updateContext } = useContext(Context);

  return (
    <div>
      <Profiler
        id="Child"
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
            parentId,
            phase,
            startTime
          });
        }}
      >
        <p>From Child {props.prop}</p>
        <p>
          <button onClick={e => updateContext({ parentId: "test" })}>
            Update Trace id
          </button>
        </p>
        <Form />
      </Profiler>
    </div>
  );
}

export default Child;
