import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function App() {
  const contentRef = useRef(null);

  const reactToPrintFn = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <div>
      <button onClick={reactToPrintFn}>Print</button>
      <div ref={contentRef} style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Content to Print</h2>
        <p>This will be printed.</p>
      </div>
    </div>
  );
}

export default App;
