import "./App.css";

import NotFound from "./components/404Page/NotFound";
import InputField from "./components/InputField/InputField";
import ArrowButton from "./components/AnimatedButtons/ArrowButton/ArrowButton";
import FillButton from "./components/AnimatedButtons/FilledButton/FillButton";
import TextLoading from "./components/Loaders/LoadingText/TextLoading";
import Spinner from "./components/Loaders/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      <Spinner width={40} height={40} />
    </div>
  );
}

export default App;
