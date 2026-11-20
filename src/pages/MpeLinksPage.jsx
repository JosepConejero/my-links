import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalMpeLinks from "../data/provisional-MPE-links";
import { uniqueKey } from "../helpers/uniqueKey";
import "./stylesPages.css";

export const MpeLinksPage = () => {
  const getLinks = () => {
    return provisionalMpeLinks;
  };
  const links = getLinks();

  return (
    <>
      <Navbar />
      <main className="mpe-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
