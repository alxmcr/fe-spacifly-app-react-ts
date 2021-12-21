import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";
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
            <AppHeader />
            <div className="App">
              <AppRouting />
            </div>
            <AppFooter />
          </OverlayProvider>
        </LaunchFilterProvider>
      </AppReduxProvider>
    </BrowserRouter>
  );
}

export default App;
