import { Link } from "react-router-dom";
import logo from "../../../assets/svg/icon-rocket-brand.svg";
import "./AppLogo.scss";

export const AppLogo = () => {
  return (
    <div className="app-logo">
      <Link to="/" className="app-logo__link">
        <img
          src={logo}
          className="app-logo__image"
          alt="Spacifly app"
          loading="lazy"
        />
      </Link>
      <Link to="/" className="app-logo__link app-logo__link--name">
        Spacifly
      </Link>
    </div>
  );
};
