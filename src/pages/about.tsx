import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"

export default function About() {
  return (
    <div>
      <Header title="About page"/>
      <p>About page</p>
      <button onClick={() => {
        navigate("/")
      }}>
        GO back to the main page
      </button>
    </div>
  )
}
