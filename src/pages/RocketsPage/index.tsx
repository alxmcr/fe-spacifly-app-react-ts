import RocketsContainer from "../../components/containers/RocketsContainer";
import "./RocketsPage.scss";

export default function RocketsPage() {
  return (
    <main className="rockets">
      <h1 className="rockets__title">Rockets</h1>
      <RocketsContainer />
    </main>
  );
}
