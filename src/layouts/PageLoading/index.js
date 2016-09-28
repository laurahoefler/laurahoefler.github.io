import React from "react"
import Helmet from "react-helmet"

import styles from "./index.css"

const PageLoading = () => (
  <div>
    <Helmet
      title={ "Loading..." }
    />
    <div className={ styles.loader }>
      <div className={ styles.spinner }></div>
    </div>
  </div>
)

export default PageLoading
