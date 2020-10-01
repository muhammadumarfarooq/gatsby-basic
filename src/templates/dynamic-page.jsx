import React from "react"
import Layout from "../components/Layout"
import { navigate } from "gatsby"


export default function dynamicPage({pageContext}) {
  return (
    <Layout headerTitle="Dynamic Page">
      <p>Dynamic page</p>
      <button onClick={() => {
        navigate("/")
      }}>
        GO back to the main page
      </button>
      <h1>{pageContext.myTeacher}</h1>
      <h1>{pageContext.myName}</h1>
    </Layout>
  )
}
