import React, { Profiler, useContext } from "react";
import { unstable_trace as trace } from "scheduler/tracing";

import Table from "react-bootstrap/lib/Table";

import { metricsWorker } from "./metrics";

import Form from "./Form";

function Child(props) {
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
            phase,
            startTime
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
