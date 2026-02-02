import { data } from "../../Data/Data"
import Pagination from "../Pagination/Pagination"
import "./Table.css"

export default function TableContainer({ hasPagination }: { hasPagination: boolean }) {
  return (
    <>
      <div className="data-table">
        {Object.keys(data).map((key) => (
          <div className="column" key={key}>
            <div className="column-header">{key}</div>

            <div className="column-data">
              {data[key as keyof typeof data].map((value, index) => (
                <span key={index} className="data">
                  {value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {hasPagination && <Pagination />}
    </>
  )
}
