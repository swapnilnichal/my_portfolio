import Image from "next/image";
import fitnearn from "../../../public/fitnearn.jpg";

const Experience = () => {
  return (
    <div className="experience-wrapper" id="experience">
      <div className="experience-inner-div">
        <h6 className="experience-head">Experience</h6>
        <div className="experience-para">
          My work experience as a software engineer and working on different companies and projects.
        </div>
        <div className="experience-data">
          <ul className="experience-ul">
            <li className="MuiTimelineItem-root MuiTimelineItem-positionRight MuiTimelineItem-missingOppositeContent css-1rcbby2">
              <div className="MuiTimelineSeparator-root css-11tgw8h">
                <span className="MuiTimelineDot-root MuiTimelineDot-outlined MuiTimelineDot-outlinedSecondary css-1d8391m"></span>
                <span className="MuiTimelineConnector-root css-idv8vo" style={{ background: "rgb(133, 76, 230)" }}></span>
              </div>
              <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-68bxna">
                <div className="sc-eKBdFk jVjsEr"><div className="sc-bUbCnL gnYlPd">
                  <Image
                    alt="logo of Company"
                    src={fitnearn}
                    width={50}
                    height={50}
                    className="sc-kIKDeO fHNtMj"
                  />
                  <div className="sc-hNKHps jmYowc">
                    <div className="sc-dsQDmV gXyWph">Junior Web Developer</div>
                    <div className="sc-cZwWEu cYcuZM">FitnEarn Pvt. Ltd.</div>
                    <div className="sc-jTYCaT jgoqAQ">Jan 2024</div>
                  </div>
                </div>
                  <div className="sc-jOhDuK ykctb">
                    <span className="sc-hlnMnd iQezAS">
                      I am working with FitnEarn as web developer.
                      I am responsible for designing and developing user-friendly and
                      efficient web applications to meet the needs of FitnEarn's users. as a web developer,
                      I create a new features for FitnEarn's products.
                    </span><br />
                    <div className="sc-jQHtVU hCWdWR">
                      <b>Skills:</b>
                      <div className="sc-fvNpTx edwONn">
                        <div className="sc-fctJkW flsNtb">• ReactJS</div>
                        <div className="sc-fctJkW flsNtb">• Redux</div>
                        <div className="sc-fctJkW flsNtb">• NodeJs</div>
                        <div className="sc-fctJkW flsNtb">• ExpressJs</div>
                        <div className="sc-fctJkW flsNtb">• MongoDB</div>
                        <div className="sc-fctJkW flsNtb">• MySQL</div>
                        <div className="sc-fctJkW flsNtb">• Bootstrap</div>
                        <div className="sc-fctJkW flsNtb">• Material UI</div>
                        <div className="sc-fctJkW flsNtb">• HTML</div>
                        <div className="sc-fctJkW flsNtb">• CSS</div>
                        <div className="sc-fctJkW flsNtb">• JavaScript</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
};

export default Experience;
