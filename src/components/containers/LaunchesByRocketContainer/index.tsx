import { useState } from "react";
import { LaunchesByRocketContainerProps } from "../../../@types/appPropTypes";
import { useQueryLaunches } from "../../../hooks/useQueryLaunches";
import LaunchCard from "../../cards/LaunchCard";
import { AppSpinner } from "../../common/AppSpinner";
import AppToolbar from "../../common/AppToolbar";
import "./LaunchesByRocketContainer.scss";

export default function LaunchesByRocketContainer({
  rocketId = "",
  upcoming = false,
  title = "",
}: LaunchesByRocketContainerProps) {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { launchResponse, loadingLaunches, errorLaunches } = useQueryLaunches(
    rocketId,
    upcoming,
    page,
    limit
  );
  const totalPages: number = !launchResponse ? 0 : launchResponse?.totalPages;
  const hasNextPage: boolean = !launchResponse
    ? false
    : launchResponse?.hasNextPage;
  const hasPrevPage: boolean = !launchResponse
    ? false
    : launchResponse?.hasPrevPage;

  if (errorLaunches) {
    return <p>There was an error getting the rockets. Try again</p>;
  }

  if (!loadingLaunches && launchResponse?.docs?.length === 0) {
    return <p>No rockets.</p>;
  }

  return (
    <>
      {launchResponse ? (
        <div className="launchesbyrocket">
          <h2 className="launchesbyrocket__subtitle">{title}</h2>
          {launchResponse?.totalPages > 1 ? (
            <AppToolbar
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
              hasPrevPage={hasPrevPage}
            />
          ) : null}
          <div className="launchesbyrocket__content">
            {loadingLaunches ? (
              <AppSpinner color="primary" />
            ) : (
              <>
                {launchResponse?.docs?.map((launch) => (
                  <LaunchCard
                    key={`${rocketId}-${launch.id}`}
                    launch={launch}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
