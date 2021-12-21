import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppReduxState } from "../../@types/appReduxTypes";
import { Launch } from "../../@types/appTypes";
import TotalCartRow from "../../components/data/TotalCartRow";
import LaunchesInCartList from "../../components/lists/LaunchesInCartList";
import "./LaunchCartPage.scss";

export default function LaunchCartPage() {
  const launchesInCart: Launch[] = useSelector<AppReduxState>(
    (state) => state.cart.cart
  ) as Launch[];

  return (
    <main className="launchcartpage">
      <h1 className="launchcartpage__title">Cart</h1>
      {launchesInCart?.length > 0 ? (
        <>
          <LaunchesInCartList launchesInCart={launchesInCart} />
          <TotalCartRow launchesInCart={launchesInCart} />
        </>
      ) : (
        <div className="launchcartpage__info">
          <p className="launchcartpage__text">No launches in cart</p>
          <NavLink to={`/rockets`} className="launchcartpage__link">
            Return to /rockets
          </NavLink>
        </div>
      )}
    </main>
  );
}
