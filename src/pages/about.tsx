import React from "react"
import { navigate } from "gatsby"

export default function About() {
  return (
    <div>
      <p>About page</p>
      <button onClick={() => {
        navigate("/")
      }}>
        GO back to the main page
      </button>
    </div>
  )
}
