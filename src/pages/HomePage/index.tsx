import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className="home">
      <h1 className="home__name">Spacifly</h1>
      <div className="home__details">
        <p className="home__goal">Travel around the galaxy.</p>
        <p className="home__features">Easy, fast, and safe.</p>
      </div>
      <div className="home__actions">
        <Link to="/rockets" className="home__cta">
          Find your rocket!
        </Link>
      </div>
    </main>
  );
}
