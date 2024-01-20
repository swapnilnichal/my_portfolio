"use client"
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import Link from "next/link";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" id="myModal" centered>
      <Modal.Header>
        <Button variant="dark" onClick={props.onHide}>X</Button>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          {props.projectName}
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <img className="modal-project-img" src={props.projectimage} alt={props.projectname} />
        <div className="project-details-div">
          <div className="modal-project-name">{props.projectname}</div>
          <div className="modal-project-duration">{props.projectduration}</div>
        </div>
        <div className="techStack">
          {props.techstack.map((tech, index) => (
            <span className="modal-techName" key={index}>
              {tech}
            </span>
          ))}
        </div>
        <div className="modal-project-details">{props.projectdetails}</div>
        <div className="codeAndLink-btn-div">
          <Link className="code-btn" target="display" href={props.projectcodelink}>View Code</Link>
          <Link className="live-btn" target="display" href={props.livesitelink}>View Live App</Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}


const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      projectName: 'Insta clone',
      projectImage: '../instapage.png',
      techStack: ['ReactJS', 'NodeJs', 'ExpressJs', 'MongoDB', 'Materialize Css', 'Redux', 'Eslint', 'CSS', 'GitHub'],
      projectDuration: 'Jan 2023 - Mar 2023',
      projectDetails:
        `Introducing Insta Clone, your go-to Instagram clone app! - a dynamic platform reminiscent 
        of Instagram's engaging experience. With a focus on user-friendly design, my app captures 
        the essence of social sharing, empowering users to connect, and explore seamlessly. Explore 
        the world of my web application, where creativity meets functionality, providing a captivating 
        user experience for sharing moments and fostering connections.`,
      projectLink: `https://ill-gray-armadillo-fez.cyclic.app/`,
      codeLink: `https://github.com/swapnilnichal/newinstagram`
    },
    {
      projectName: 'Casually',
      projectImage: '../casuallyFront.png',
      techStack: ['ReactJS', 'NodeJs', 'ExpressJs', 'Materialize Css', 'Eslint', 'CSS', 'GitHub'],
      projectDuration: 'Sept 2023 - Oct 2023',
      projectDetails:
        `Introducing Casually, your online e-commerce site!
              Developed a responsive e-commerce platform.
              Streamlined user experience with features like signup, login, and logout.
              Users can explore, add products to the cart, and seamlessly checkout.
              Implemented secure payment processing through Stripe.
              Responsive design ensures a smooth experience across devices.`,
      projectLink: `https://slayitcasually.netlify.app/`,
      codeLink: `https://github.com/swapnilnichal/Casually_Frontend`
    },
    {
      projectName: 'Booming Bulls Clone',
      projectImage: '../boomingbulls.png',
      techStack: ['HTML', 'CSS', 'JavaScipt', 'Eslint', 'GitHub'],
      projectDuration: 'Nov 2022 - Dec 2022',
      projectDetails:
        `This is a clone of a boomingbulls.com website , which is a trading firm
            that provides both online and offline courses related financial market.
            this site is Simple, responsive and has user-friendly interface.`,
      projectLink: `https://boomingbullsclone.tiiny.site/`,
      codeLink: `https://github.com/swapnilnichal/boomingBulls_clone`
    },
    {
      projectName: 'My Portfolio Site',
      projectImage: '../portfolio.png',
      techStack: ['NextJS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Eslint', 'GitHub'],
      projectDuration: 'Nov 2022 - Dec 2022',
      projectDetails:
        `Welcome to my portfolio! I'm a passionate Web developer, and this site is my digital playground. 
            Using Next.js, I've woven together a collection of projects that showcase my skills in full-stack, 
            front-end, and web development. Dive in to explore the fusion of creativity and code. 
            Let's turn ideas into reality and create digital experiences that leave a lasting impression.`,
      projectLink: `/`,
      codeLink: `/`
    },
    {
      projectName: `Archana's Classes`,
      projectImage: '../onlineClasses.png',
      techStack: ['ReactJS', 'NodeJs', 'ExpressJs', 'MongoDB', 'Bootstrap', 'CSS', 'GitHub'],
      projectDuration: 'Dec 2023',
      projectDetails:
        `It is an web App where user can signup and login, it provides a features like front-end and back-end validation,
         authorization with JWT token, validation is maintained by checking the user's data at the database. 
         on user's profile page user can see all his information and can successfully update his/her information.
         all the updated data is stored in the database.`,
      projectLink: `https://online-classes-platform.netlify.app/`,
      codeLink: `https://github.com/swapnilnichal/online_teaching`
    },
    {
      projectName: 'Contact Manager',
      projectImage: '../contact.png',
      techStack: ['ReactJS', 'NodeJs', 'ExpressJs', 'MongoDB', 'Materialize Css', 'CSS', 'GitHub'],
      projectDuration: 'Aug 2023',
      projectDetails:
        ` Contact Manager is an Web App where user can signup and login, it provides a features like front-end and 
        back-end validation, validation is maintained by checking the user's data at the database. 
        user can add contact information like name, email and phone number. user can delete contact,
        update contact information, and all the updated data is saved into the database and also that
        data is reflected on the screen.`,
      projectLink: ``,
      codeLink: `https://github.com/swapnilnichal/contact-management`
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  return (
    <div className="project-main-div" id="projects">
      <div className="projects-svg-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1c1c27" fillOpacity="1" d="M0,288L480,128L960,192L1440,256L1440,320L960,320L480,320L0,320Z"></path>
        </svg>
      </div>

      <div className="projects-wrapper">
        <div className="projects-inner-div">
          <div className="projects-head">Projects</div>
          <div className="projects-para">
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </div>
          <div className="projects">

            {projects.map((project, index) => (
              <div className="single-project" key={index} onClick={() => handleProjectClick(project)}>
                <img className="project-img" src={project.projectImage} />
                <div className="techStack">
                  {
                    project.techStack.map((skill) => (
                      <span key={skill} className="techName">{skill}</span>
                    ))
                  }
                </div>
                <div className="project-details-div">
                  <div className="project-name">{project.projectName}</div>
                  <div className="project-duration">{project.projectDuration}</div>
                  <div className="project-details">
                    {project.projectDetails}
                  </div>
                </div>
              </div>
            ))}
            {selectedProject && (
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                projectname={selectedProject.projectName}
                projectimage={selectedProject.projectImage}
                techstack={selectedProject.techStack}
                projectduration={selectedProject.projectDuration}
                projectdetails={selectedProject.projectDetails}
                livesitelink={selectedProject.projectLink}
                projectcodelink={selectedProject.codeLink}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;
