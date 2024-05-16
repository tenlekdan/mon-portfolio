import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}></AnimatedLetters>
                    </h1>
                    <p>
                        Based on the extensive experience I've gained working with industry giants like SAP, Siemens, Samsung, and Wipro, as well as my leadership roles in mentoring, training, and guiding junior team members, it's clear that I possess a wealth of knowledge and expertise in my field. My track record of spearheading projects from inception to production further underscores my ambition and drive for success.
                        My ambition is reflected in my proactive approach to taking on challenges and pushing the boundaries of what's possible. Whether it's tackling complex technical problems, mentoring the next generation of talent, or driving innovation within my organization, I consistently demonstrate a willingness to go above and beyond expectations.
                        My ambition isn't just about personal achievement; it's also about making a meaningful impact and driving positive change. I strive to create environments where collaboration thrives, where individuals are empowered to reach their full potential, and where innovation flourishes.
                        My career trajectory showcases my ambition to continuously grow, learn, and evolve in my field. From my early days at SAP to my current role, I've embraced new opportunities and challenges with enthusiasm and determination, always seeking to expand my skill set and make a difference in the projects I undertake.
                    </p>
                    <p>
                        My confidence defines every step of my professional journey. It's the driving force behind my bold decisions, the challenges I eagerly embrace, and the leadership roles I take on with conviction. I believe in my abilities wholeheartedly, whether I'm navigating complex technical projects, mentoring junior team members, or leading initiatives from conception to execution. In the face of adversity, I remain steadfast, drawing upon my expertise,
                        determination, and resilience to overcome any obstacle. My unwavering self-assurance not only propels me forward but also inspires those around me to trust in my vision and follow my lead. I see confidence not just as a trait but as a cornerstone of my success, empowering me to achieve greatness in everything I pursue.
                    </p>
                    <p>In summary, my ambition is a driving force behind my success, propelling me to new heights of achievement and inspiring those around me to strive for excellence.</p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031"></FontAwesomeIcon>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;