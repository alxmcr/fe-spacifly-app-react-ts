import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppOverlay } from "../../components/common/AppOverlay";
import { AppSpinner } from "../../components/common/AppSpinner";
import LaunchesByRocketContainer from "../../components/containers/LaunchesByRocketContainer";
import LaunchFilterContainer from "../../components/containers/LaunchFilterContainer";
import RocketHeroContainer from "../../components/containers/RocketHeroContainer";
import RocketOverviewContainer from "../../components/containers/RocketOverviewContainer";
import RocketPhysicalSpecsContainer from "../../components/containers/RocketPhysicalSpecContainer";
import RocketStatsContainer from "../../components/containers/RocketStatsContainer";
import LaunchesByRocketList from "../../components/lists/LaunchesByRocketList";
import { useRocket } from "../../hooks/useRocket";
import { OverlayContext } from "../../providers/OverlayProvider";
import "./RocketPage.scss";

export default function RocketPage() {
  let params = useParams();
  const rocketId = !params?.rocketId ? "" : params.rocketId;
  const { rocket, loadingRocket, errorRocket } = useRocket(rocketId);
  const { showOverlay } = useContext(OverlayContext);

  if (loadingRocket) {
    return <AppSpinner color="primary" />;
  }

  if (errorRocket) {
    return <p>There was an error getting the rocket. Try again</p>;
  }

  return (
    <>
      {rocket ? (
        <main className="rocketpage">
          <h1 className="rocketpage__title">{rocket?.name}</h1>
          <RocketHeroContainer rocket={rocket} />
          <RocketOverviewContainer rocket={rocket} />
          <RocketStatsContainer rocket={rocket} />
          <RocketPhysicalSpecsContainer rocket={rocket} />
          <LaunchesByRocketList
            rocketId={rocketId}
            title="Upcoming launches"
            upcoming={true}
          />
          <LaunchesByRocketContainer
            rocketId={rocketId}
            title="Past launches"
            upcoming={false}
          />
          {showOverlay ? (
            <AppOverlay showOverlay={showOverlay}>
              <LaunchFilterContainer rocketId={rocketId} />
            </AppOverlay>
          ) : null}
        </main>
      ) : null}
    </>
  );
}
