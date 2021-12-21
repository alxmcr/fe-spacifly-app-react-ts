import { LaunchesInCartListProps } from "../../../@types/appPropTypes";
import LaunchInCartRow from "../../data/LaunchInCartRow";
import "./LaunchesInCartList.scss";

export default function LaunchesInCartList({
  launchesInCart,
}: LaunchesInCartListProps) {
  return (
    <div className="launchesincartlist">
      {launchesInCart?.map((launch) => (
        <LaunchInCartRow key={`cart-${launch.id}`} launch={launch} />
      ))}
    </div>
  );
}
