import React, { useEffect, useState } from 'react'
import { WithDataLoading } from './WithDataLoading'
import { Users } from './Users'

export const Home = () => {
  const Data = WithDataLoading(Users);
  const [appState, setAppState] = useState({
    loading: false,
    users: null,
  })

  useEffect(async () => {
    setAppState({ loading: true })
    const response = await fetch('http://localhost:7777/users')
    const { users } = await response.json()

    setAppState({ loading: false, users })
  }, [setAppState])
  return <Data isLoading={appState.loading} users={appState.users} />
}