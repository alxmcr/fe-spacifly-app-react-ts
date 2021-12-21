import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppReduxProvider } from "./providers/AppReduxProvider";
import { LaunchFilterProvider } from "./providers/LaunchFilterProvider";
import { OverlayProvider } from "./providers/OverlayProvider";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <AppReduxProvider>
        <LaunchFilterProvider>
          <OverlayProvider>
            <div className="App">
              <AppRouting />
            </div>
          </OverlayProvider>
        </LaunchFilterProvider>
      </AppReduxProvider>
    </BrowserRouter>
  );
}

export default App;
