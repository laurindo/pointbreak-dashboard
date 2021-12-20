import { useState, useEffect } from 'react'
import Router from 'next/router'

// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// import CircularProgress from '@mui/material/CircularProgress'
// import Typography from '@mui/material/Typography'
// import Alert from '@mui/material/Alert'
// import Stack from '@mui/material/Stack'

import useAuth from '@/hooks/useAuth'

function Login() {
  const { user, setUser, signin } = useAuth()
  console.log(user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const handleSignin = () => {
    setLoading(true)
    signin(email, password)
      .then((response) => {
        setUser(response.user)
        Router.push('/admin')
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  useEffect(() => {
    if (user) {
      setLoading(false)
      setError(false)
    }
  }, [user])

  if (isLoading) {
    //return <CircularProgress />
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: '0 auto',
          width: '500px',
          height: '80vh',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/*<Stack spacing={4}>
          <Typography variant="h3" gutterBottom component="div">
            ExchangeHelio
          </Typography>

          {isError && <Alert severity="error">Erro ao logar</Alert>}

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Stack>

        <div style={{ margin: '20px 0' }}>
          <Button variant="contained" onClick={handleSignin}>
            Signin
          </Button>
        </div>*/}
      </div>
    </div>
  )
}

export default Login
