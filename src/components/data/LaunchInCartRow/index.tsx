import { useDispatch, useSelector } from "react-redux";
import { LaunchInCartRowProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { Launch } from "../../../@types/appTypes";
import {
  convertMoneyToString,
  formatMsToStr,
} from "../../../helpers/appHelpers";
import { checkIfLaunchBooked } from "../../../helpers/launchHelpers";
import { addLaunch, removeLaunch } from "../../../redux/actions/cartActions";
import { CartIcon } from "../../icons/CartIcon";
import { RemoveIcon } from "../../icons/RemoveIcon";
import "./LaunchInCartRow.scss";

export default function LaunchInCartRow({ launch }: LaunchInCartRowProps) {
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
    <div className="launchincartrow">
      <div className="launchincartrow__content">
        <h3 className="launchincartrow__name">{name}</h3>
        <p className="launchincartrow__destination">{destination}</p>
        <p className="launchincartrow__date">{formatMsToStr(date_utc)}</p>
        <p className="launchincartrow__cost">
          {convertMoneyToString(ticketCostUSD)}
        </p>
      </div>
      <div className="launchincartrow__actions">
        {upcoming ? (
          <>
            {checkIfLaunchBooked(launchesInCart, id) ? (
              <button
                className="launchincartrow__button launchincartrow__button--icon launchincartrow__button--active"
                onClick={handleRemoveFromCart}
              >
                <RemoveIcon
                  className="launchincartrow__icon"
                  width={18}
                  height={18}
                />
              </button>
            ) : (
              <button
                className="launchincartrow__button launchincartrow__button--icon"
                onClick={handleAddToCart}
              >
                <CartIcon
                  className="launchincartrow__icon"
                  width={18}
                  height={18}
                />
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
