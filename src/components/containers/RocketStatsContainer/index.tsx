import { RocketStatsContainerProps } from "../../../@types/appPropTypes";
import "./RocketStatsContainer.scss";

export default function RocketStatsContainer({
  rocket,
}: RocketStatsContainerProps) {
  return (
    <div className="stats">
      <h2 className="stats__subtitle">Stats</h2>
      <div className="stats__group">
        <div className="stats__stat">
          <p className="stats__statvalue">{rocket?.success_rate_pct}%</p>
          <p className="stats__statlabel">Success rate percentage</p>
        </div>
        <div className="stats__stat">
          <p className="stats__statvalue">
            {rocket?.active ? "Active" : "Inactive"}
          </p>
          <p className="stats__statlabel">Status</p>
        </div>
        <div className="stats__stat">
          <p className="stats__statvalue">{rocket?.stages}</p>
          <p className="stats__statlabel">Stages</p>
        </div>
        <div className="stats__stat">
          <p className="stats__statvalue">{rocket?.boosters}</p>
          <p className="stats__statlabel">Boosters</p>
        </div>
      </div>
    </div>
  );
}
