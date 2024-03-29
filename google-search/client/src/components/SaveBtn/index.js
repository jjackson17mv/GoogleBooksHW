import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button className="btn btn-warning save-btn" {...props}>
      Save
    </button>
  );
}

export default SaveBtn