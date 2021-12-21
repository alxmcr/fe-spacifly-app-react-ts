import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppReduxProvider } from "./providers/AppReduxProvider";
import AppRouting from "./routes/AppRouting";

function App() {
  return (
    <AppReduxProvider>
      <BrowserRouter>
        <div className="App">
          <AppRouting />
        </div>
      </BrowserRouter>
    </AppReduxProvider>
  );
}

export default App;
