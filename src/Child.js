import React, { Suspense, Profiler } from "react";

import http from "./service";

import Form from "./Form";

function Child(props) {
  console.log(props);
  return (
    <div>
      <Profiler
        id="Child"
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
        <p>From Child {props.prop}</p>
        <Form />
      </Profiler>
    </div>
  );
}

export default Child;
