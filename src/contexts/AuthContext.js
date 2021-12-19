import { createContext, useState, useCallback } from 'react'
import Router from 'next/router'
import firebase from '@/services/setup-firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signin = useCallback((email, password) => {
    try {
      setLoading(true)
      return firebase.auth().signInWithEmailAndPassword(email, password)
    } finally {
      setLoading(false)
    }
  }, [])

  const signinGithub = useCallback(() => {
    try {
      setLoading(true)
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => {
          setUser(response.user)
          Router.push('/admin')
        })
    } finally {
      setLoading(false)
    }
  }, [])

  const signinGoogle = useCallback(() => {
    try {
      setLoading(true)
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((response) => {
          setUser(response.user)
          Router.push('/admin')
        })
    } finally {
      setLoading(false)
    }
  }, [])

  const signout = useCallback(() => {
    try {
      Router.push('/auth/login')
      return firebase
        .auth()
        .signOut()
        .then(() => setUser(null))
    } finally {
      setUser(null)
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signinGithub,
        signinGoogle,
        signout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
