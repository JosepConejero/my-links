import "./App.css";
import { ALink } from "./components/ALink";
import provisionalLinks from "./data/provisional-links";
import { uniqueKey } from "./helpers/uniqueKey";
import { MyLink } from "./react-app-env";

/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */

function App() {
  const getLinks = (): MyLink[] => {
    return provisionalLinks;
  };
  const links = getLinks();

  return (
    <>
      <div className="main-box">
        <header>
          <h1>LINKS</h1>
        </header>
        <main>
          {links.map((link) => (
            <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
