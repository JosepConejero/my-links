import { MyLink } from "../react-app-env";
import "./ALink.css";

export const ALink = ({ linkName, address, order, folder }: MyLink): JSX.Element => {
  return (
    <>
      <div className="link-class">
        <a href={address} target="_blank" rel="noopener noreferrer">
          {linkName}
        </a>
      </div>
    </>
  );
};
