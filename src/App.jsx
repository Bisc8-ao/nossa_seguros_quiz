import "./App.scss";
import Router from "./routes/router";
import { SoundProvider } from "./context/soundContext";

function App() {
  return (
    <>
      <SoundProvider>
        <Router />
      </SoundProvider>
    </>
  );
}

export default App;
