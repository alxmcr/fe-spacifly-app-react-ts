import { useDispatch, useSelector } from "react-redux";
import { LaunchCardProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { Launch } from "../../../@types/appTypes";
import {
  convertMoneyToString,
  formatMsToStr,
} from "../../../helpers/appHelpers";
import { checkIfLaunchBooked } from "../../../helpers/launchHelpers";
import { addLaunch, removeLaunch } from "../../../redux/actions/cartActions";
import "./LaunchCard.scss";

export default function LaunchCard({ launch }: LaunchCardProps) {
  const dispatch = useDispatch();
  const launchesInCart = useSelector<AppReduxState>(
    (state) => state.cart.cart
  ) as Launch[];

  if (launch === null || launch === undefined) return null;

  const { id, name, destination, date_utc, upcoming, ticketCostUSD, links } =
    launch;
  const patch = links?.patch;

  const handleAddToCart = () => {
    dispatch(addLaunch(launch));
  };

  const handleRemoveToCart = () => {
    dispatch(removeLaunch(launch));
  };

  const winTicket = () => {
    console.log("Win ticket");
  };

  return (
    <article className="launchcard" id={id}>
      {!launch?.upcoming && patch?.small ? (
        <img
          src={patch?.small}
          className="launchcard__image"
          alt={`Logo launch#${id}`}
          loading="lazy"
        />
      ) : null}
      <div className="launchcard__content">
        <h3 className="launchcard__name">{name}</h3>
        <p className="launchcard__destination">{destination}</p>
        <p className="launchcard__date">{formatMsToStr(date_utc)}</p>
        <p className="launchcard__cost">
          {convertMoneyToString(ticketCostUSD)}
        </p>
      </div>
      <div className="launchcard__actions">
        {upcoming ? (
          <>
            {checkIfLaunchBooked(launchesInCart, launch?.id) ? (
              <button
                className="launchcard__button launchcard__button--active"
                onClick={handleRemoveToCart}
              >
                Remove from cart
              </button>
            ) : (
              <button className="launchcard__button" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}

            <button className="launchcard__button" onClick={winTicket}>
              Win a ticket
            </button>
          </>
        ) : null}
      </div>
    </article>
  );
}
