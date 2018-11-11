import React, { Profiler, useContext } from "react";

import Table from "react-bootstrap/lib/Table";

import { metricsHandler } from "./metrics";

import Form from "./Form";

function Child(props) {
  return (
    <div>
      <Profiler id="Child" onRender={metricsHandler}>
        <p>From Child {props.prop}</p>
        <Form />
      </Profiler>
    </div>
  );
}

export default Child;
