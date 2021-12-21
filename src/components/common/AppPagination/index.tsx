import { AppPaginationProps } from "../../../@types/appPropTypes";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import "./AppPagination.scss";

export default function AppPagination({
  page = 1,
  setPage,
  totalPages = 0,
  hasNextPage = false,
  hasPrevPage = false,
}: AppPaginationProps) {
  if (totalPages <= 1) return null;
  const handlePrevPage = (page: number) => {
    setPage(page - 1);
  };
  const handleNextPage = (page: number) => {
    setPage(page + 1);
  };

  return (
    <div className="apppagination">
      {hasPrevPage ? (
        <button
          className="apppagination__buttonicon"
          onClick={() => handlePrevPage(page)}
        >
          <ArrowLeftIcon width={30} height={30} />
        </button>
      ) : null}
      <p>
        {page}/{totalPages}
      </p>
      {hasNextPage ? (
        <button
          className="apppagination__buttonicon"
          onClick={() => handleNextPage(page)}
        >
          <ArrowRightIcon width={30} height={30} />
        </button>
      ) : null}
    </div>
  );
}
