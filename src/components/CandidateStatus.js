import React from "react";
import { colorMapping } from "../utils/enums";

const Status = (props) => {
  const { status } = props;
  const color = colorMapping[status.color];
  return (
    <React.Fragment>
      <div
        style={{
          height: "10px",
          width: "10px",
          borderRadius: "50%",
          backgroundColor: color,
          marginRight: "5px",
          display: "inline-block",
        }}
      ></div>

      {status.label}
    </React.Fragment>
  );
};

export default Status;
