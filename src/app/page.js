import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Education from "./components/Education"
import TypeEffect from "./components/typeEffect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main>
      <div>
        <Navbar/>
        <div className="content-wrapper" id="about">
          <div className="about-wrapper">
            <div className="about-left-div">
              <div className="my-name">
                Hi, I am <br />
                Swapnil Nichal
              </div>
              <TypeEffect />
              <div>
                <p className="mySelf">I am a motivated and versatile individual, always eager to take on new challenges.
                  With a passion for learning I am dedicated to delivering high-quality results.
                  With a positive attitude and a growth mindset, I am ready to make a meaningful
                  contribution and achieve great things.
                </p>
              </div>
              <Resume />
            </div>
            <div className="about-right-div">
              <div className="my-img"></div>
            </div>
          </div>
        </div>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}
