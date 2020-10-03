import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import styles from "./about.module.css"
import Button from "@material-ui/core/Button"

export default function About() {
  return (
    <Layout headerTitle="About Page">
      <p className={styles.myTitle}>About page</p>
      <Button onClick={() => navigate("/")} variant="contained" color="primary">
        Primary
      </Button>
    </Layout>
  )
}
