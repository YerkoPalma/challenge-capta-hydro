import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'email', headerName: 'Email' },
  { field: 'password', headerName: 'Password' }
]

export const Users = (props) => {
  const { users } = props
  if (!users || users.length === 0) return <p>No users</p>
  const rows = users.map((user, i) => {
    return { id: i, email: user.email, password: user.password }
  })
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      />
  )
}
