import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout headerTitle="About Page">
      <p>About page</p>
      <button onClick={() => {
        navigate("/")
      }}>
        GO back to the main page
      </button>
    </Layout>
  )
}
