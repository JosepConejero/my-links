import "./App.css";
import { ALink } from "./components/ALink";
import provisionalLinks from "./data/provisional-links";
import { uniqueKey } from "./helpers/uniqueKey";
import { MyLink } from "./react-app-env";
import { ProvisonalQuestions } from "./components/ProvisonalQuestions";
import { useState } from "react";

function App() {
  const [showed, setShowed] = useState<boolean>(false);

  const getLinks = (): MyLink[] => {
    return provisionalLinks;
  };
  const links = getLinks();

  const handleButton = (): void => {
    setShowed((prevState) => !prevState);
  };

  return (
    <>
      <div className="main-box">
        <header>
          <h1 onClick={handleButton}>LINKS</h1>
        </header>
        <main>
          {links.map((link) => (
            <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
          ))}
        </main>
        <footer className={showed ? "" : "hidden-footer"}>
          <ProvisonalQuestions />
        </footer>
      </div>
    </>
  );
}

export default App;
