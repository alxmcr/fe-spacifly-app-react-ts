import { useContext } from "react";
import { LaunchFilterContainerProps } from "../../../@types/appPropTypes";
import { OverlayContext } from "../../../providers/OverlayProvider";
import FilterLaunchForm from "../../forms/FilterLaunchForm";
import "./LaunchFilterContainer.scss";

export default function LaunchFilterContainer({
  rocketId = "",
}: LaunchFilterContainerProps) {
  const { setShowOverlay } = useContext(OverlayContext);
  const handleCloseModal = () => setShowOverlay(false);

  return (
    <div className="lauchfiltercontainer">
      <div className="lauchfiltercontainer__header">
        <h2 className="lauchfiltercontainer__title">Launch Filter</h2>
        <button
          className="lauchfiltercontainer__button"
          onClick={handleCloseModal}
        >
          x
        </button>
      </div>
      <FilterLaunchForm rocketId={rocketId} />
    </div>
  );
}
