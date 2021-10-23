import React, { useState } from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = ({ data }) => {
  const [visible, setVisible] = useState()
  const handleDescriptionVisibility = event =>
    event ? setVisible("visible") : setVisible()
  const image = getImage(data.image.feature)

  return (
    <div
      className="masonry-item"
      onMouseOver={() => {
        handleDescriptionVisibility(true)
      }}
      onMouseLeave={() => {
        handleDescriptionVisibility(false)
      }}
    >
      <GatsbyImage
        image={image}
        alt={"projets"}
        style={{ opacity: 0.9, backgroundColor: `transparent` }}
      />
      <div className={`project_description ${visible}`}>
        <h5>{data.title}</h5>
        <p>{data.description}</p>
        <br />
        <a href={data.link} target="_blank">
          <p>{data.link}</p>
        </a>
      </div>
    </div>
  )
}
export default Project
