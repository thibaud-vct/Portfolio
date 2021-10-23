import React, { useState } from "react"
import { graphql } from "gatsby"
// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

export default function IndexPage(props) {
  const { data } = props
  const allProjects = data.allMarkdownRemark.edges

  const [filter, setFilter] = useState({ filteredData: [], filterSelect: "" })

  // https://aboutmonica.com/blog/create-gatsby-blog-search-tutorial#final-code
  const handleProjectsFilter = filterSelect => {
    const projects = data.allMarkdownRemark.edges || []

    const filteredData = projects.filter(project => {
      const { type } = project.node.frontmatter
      return type.toLowerCase().includes(filterSelect.toLowerCase())
    })
    setFilter({ filteredData, filterSelect })
  }

  const { filteredData, filterSelect } = filter
  const hasFilterResults = filteredData && filterSelect !== ""
  const projects = hasFilterResults ? filteredData : allProjects
  return (
    <Layout>
      <SEO title={"Welcome"} />
      <h2>
        Thibaud Vincent is a multidisciplinary creative working as a{" "}
        <em>javascript developer</em> and <em>graphic designer</em> based in
        Paris.
      </h2>
      <filter>
        <h1 onClick={() => handleProjectsFilter("")}>All</h1>
        <h1 onClick={() => handleProjectsFilter("website")}>Website</h1>
        <h1 onClick={() => handleProjectsFilter("graphic")}>Graphic</h1>
        <h1 onClick={() => handleProjectsFilter("3d")}>3D</h1>
      </filter>
      <Projects projects={projects} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            description
            slug
            title
            type
            image {
              feature {
                childImageSharp {
                  gatsbyImageData(formats: AUTO, layout: FULL_WIDTH)
                }
              }
            }
            link
          }
        }
      }
    }
  }
`
