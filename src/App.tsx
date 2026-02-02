import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import TableContainer from "../Components/Table/Table"

function App() {
  const [hasPagination, setHasPagination] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get("page") || !searchParams.get("limit")) {
      setSearchParams({ page: "1", limit: "10" })
    }
  }, [searchParams, setSearchParams])

  const limitParam = searchParams.get("limit")
  const limit = limitParam ? parseInt(limitParam, 10) : null

  useEffect(() => {
    setHasPagination(!!limit && limit > 0)
  }, [limit])

  return <TableContainer hasPagination={hasPagination} />
}

export default App
