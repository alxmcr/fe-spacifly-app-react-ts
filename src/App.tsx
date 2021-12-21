import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouting />
      </div>
    </BrowserRouter>
  );
}

export default App;
