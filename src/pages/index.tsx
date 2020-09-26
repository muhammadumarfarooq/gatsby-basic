import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <p>Hello world from index.html!</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
}
