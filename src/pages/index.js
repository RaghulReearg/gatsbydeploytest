import React from "react"
import Header from "../components/header"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: "purple" }}>
        <h1>HOme Pae</h1>
        <p>Hello world</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  )
}
