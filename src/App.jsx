import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <main className="App relative h-full">
      <Allroutes />
    </main>
  );
}

export default App;
