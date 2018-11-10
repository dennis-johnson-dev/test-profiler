import React, { Suspense, Profiler, useState } from "react";

function Form(props) {
  const [value, setValue] = useState("value");
  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
