import { useState } from "react";
import { LaunchesByRocketListProps } from "../../../@types/appPropTypes";
import { useQueryLaunches } from "../../../hooks/useQueryLaunches";
import { AppSpinner } from "../../common/AppSpinner";
import AppToolbar from "../../common/AppToolbar";
import LaunchRow from "../../data/LaunchRow";
import "./LaunchesByRocketList.scss";

export default function LaunchesByRocketList({
  rocketId = "",
  upcoming = false,
  title = "",
}: LaunchesByRocketListProps) {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { launchResponse, loadingLaunches, errorLaunches } = useQueryLaunches(
    rocketId,
    upcoming,
    page,
    limit
  );

  if (errorLaunches) {
    return <p>There was an error getting the launches. Try again</p>;
  }

  return (
    <>
      {launchResponse ? (
        <div className="launchesbyrocketlist">
          <h2 className="launchesbyrocketlist__subtitle">{title}</h2>
          {!loadingLaunches && launchResponse?.docs?.length === 0 ? (
            <p>No launches.</p>
          ) : null}
          {launchResponse?.totalPages > 1 ? (
            <AppToolbar
              page={page}
              setPage={setPage}
              totalPages={launchResponse?.totalPages}
              hasNextPage={launchResponse?.hasNextPage}
              hasPrevPage={launchResponse?.hasPrevPage}
            />
          ) : null}
          <div className="launchesbyrocketlist__content">
            {loadingLaunches ? (
              <AppSpinner color="primary" />
            ) : (
              <>
                {launchResponse?.docs?.map((launch) => (
                  <LaunchRow key={`${rocketId}-${launch.id}`} launch={launch} />
                ))}
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
