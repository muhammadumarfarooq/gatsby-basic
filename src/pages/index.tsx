import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header title="Index page"/>
      <p>Hello world from index.html!</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
}
