import React from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import FormForFullInfo from '../components/FormForFullInfo';
import IncompleteInfo from '../components/IncompleteInfo';
export default function ContactUs() {
  return (
    <Layout headerTitle="Contact Us Page">
      <p>This is component Contact Us page</p>
      <Router basepath='/contactUs'>
        <FormForFullInfo path="/complete"/>
        <IncompleteInfo path="/incomplete"/>
      </Router>
    </Layout>
  )
}
