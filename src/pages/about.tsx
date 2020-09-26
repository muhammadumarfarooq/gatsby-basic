import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import styles from "./about.module.css"

export default function About() {
  return (
    <Layout headerTitle="About Page">
      <p className={styles.myTitle}>About page</p>
      <button onClick={() => {
        navigate("/")
      }}>
        GO back to the main page
      </button>
    </Layout>
  )
}
