import { useContext } from "react";
import { AppToolbarProps } from "../../../@types/appPropTypes";
import { OverlayContext } from "../../../providers/OverlayProvider";
import AppPagination from "../AppPagination";
import "./AppToolbar.scss";

export default function AppToolbar({
  page = 1,
  setPage,
  totalPages = 1,
  hasNextPage = false,
  hasPrevPage = false,
}: AppToolbarProps) {
  const { setShowOverlay } = useContext(OverlayContext);
  const handleOpenDialog = () => {
    setShowOverlay(true);
  };
  return (
    <section className="apptoolbar">
      <button className="apptoolbar__button" onClick={handleOpenDialog}>
        Filter
      </button>
      <AppPagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </section>
  );
}
