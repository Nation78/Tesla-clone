import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
       />
      <Section 
         title="Model Y"
         description="Order online for Touchless Delivery"
         backgroundImg="model-y.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventory"
      />
      <Section 
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Lowest Cost Solar panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plans Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="order now"
      />
    </Container>
  )
}
  
export default Home

const Container = styled.div`
   height:100vh;
`