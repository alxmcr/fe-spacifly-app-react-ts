import { useContext, useState } from "react";
import { FilterLaunchFormProps } from "../../../@types/appPropTypes";
import { LaunchFilter } from "../../../@types/appTypes";
import { LaunchFilterContext } from "../../../providers/LaunchFilterProvider";
import { OverlayContext } from "../../../providers/OverlayProvider";
import "./FilterLaunchForm.scss";

export default function FilterLaunchForm({
  rocketId = "",
}: FilterLaunchFormProps) {
  const quantityButtons = ["1", "2", "3", "4", "+5"];
  const [launchId, setLaunchId] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [countCapsules, setCountCapsules] = useState<number>(0);
  const [countCrew, setCountCrew] = useState<number>(0);
  const [countShips, setCountShips] = useState<number>(0);
  const { setFilter } = useContext(LaunchFilterContext);
  const { setShowOverlay } = useContext(OverlayContext);

  const handleLaunchId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLaunchId(event.target.value);
  };
  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMinPrice(value ? Number(value) : 0);
  };
  const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMaxPrice(value ? Number(value) : 0);
  };
  const handleCountCapsules = (quantityCapsules: number) => {
    setCountCapsules(quantityCapsules);
  };
  const handleCrew = (quantityCrew: number) => {
    setCountCrew(quantityCrew);
  };
  const handleShips = (quantityShips: number) => {
    setCountShips(quantityShips);
  };
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Filter form submitted");
    const filter: LaunchFilter = {
      rocketId,
      launchId,
      minPrice,
      maxPrice,
      countCapsules,
      countCrew,
      countShips,
      isClear: false,
    };
    setFilter(filter);
    setShowOverlay(false);
  };

  const handleResetFilter = () => {
    setLaunchId("");
    setMinPrice(0);
    setMaxPrice(0);
    setCountCapsules(0);
    setCountCrew(0);
    setCountShips(0);
    const filter: LaunchFilter = {
      rocketId,
      launchId,
      minPrice,
      maxPrice,
      countCapsules,
      countCrew,
      countShips,
      isClear: true,
    };
    setFilter(filter);
  };

  return (
    <form className="filter" onSubmit={handleFilter}>
      <div className="filter__row">
        <label htmlFor="launch-id" className="filter__label">
          Launch ID:
        </label>
        <input
          className="filter__input"
          type="text"
          name="launch-id"
          id="launch-id"
          placeholder="Enter a launch ID"
          value={launchId}
          onChange={handleLaunchId}
        />
      </div>
      <div className="filter__row">
        <div className="filter__group">
          <label htmlFor="min-price" className="filter__label">
            Min. price (USD.):
          </label>
          <input
            className="filter__input"
            type="number"
            name="min-price"
            id="min-price"
            placeholder="Enter minimum price"
            value={minPrice}
            min={0}
            onChange={handleMinPrice}
          />
        </div>
        <div className="filter__group">
          <label htmlFor="max-price" className="filter__label">
            Max. price (USD.):
          </label>
          <input
            className="filter__input"
            type="number"
            name="max-price"
            id="max-price"
            placeholder="Enter maximum price"
            value={maxPrice}
            min={0}
            onChange={handleMaxPrice}
          />
        </div>
      </div>
      <div className="filter__row">
        <label htmlFor="capsules" className="filter__label">
          Capsules (click one):
        </label>
        <div className="filter__buttons">
          {quantityButtons.map((button, index) => (
            <div key={index}>
              {countCapsules === index + 1 ? (
                <button
                  className="filter__buttonnumber filter__buttonnumber--selected"
                  type="button"
                  name="capsules-quantity"
                >
                  {button}
                </button>
              ) : (
                <button
                  className="filter__buttonnumber"
                  type="button"
                  name="capsules-quantity"
                  onClick={() => handleCountCapsules(index + 1)}
                >
                  {button}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="filter__row">
        <label htmlFor="crew" className="filter__label">
          Crew (click one):
        </label>
        <div className="filter__buttons">
          {quantityButtons.map((button, index) => (
            <div key={index}>
              {countCrew === index + 1 ? (
                <button
                  className="filter__buttonnumber filter__buttonnumber--selected"
                  type="button"
                  name="crew-quantity"
                >
                  {button}
                </button>
              ) : (
                <button
                  className="filter__buttonnumber"
                  type="button"
                  name="crew-quantity"
                  onClick={() => handleCrew(index + 1)}
                >
                  {button}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="filter__row">
        <label htmlFor="ships" className="filter__label">
          Ships (click one):
        </label>
        <div className="filter__buttons">
          {quantityButtons.map((button, index) => (
            <div key={index}>
              {countShips === index + 1 ? (
                <button
                  className="filter__buttonnumber filter__buttonnumber--selected"
                  type="button"
                  name="ships-quantity"
                >
                  {button}
                </button>
              ) : (
                <button
                  key={index}
                  className="filter__buttonnumber"
                  type="button"
                  name="ships-quantity"
                  onClick={() => handleShips(index + 1)}
                >
                  {button}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="filter__actions">
        <button type="submit" className="filter__button">
          Filter
        </button>
        <button
          type="reset"
          className="filter__button"
          onClick={handleResetFilter}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
