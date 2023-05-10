import "./styles.css";
import useWindowSize from "./useWindowSize";

export default function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="App">
      {height} {width}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
