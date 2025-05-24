import React from "react";

const Lives = ({ count }) => {
  const hearts = "❤️".repeat(count);
  return (
    <>
      <h2>Vidas:</h2>
      <div id="health">{hearts}</div>
    </>
  );
};

export default Lives;
