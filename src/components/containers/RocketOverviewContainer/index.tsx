import { RocketOverviewContainerProps } from "../../../@types/appPropTypes";
import "./RocketOverviewContainer.scss"

export default function RocketOverviewContainer({
  rocket,
}: RocketOverviewContainerProps) {
  return (
    <div className="rocketoverview">
      <h2 className="rocketoverview__subtitle">Overview</h2>
      <p className="rocketoverview__description">{rocket?.description}</p>
    </div>
  );
}
