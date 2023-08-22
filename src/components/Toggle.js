import React, { useState } from "react";

function Toggle() {
  const [myison, setIsOn] = useState(false); 
  const color = myison ? "red" : "white";
  return (
  <button style={{ background: color }} onClick={() => setIsOn((omyison) => !omyison)}>
    {myison ? "ON" : "OFF"}
  </button>
  );
}

export default Toggle;
