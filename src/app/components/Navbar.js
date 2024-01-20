"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowButton(window.innerWidth <= 970);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <nav className="navbar fixed-top bg-black">
                <div className="container-fluid">
                    <Link className="logo-link-wrapper" href="/" >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path>
                        </svg>
                        <span className="logo-name">Portfolio</span>
                    </Link>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item navbar-links">
                            <Link className="nav-link navlink" href="#about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item navbar-links">
                            <Link className="nav-link navlink" href="#skills">
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item navbar-links">
                            <Link className="nav-link navlink" href="#experience">
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item navbar-links">
                            <Link className="nav-link navlink" href="#projects">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item navbar-links">
                            <Link className="nav-link navlink" href="#education">
                                Education
                            </Link>
                        </li>
                        <li className="nav-item navbar-links">
                            <Link href="https://github.com/swapnilnichal" target="display" className="git-link">
                                <button className="github-profile-btn">
                                    Github Profile
                                </button>
                            </Link>
                        </li>
                    </ul>
                    {showButton && (
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5H1zM1 7.5A1.5 1.5 0 0 1 2.5 6h11a1.5 1.5 0 0 1 0 3H2.5A1.5 1.5 0 0 1 1 7.5zm0 5A1.5 1.5 0 0 1 2.5 11h11a1.5 1.5 0 0 1 0 3H2.5A1.5 1.5 0 0 1 1 12.5z" />
                                </svg>
                            </span>
                        </button>
                    )}

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" style={{position:"relative"}} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                <span style={{ fontSize: '30px', color: 'white',position:"absolute",top:"0px", right:"5px" }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="off-Body">
                                <Link className="navlink" href="#about">About</Link>
                                <Link className="navlink" href="#skills">Skills</Link>
                                <Link className="navlink" href="#experience">Experience</Link>
                                <Link className="navlink" href="#projects">Projects</Link>
                                <Link className="navlink" href="#education">Education</Link>
                                <Link href="https://github.com/swapnilnichal" target="display" className="git-link">
                                <button className="github-profile-btn">
                                    Github Profile
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}