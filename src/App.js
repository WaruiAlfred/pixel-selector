import "./App.css";
import PixelArt from "./Components/PixelArt";
import { AppContextProvider } from "./Components/Context";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <PixelArt />
      </div>
    </AppContextProvider>
  );
}

export default App;
