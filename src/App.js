import "./App.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />

        <footer>
          <a
            href="https://github.com/marlinejohn/redi-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Marline John
        </footer>
      </div>
    </div>
  );
}

export default App;
