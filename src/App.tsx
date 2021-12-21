import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppReduxProvider } from "./providers/AppReduxProvider";
import { OverlayProvider } from "./providers/OverlayProvider";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <AppReduxProvider>
        <OverlayProvider>
          <div className="App">
            <AppRouting />
          </div>
        </OverlayProvider>
      </AppReduxProvider>
    </BrowserRouter>
  );
}

export default App;
