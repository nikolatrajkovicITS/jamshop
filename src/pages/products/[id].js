import React from "react"

export default function Product({ params }) {
  const data = params
  return (
    <div>
      <h2>{JSON.stringify(data)} TEST</h2>
    </div>
  )
}
