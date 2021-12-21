import { useDispatch, useSelector } from "react-redux";
import { LaunchRowProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { Launch } from "../../../@types/appTypes";
import {
  convertMoneyToString,
  formatMsToStr,
} from "../../../helpers/appHelpers";
import { checkIfLaunchBooked } from "../../../helpers/launchHelpers";
import { addLaunch, removeLaunch } from "../../../redux/actions/cartActions";
import { CartIcon } from "../../icons/CartIcon";
import "./LaunchRow.scss";

export default function LaunchRow({ launch }: LaunchRowProps) {
  const { id, name, destination, date_utc, upcoming, ticketCostUSD } = launch;
  const launchesInCart: Launch[] = useSelector<AppReduxState>(
    (state) => state.cart.cart
  ) as Launch[];
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addLaunch(launch));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeLaunch(launch));
  };

  return (
    <div className="launchrow">
      <div className="launchrow__content">
        <h3 className="launchrow__name">{name}</h3>
        <p className="launchrow__destination">{destination}</p>
        <p className="launchrow__date">{formatMsToStr(date_utc)}</p>
        <p className="launchrow__cost">{convertMoneyToString(ticketCostUSD)}</p>
      </div>
      <div className="launchrow__actions">
        {upcoming ? (
          <>
            {checkIfLaunchBooked(launchesInCart, id) ? (
              <button
                className="launchrow__button launchrow__button--icon launchrow__button--active"
                onClick={handleRemoveFromCart}
              >
                Remove
                <CartIcon className="launchrow__icon" width={18} height={18} />
              </button>
            ) : (
              <button
                className="launchrow__button launchrow__button--icon"
                onClick={handleAddToCart}
              >
                Add{" "}
                <CartIcon className="launchrow__icon" width={18} height={18} />
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
