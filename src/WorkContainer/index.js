import React from "react"
import { styled } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

const Container = styled("div")({
  position: "relative",
  flexGrow: 1,
  height: "100%",
  backgroundColor: grey[50],
})
const ShadowOverlay = styled("div")({
  content: "' '",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  mouseEvents: "none",
  boxShadow:
    "inset 0 3px 5px rgba(0,0,0,0.15), inset -3px 0 5px rgba(0,0,0,0.15), inset 3px 0 5px rgba(0,0,0,0.15)",
})

export const WorkContainer = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
      <ShadowOverlay />
    </Container>
  )
}

export default WorkContainer
