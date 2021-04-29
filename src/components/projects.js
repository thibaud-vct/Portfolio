import * as React from "react"

// https://www.npmjs.com/package/react-masonry-css
import Masonry from "react-masonry-css"

// Components
import Project from "../components/project"

const Projects = ({ projects }) => {
  return (
    <Masonry
      breakpointCols={{
        default: 2,
        1250: 1,
      }}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {projects.map((data, i) => {
        const project = data.node.frontmatter
        return <Project key={i} data={project} />
      })}
    </Masonry>
  )
}
export default Projects
