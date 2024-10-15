// src/App.jsx
import React from "react";
import Header from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
      </main>
    </div>
  );
}

export default App;
