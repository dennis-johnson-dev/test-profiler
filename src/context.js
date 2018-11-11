import React from "react";

export default React.createContext({
  parentId: "parent",
  spanId: "id",
  setParentId: id => {
    return {
      parentId: id,
      spanId: id
    };
  }
});
