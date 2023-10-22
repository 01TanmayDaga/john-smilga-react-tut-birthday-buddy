import List from "./List.jsx";
import data from "./data.js";
import { useState } from "react";

const App = () => {
  const [birthdayArray, setbirthdayArray] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{birthdayArray.length} Birthdays Today</h3>
        <List people={birthdayArray} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setbirthdayArray([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
