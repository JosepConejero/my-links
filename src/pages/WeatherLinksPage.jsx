import { ALink } from "../components/ALink";
import { Navbar } from "../components/Navbar";
import provisionalWeatherLinks from "../data/provisional-weather-links";
import { uniqueKey } from "../helpers/uniqueKey";
import "./stylesPages.css";

export const WeatherLinksPage = () => {
  const getLinks = () => {
    return provisionalWeatherLinks;
  };
  const links = getLinks();

  const openAllLinks = () => {
    //const address = links[0].address;
    links.forEach((link) => {
      window.open(link.address);
      //console.log(link, index);
    });
    // window.open(links[1].address);
  };

  return (
    <>
      <Navbar />
      <main className="weather-links">
        <button className="open-all-links-button" onClick={openAllLinks}>
          OPEN ALL
        </button>
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
