import React from "react"
import { connect } from "frontity"
import { Background, BackgroundOverlay } from "./page-background.styles"

const PageBackground = ({ state, ...props }) => {

  return (
    <>
      <Background {...props} />
      <BackgroundOverlay />
    </>
  )
}

export default connect(PageBackground)