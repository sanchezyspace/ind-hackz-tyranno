'use client'
import '@/app/_utils/firebase'
import { AuthProvider, useAuthContext } from '@/app/AuthProvider'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const user = useAuthContext()
  if (user === 'loading') {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  if (user === null) {
    return (
      <>
        <h1>Not logged in</h1>
        <Link href={'/signin'}>Sign in</Link>
      </>
    )
  }

  return (
    <>
      <h1>Home</h1>
      <p>Welcome {user.displayName}</p>
    </>
  )
}
