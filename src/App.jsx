import React from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <div ref={componentRef} style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Content to Print</h2>
        <p>This will be printed.</p>
      </div>
    </div>
  );
}

export default App;
