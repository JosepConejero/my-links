import { MyLink } from "../react-app-env";

export const provisionalWeatherLinks: MyLink[] = [
  // { address: "", linkName: "", order: 1, folder: "ROOT" },
  {
    address:
      "https://www.google.com/search?q=tiempo+barcelona&oq=tiempo&aqs=chrome.1.69i57j0i131i433i512j0i402i512j0i131i433i512j0i512l2j0i131i433i512l4j0i131i433i512i650j0i512l2j0i131i433i512i650j0i512.2706j0j7&client=ms-android-motorola-rev2&sourceid=chrome-mobile&ie=UTF-8",
    linkName: "El tiempo (google)",
    order: 1,
    folder: "ROOT",
  },
  { address: "https://www.eltiempo.es/barcelona.html", linkName: "El tiempo", order: 1, folder: "ROOT" },
  { address: "https://www.aemet.es/es/eltiempo/prediccion/municipios/barcelona-id08019", linkName: "Aemet", order: 1, folder: "ROOT" },
  { address: "https://www.tutiempo.net/barcelona.html", linkName: "Tu tiempo", order: 1, folder: "ROOT" },
  { address: "https://www.tutiempo.net/amp-es/barcelona.html", linkName: "Tu tiempo (amp-es)", order: 1, folder: "ROOT" },
  { address: "https://www.tiempo.com/barcelona.htm", linkName: "Tiempo", order: 1, folder: "ROOT" },
  { address: "https://www.tiempo.com/barcelona/por-horas", linkName: "Tiempo (por horas)", order: 1, folder: "ROOT" },
  { address: "https://www.meteosat.com/tiempo/barcelona/", linkName: "METEOSAT", order: 1, folder: "ROOT" },
  { address: "http://www.eltiempo.tv/Barcelona/Barcelona.html", linkName: "El tiempo TV", order: 1, folder: "ROOT" },
  { address: "https://www.rtve.es/eltiempo/localidades/barcelona/12162.shtml", linkName: "RTVE", order: 1, folder: "ROOT" },
  { address: "https://www.meteo.cat/prediccio/municipal/080193", linkName: "Meteo Cat", order: 1, folder: "ROOT" },
];

export default provisionalWeatherLinks;
