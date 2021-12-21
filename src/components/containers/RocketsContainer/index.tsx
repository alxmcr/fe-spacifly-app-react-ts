import { useRockets } from "../../../hooks/useRockets";
import RocketCard from "../../cards/RocketCard";
import { AppSpinner } from "../../common/AppSpinner";
import "./RocketsContainer.scss";

export default function RocketsContainer() {
  const { rockets, loadingRockets, errorRockets } = useRockets();

  if (loadingRockets) {
    return <AppSpinner color="primary" />;
  }

  if (errorRockets) {
    return <p>There was an error getting the rockets. Try again</p>;
  }

  if (!loadingRockets && rockets.length === 0) {
    return <p>No rockets.</p>;
  }

  return (
    <section className="rocketscontainer">
      {rockets.map((rocket, index) => (
        <RocketCard key={rocket.id} rocket={rocket} index={index} />
      ))}
    </section>
  );
}
