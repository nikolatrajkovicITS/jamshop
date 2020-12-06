import React from "react"
import Layout from "../../components/Layout/index"

export default function Product({ params }) {
  const data = params
  return (
    <Layout>
      <div>
        <h2>{JSON.stringify(data)} TEST</h2>
      </div>
    </Layout>
  )
}
