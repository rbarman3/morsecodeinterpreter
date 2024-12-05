import React from "react";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import KeyPressTiming from "./components/inputHandler";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
      <div className="app-container">
        <Header />
        <main className="content">
          <Clicker />
        </main>
        <Footer />
      </div>
  );
}

export default App;
