import React from "react";
import "./heading.css";

const Heading = ({ headingName }) => {
  return (
    <div className="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {headingName}
        </text>
      </svg>
    </div>
  );
};

export default Heading;
