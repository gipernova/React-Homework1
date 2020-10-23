import React from "react"
import Followers from "./Followers"
import Following from "./Following"

const ContentFooter = () => {
  return (
    <div className="contentFooter">
      <Followers />
      <div className="verticalLine"></div>
      <Following />
    </div>
  )
}

export default ContentFooter
