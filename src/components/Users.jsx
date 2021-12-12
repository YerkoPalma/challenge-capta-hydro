import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'password', headerName: 'Password', width: 150 }
]

export const Users = () => {
  const [loading, setLoading] = React.useState(false)
  const [rows, setRows] = React.useState([])
  const [page, setPage] = React.useState(1)

  React.useEffect(async () => {
    setLoading(true)
    const response = await fetch(`http://localhost:7777/users?page=${page}`)
    const { users } = await response.json()
    setRows(users.map(
      (user, i) => {
        return { id: (page - 1) * 10 + i + 1, email: user.email, password: user.password }
      })
    )
    setLoading(false)
  }, [page])

  const handlePageChange = (newPage) => {
    console.log('[handlePageChange]', newPage + 1)
    setPage(newPage + 1)
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      rowCount={100}
      paginationMode="server"
      onPageChange={handlePageChange}
      loading={loading}
      />
  )
}
