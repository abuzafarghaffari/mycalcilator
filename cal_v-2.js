import { useState } from "react";
import "./App.css";

const board = [
  ["AC", "Del", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  ["0", ".", "="],
];

function App() {
  const [total, setTotal] = useState("");

  function clickControl(col?: string) {
    switch (col) {
      case "AC": {
        setTotal("");
        break;
      }
      case "Del": {
        setTotal((prev) => prev.slice(0, -1));
        break;
      }
      case "=": {
        try {
          setTotal(eval(total).toString());
        } catch {
          setTotal("Error");
        }
        break;
      }
      default: {
        setTotal((prev) => prev + col);
      }
    }
  }

  console.log("total", total);

  return (
    <main>
      <h3 className=" bg-slate-100 h-11">{total}</h3>
      <ul className="cal">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="row">
              {row.map((col, colIndex) => {
                return (
                  <li
                    key={colIndex}
                    className={`${col == "AC" || col == "=" ? "grow" : ""}`}
                  >
                    <button onClick={() => clickControl(col)}>{col}</button>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
