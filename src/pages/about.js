import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = props => {
  return (
    <Layout>
      <SEO title="About" />
      <h3>
        Multidisciplinary <em>Digital</em>
      </h3>
      <div className="about">
        <h4>
          Thibaud Vincent is a multidisciplinary creative developer full stack
          and graphic designer based in Paris.
        </h4>
        <h4>
          After having worked part of his career in the field of IT, culture and
          fashion, he returns to IT and seeks to improve in web development,
          identity and interface design.
        </h4>
        <h4>
          Living in Paris, he is also the co-founder of Cøllected. A selection
          of art objects as well as services to companies in order to provide
          expertise in the development of a brand image or a communication
          strategy through the arts.
        </h4>
      </div>
    </Layout>
  )
}
export default about
