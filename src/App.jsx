import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const App = () => (
  <PDFViewer style={{ width: "210mm", height: "297mm" }}>
    <MyDocument />
  </PDFViewer>
);

export default App;
