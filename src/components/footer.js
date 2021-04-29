import * as React from "react"

const footer = () => {
  return (
    <footer>
      <div className="footer_link">
        <h5>enquiries pending</h5>
        <ul>
          <li>
            <a href="mailto:thibaudfaurevincent@gmail.com" act>
              <p>thibaudfaurevincent@gmail.com</p>
            </a>
          </li>
        </ul>
        {/* {`© ${new Date().getFullYear()} Vincent Thibaud - Made with React/Gastby`} */}
      </div>
      <div className="footer_link">
        <h5>IT tools</h5>
        <ul>
          <li>
            <p>
              Techno :{" "}
              <a href="https://www.mongodb.com/mern-stack" target="_blank">
                MERN
              </a>
              ,{" "}
              <a href="https://www.gatsbyjs.com/" target="_blank">
                Gastby
              </a>
              ,{" "}
              <a href="https://nextjs.org/" target="_blank">
                Next
              </a>
            </p>
          </li>
          <li>
            <p>
              DAW :{" "}
              <a href="https://www.ableton.com/" target="_blank">
                Ableton Live
              </a>
            </p>
          </li>
          <li>
            <p>
              Draw :{" "}
              <a
                href="https://www.adobe.com/products/indesign.html"
                target="_blank"
              >
                InDesign
              </a>
              ,{" "}
              <a href="https://www.adobe.com/products/xd.html" target="_blank">
                Xd
              </a>
              ,{" "}
              <a href="https://www.sketchup.com/" target="_blank">
                SketchUp
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="footer_link">
        <h5>social</h5>
        <ul>
          <li>
            <a href="https://www.instagram.com/larkcrail/" target="_blank">
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/thibaud-vct" target="_blank">
              <p>Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thibaudfaurevincent/"
              target="_blank"
            >
              <p>Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default footer
