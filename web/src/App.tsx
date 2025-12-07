import React from 'react'
import IssueBadgeForm from './components/IssueBadgeForm'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>IOTA Badges</h1>
        <p>Issue simple badge metadata to an IOTA node (testnet)</p>
      </header>

      <main>
        <IssueBadgeForm />
      </main>

      <footer>
        <small>Example frontend — change NODE_URL in the form to point to your node.</small>
      </footer>
    </div>
  )
}
