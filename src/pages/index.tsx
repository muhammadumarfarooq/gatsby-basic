import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout headerTitle="Index Page">
      <div>
        <p>Hello world from index.html!</p>
        <Link to="/about">Go to About Page</Link>
      </div>
    </Layout>
  )
}
