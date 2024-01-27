import Image from "next/image";
import React from "react"
import bootstrapLogo from "../../../public/bootstrap-logo.png"
import nodeLogo from "../../../public/node-js-logo.png"
import gitIcon from "../../../public/gitIcon.png"
import githubIcon from "../../../public/githubIcon.jpg"
import netlifyLogo from "../../../public/netlifyLogo.png"
import vsCodeLogo from "../../../public/vscodeImg.png"
import postmanLogo from "../../../public/postmanLogo.png"
import figmaLogo from "../../../public/figmaLogo.png"
import npmLogo from "../../../public/npmLogo.png"
import RTL from "../../../public/RTL.png"
import jestImg from "../../../public/jestImg.png"

const Skills = () => {
  return (
    <div id="skills">
    <div style={{backgroundColor:"black"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1c1c27d4" fillOpacity="2" d="M0,192L720,160L1440,192L1440,320L720,320L0,320Z"></path>
          </svg>
    </div>
    <div className="skills-wrapper">
      <div className="skills-sub-wrapper">
        <div className="inner-skills-div">
          <div className="skills-Head">Skills</div>
          <div className="skills-para">
            Here are some of my skills on which I have been working on for the past 2 years.
          </div>
          <div className="my-skills-div">

            <div className="my-skills">
              <h2 className="technology-name">Frontend</h2>
              <div className="skill-set">
                <div className="skill">
                <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" height={24} width={24} alt="skill-img"/>
                  React Js
                </div>
                <div className="skill">
                <Image src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" height={24} width={24} alt="skill-img"/>
                  Redux
                </div>
                <div className="skill">
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=" height={24} width={24} alt="skill-img"/>
                  Next JS
                </div>
                <div className="skill">
                <Image src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" height={24} width={24} alt="skill-img"/>
                  HTML
                </div>
                <div className="skill">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" height={24} width={24} alt="skill-img"/>
                  CSS
                </div>
                <div className="skill">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" height={24} width={24} alt="skill-img"/>
                  JavaScript
                </div>
                <div className="skill">
                <Image src="https://www.seekpng.com/png/small/0-1501_image-title-angel-tube-station.png" height={24} width={24} alt="skill-img"/>
                  TypeScript
                </div>
                <div className="skill">
                <Image src={bootstrapLogo} height={24} width={24} alt="skill-img"/>
                  Bootstrap
                </div>
                <div className="skill">
                <Image src="https://www.pinpng.com/pngs/m/204-2047356_materialize-css-materialize-css-logo-png-transparent-png.png" height={24} width={24} alt="skill-img"/>
                  Materialize Css
                </div>
              </div>
            </div>

            <div className="my-skills">
              <h2 className="technology-name">Backend</h2>
              <div className="skill-set">
                <div className="skill">
                <Image src={nodeLogo} height={24} width={24} alt="skill-img"/>
                 Node Js
                </div>
                <div className="skill">
                <Image src="https://www.budventure.technology/public/frontend/images/tech_expertise/ExpressJS.png" height={24} width={24} alt="skill-img"/>
                 Express Js
                </div>
                <div className="skill">
                <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" height={24} width={24} alt="skill-img"/>
                  Python
                </div>
                <div className="skill">
                <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" height={24} width={24} alt="skill-img"/>
                 MySQL
                </div>
                <div className="skill">
                <Image src="https://www.postgresql.org/media/img/about/press/elephant.png" height={24} width={24} alt="skill-img"/>
                 Postgresql
                </div>
                <div className="skill">
                <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" height={24} width={24} alt="skill-img"/>
                  MongoDB
                </div>
              </div>
            </div>

            <div className="my-skills">
            <h2 className="technology-name">Others</h2>
              <div className="skill-set">
                <div className="skill">
                <Image src={gitIcon} height={24} width={24} alt="skill-img"/>
                 Git
                </div>
                <div className="skill">
                <Image src={githubIcon} height={24} width={24} alt="skill-img"/>
                 GitHub 
                </div>
                <div className="skill">
                <Image src={netlifyLogo} height={24} width={24} alt="skill-img"/>
                 Netlify
                </div>
                <div className="skill">
                <Image src={vsCodeLogo} height={24} width={24} alt="skill-img"/>
                 VS Code 
                </div>
                <div className="skill">
                <Image src={postmanLogo} height={24} width={24} alt="skill-img"/>
                 Postman 
                </div>
                <div className="skill">
                <Image src={figmaLogo} height={24} width={24} alt="skill-img"/>
                 Figma 
                </div>
                <div className="skill">
                <Image src={jestImg} height={24} width={24} alt="skill-img"/>
                 Jest 
                </div>
                <div className="skill">
                <Image src={npmLogo} height={24} width={24} alt="skill-img"/>
                 npm 
                </div>
                <div className="skill">
                <Image src={RTL} height={24} width={24} alt="skill-img"/>
                 React Testing Library 
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Skills;
