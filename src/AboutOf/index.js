import React from "react";
import { TodoContext } from "../TodoContext";
import { FaReact, FaCss3, FaLinkedin, FaGithub } from "react-icons/fa6";
import './AboutOf.css';


function AboutOf() {

    const {
        setOpenModal,
        setAboutOf,
    } = React.useContext(TodoContext);
    const currentDate = new Date().getFullYear();

    return (
        <div className="AboutOf">
            <div className='AboutOfButton'>
                <button className="AboutOfButton-button"
                    onClick={
                        () => {
                            setOpenModal(state => !state);
                            setAboutOf(state => !state);
                        }
                    }
                >X</button>
            </div>
            <h3> <p> The website allows you to create tasks easily. </p></h3>
            <div>
                <p>Tools used:</p>
                <div className="AboutOf-BigIcon">
                    <FaReact />
                    <FaCss3 />
                </div>
                <p>Tecniques used:</p>
                <div className="AboutOf-badges">
                    <div className="AboutOf-badge">React Icons</div>
                    <div className="AboutOf-badge">LocalStorage</div>
                    <div className="AboutOf-badge">useEffect</div>
                    <div className="AboutOf-badge">React portals</div>
                </div>
                <p>Create by Billy A.G.R {currentDate}</p>
                <div>
                    <a href="https://www.linkedin.com/in/billyagr" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="AboutOf-SmallIcon" />
                    </a>
                    <a href="https://github.com/BillyAGR" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="AboutOf-SmallIcon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export { AboutOf };