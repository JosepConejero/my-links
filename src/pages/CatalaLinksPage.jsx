import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalCatalaLinks from "../data/provisional-catala-links";
import { uniqueKey } from "../helpers/uniqueKey";
import "./stylesPages.css";

export const CatalaLinksPage = () => {
  const getLinks = () => {
    return provisionalCatalaLinks;
  };
  const links = getLinks();

  return (
    <>
      <Navbar />
      <main className="catala-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
