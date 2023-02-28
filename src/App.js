import "./App.css";
import Login from "./components/login";

function App() {
  const a = 5;
  const b = 7;
  return (
    <div>
      <h1>hello world</h1>
      <Login />
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <p data-testid="datatest">hello</p>
      <span title="sum">{a + b}</span>
    </div>
  );
}

export default App;
