import { RocketPhysicalSpecsContainerProps } from "../../../@types/appPropTypes";
import "./RocketPhysicalSpecsContainer.scss";

export default function RocketPhysicalSpecsContainer({
  rocket,
}: RocketPhysicalSpecsContainerProps) {
  return (
    <div className="physicalspecs">
      <h2 className="physicalspecs__subtitle">Specs</h2>
      {rocket?.flickr_images?.length > 1 ? (
        <img
          src={rocket?.flickr_images[1]}
          className="physicalspecs__image"
          loading="lazy"
        />
      ) : null}
      <div className="physicalspecs__sectioncontent">
        <div className="physicalspecs__specifications">
          <div className="physicalspecs__specification">
            <p className="physicalspecs__specvalue">
              {rocket?.height?.meters} mts.
            </p>
            <p className="physicalspecs__speclabel">Height</p>
          </div>
          <div className="physicalspecs__specification">
            <p className="physicalspecs__specvalue">
              {rocket?.diameter?.meters} mts.
            </p>
            <p className="physicalspecs__speclabel">Diameter</p>
          </div>
          <div className="physicalspecs__specification">
            <p className="physicalspecs__specvalue">{rocket?.mass?.kg} kg.</p>
            <p className="physicalspecs__speclabel">Mass</p>
          </div>
        </div>
      </div>
    </div>
  );
}
