import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';

export default function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['T', 'e', 'n', 'z', 'i', 'n'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 4000)
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m &nbsp;</span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray} startIndx={10}>
                        </AnimatedLetters>
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray} startIndx={20}>
                        </AnimatedLetters>
                    </h1>

                    <h2>Front end developer / Javscript expert</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo></Logo>
            </div>

            <Loader type='pacman' />
        </>
    )
}