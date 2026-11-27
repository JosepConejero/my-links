import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalOtherInfoLinks from "../data/provisional-other-info-links";
import { uniqueKey } from "../helpers/uniqueKey";

export const OtherInfoPage = () => {
const getLinks = () => {
    return provisionalOtherInfoLinks;
  };
  const links = getLinks();

  return (
    <>
      <Navbar />
      <main className="other-info-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );

/*   return (
    <>
      <Navbar />
      <ProvisonalQuestions />
    </>
  ); */
};
