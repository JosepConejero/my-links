import React from "react";
import "./App.css";
import provisionalLinks from "./data/provisional-links";
import { MyLink } from "./components/MyLink";
import { uniqueKey } from "./helpers/uniqueKey";

/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */

function App() {
  return (
    <>
      <header>
        <h1>LINKS</h1>
      </header>
      <main>
        {provisionalLinks.map((link) => (
          <MyLink key={uniqueKey()} linkName={link.linkName} adress={link.address} />
        ))}
      </main>
    </>
  );
}

export default App;
