import { TotalCartRowProps } from "../../../@types/appPropTypes";
import {
  convertMoneyToString,
  getTotalLaunchBookings,
} from "../../../helpers/appHelpers";
import "./TotalCartRow.scss";

export default function TotalCartRow({ launchesInCart }: TotalCartRowProps) {
  const totalCost = getTotalLaunchBookings(launchesInCart);

  return (
    <div className="totalcartrow">
      <div className="totalcartrow__content">
        <p className="totalcartrow__text">Total</p>
        <p className="totalcartrow__total">{convertMoneyToString(totalCost)}</p>
      </div>
    </div>
  );
}
