import * as React from "react"
import { findDOMNode } from "react-dom"
import Card from "../components/Card"

// markup
const IndexPage = () => {
 

  return (
    <main>
      <h1>Transitions</h1>

      <div style={{display:"flex", flexWrap:"wrap", margin:"auto"}} >
      
        <Card  />
    
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default IndexPage
