import { useSearchParams } from "react-router-dom"
import { data } from "../../Data/Data"
import Pagination from "../Pagination/Pagination"
import "./Table.css"

interface TableContainerProps {
  hasPagination: boolean
}

export default function TableContainer({ hasPagination }: TableContainerProps) {
  const [searchParams] = useSearchParams()
    
  const page = parseInt(searchParams.get("page") || "1", 10)
  const limit = parseInt(searchParams.get("limit") || "10", 10)

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return (
    <>
      <div className="data-table">
        {Object.keys(data).map((key) => (
          <div className="column" key={key}>
            <div className="column-header">{key}</div>

            <div className="column-data">
              {data[key as keyof typeof data]
                .slice(startIndex, endIndex)
                .map((value, index) => (
                  <span key={index + startIndex} className="data">
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
