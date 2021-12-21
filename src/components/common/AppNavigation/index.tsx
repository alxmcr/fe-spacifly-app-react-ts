import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { CartIcon } from "../../icons/CartIcon";
import "./AppNavigation.scss";

export default function AppNavigation() {
  const cartLength = useSelector<AppReduxState>(
    (state) => state.cart.cart.length
  );

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/rockets" className="nav__link">
            Rockets
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/cart" className="nav__link nav__link--icon">
            <CartIcon className="nav__icon" width={18} height={18} /> (
            {cartLength})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
