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

  return (
    <>
      <Navbar />
      <main className="weather-links">
        {links.map((link) => (
          <ALink key={uniqueKey()} linkName={link.linkName} address={link.address} order={link.order} folder={link.folder} />
        ))}
      </main>
    </>
  );
};
