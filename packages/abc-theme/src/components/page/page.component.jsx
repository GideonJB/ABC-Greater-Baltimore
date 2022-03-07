import React, { useEffect } from "react"
import { connect } from "frontity"
import { PageWrapper} from "./page.styles"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  const Html2React = libraries.html2react.Component

  return (
      <PageWrapper>
        <Html2React html={page.content.rendered} />
      </PageWrapper>
  )
}

export default connect(Page)