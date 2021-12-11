import * as React from 'react'
import { Navigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Login = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const [values, setValues] = React.useState({
    password: '',
    email: '',
    showPassword: false,
    redirect: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submitted')
    // React.useEffect(async () => {
      const response = await fetch('http://localhost:7777/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      })
      let token
      if (response.ok) {
        token = await response.text()
        // redirect to users page
        console.log(token)
        setValues({
          ...values,
          redirect: '/home'
        })
      } else {
        setOpen(true)
      }
    // })
  }

  if (values.redirect) {
    console.log(values)
    return <Navigate to={values.redirect}></Navigate>
  }
  return (
  <Container maxWidth="sm">
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField id="email" label="Email" variant="outlined" value={values.email} onChange={handleChange('email')}/>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button type='submit' variant="contained">Ingresar</Button>
      </Stack>
    </Box>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Usuario y contraseña incorrectas
      </Alert>
    </Snackbar>
  </Container>
)
}