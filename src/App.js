import "./App.css";
import ScatterChart from "./components/ScatterChart";
import BarChart from "./components/BarChart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { render } from "@testing-library/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <ScatterChart />
      {/* <BarChart /> */}
    </div>
  );
}

export default App;
