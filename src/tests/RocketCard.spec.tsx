import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RocketCard from "../components/cards/RocketCard";
import { mockRocket } from "../helpers/appTestingHelper";

describe("RocketCard component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <MemoryRouter>
        <RocketCard rocket={mockRocket} index={1} />
      </MemoryRouter>
    );
    const name = getByText("Falcon 1");
    const description = getByText(
      "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
    );

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
