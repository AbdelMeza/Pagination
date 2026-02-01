import { data } from "../../Data/Data";
import "./Table.css";

export default function TableContainer() {
  return (
    <div className="data-table">
      {Object.keys(data).map((key) => (
        <div className="column" key={key}>
          <div className="column-header">{key}</div>

          <div className="column-data">
            {data[key as keyof typeof data].map((value, index) => (
              <span key={index} className="data">{value}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
