import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalPrgLinks from "../data/provisional-prg-links";
import { uniqueKey } from "../helpers/uniqueKey";
import "./stylesPages.css";

export const PrgLinksPage = () => {
  const getLinks = () => {
    return provisionalPrgLinks;
  };
  const links = getLinks();

  return (
    <>
      <Navbar />
      <main className="prg-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
