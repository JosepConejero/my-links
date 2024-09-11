import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalMainLinks from "../data/provisional-main-links";
import { uniqueKey } from "../helpers/uniqueKey";
import "./stylesPages.css";

export const MainLinksPage = () => {
  const getLinks = () => {
    return provisionalMainLinks;
  };
  const links = getLinks();

  return (
    <>
      <Navbar />
      <main className="main-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
