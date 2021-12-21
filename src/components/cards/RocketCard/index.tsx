import { Link } from "react-router-dom";
import { RocketCardProps } from "../../../@types/appPropTypes";
import RocketImage from "../../images/RocketImage";
import "./RocketCard.scss";

export default function RocketCard({ rocket, index }: RocketCardProps) {
  const classCard =
    index % 2 === 0 ? "rocketcard" : "rocketcard rocketcard--odd";

  return (
    <article className={classCard}>
      <RocketImage images={rocket?.flickr_images} />
      <div className="rocketcard__column">
        <div className="rocketcard__content">
          <h2 className="rocketcard__name">{rocket?.name}</h2>
          <p className="rocketcard__description">{rocket?.description}</p>
        </div>
        <div className="rocketcard__footer">
          <Link to={`/rockets/${rocket?.id}`} className="rocketcard__link">
            Are you interested?
          </Link>
        </div>
      </div>
    </article>
  );
}
