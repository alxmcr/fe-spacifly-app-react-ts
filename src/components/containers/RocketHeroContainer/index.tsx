import { RocketHeroContainerProps } from "../../../@types/appPropTypes";
import "./RocketHeroContainer.scss";

export default function RocketHeroContainer({
  rocket,
}: RocketHeroContainerProps) {
  if (rocket === null) return null;

  return (
    <div className="rockethero">
      {rocket?.flickr_images?.length > 0 ? (
        <img src={rocket?.flickr_images[0]} className="rockethero__heroimage" loading="lazy" />
      ) : null}
      <p className="rockethero__details">
        {rocket?.company} - {rocket?.country}
      </p>
    </div>
  );
}
