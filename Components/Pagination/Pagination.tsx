import { useSearchParams } from "react-router-dom"
import { data } from "../../Data/Data"
import './Pagination.css'

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams()
    
  const totalItems = data["ID"].length
  const page = searchParams.get("page")
  const limit = searchParams.get("limit")
  const totalPages = limit ? Math.ceil(totalItems / parseInt(limit, 10)) : 1

  return <div className="pagination">
    <button
      className="page-button"
      disabled={page === "1"}
      onClick={() => {
        const prevPage = page ? Math.max(1, parseInt(page, 10) - 1) : 1
        setSearchParams({ page: prevPage.toString(), limit: limit || "10" })
      }}
    >
      Previous
    </button>
    {page + "/" + totalPages}
    <button
      className="page-button"
      disabled={page === totalPages.toString()}
      onClick={() => {
        const nextPage = page ? Math.min(totalPages, parseInt(page, 10) + 1) : totalPages
        setSearchParams({ page: nextPage.toString(), limit: limit || "10" })
      }}
    >
      Next
    </button>
  </div>
}
