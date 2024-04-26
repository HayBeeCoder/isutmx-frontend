import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = ({ count, setCount }) => {
  // const buttonStyle = css`
  //   background-color: blue;
  //   color: white;
  //   padding: 10px 20px;
  // `;

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      <style jsx>{`
      button {
        
        background-color: blue;
        color: white;
        padding: 10px 20px;
        color: #faf1fa;
        display: inline-block;
        font-size: 1em;
      }
    `}</style>
    </button>
  );
  // <button >Click me</button>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={count} setCount={setCount} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
