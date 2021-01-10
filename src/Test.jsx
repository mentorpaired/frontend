import React from "react";

function Test() {
  console.log(process.env);
  React.useEffect(() => {}, []);
  return <div>Hola</div>;
}

export default Test;
