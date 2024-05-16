import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    let contactMe = 'Contact Me'.split('');
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);
    });
    //kolwitz
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'gmail',
            'service_qb1ztk1',
            refForm.current,
            'user token: again you get this from reg'
        ).then(() => {
            alert("Message successfully sent !");
            window.location.reload(false);
        }, () => {
            alert('Failed to send the message, please try again')
        })
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={contactMe}
                            letterClass={letterClass} startIndx={15}></AnimatedLetters>
                    </h1>

                    <p>
                        In the ever-shifting landscape of opportunity, I am a relentless seeker, driven by an insatiable thirst for innovation. With each dawn, I greet the world not as a passive observer, but as a catalyst for change, ready to embrace any challenge that beckons with the promise of progress.
                        My journey is defined by a series of triumphs born from the crucible of creativity. From the hallowed halls of hackathons to the bustling marketplace of ideas, I have forged a path paved with ingenuity and perseverance. Through countless sleepless nights and tireless iterations, I have honed my craft, transforming mere concepts into tangible solutions that push the boundaries of what is possible.
                        But my pursuit does not end with the realization of prototypes; it is only just beginning. For true innovation lies not in the creation of novelty but in the execution of vision. I have stood at the helm of projects, guiding them from proof of concept to fully-fledged products that disrupt industries and redefine standards.
                        The call of leadership echoes in the chambers of my soul, beckoning me to chart a course for others to follow. With each opportunity to lead, I seize the reins with unwavering determination, inspiring teams to reach new heights of excellence. I am not content to simply navigate the currents of change—I am driven to shape them, to leave an indelible mark on the world around me.
                        Innovation is not merely a means to an end; it is the beating heart of my existence, the driving force behind every endeavor. And as I stand on the precipice of possibility, I am fueled by the boundless potential of tomorrow, eager to embrace whatever challenges lie ahead in my quest to redefine what is possible
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder="Name" required></input>
                                </li>
                                <li className="half">
                                    <input type="email" name='email' placeholder="Email" required></input>
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name="subject" required></input>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="Send"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Tenzin Lekden,
                    <br></br>
                    US
                    <br />
                    2345, Park Ave 11270

                    <span>tenzin.lekden@sap.co</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[40.766562, -73.967174]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                        <Marker position={[40.766562, -73.967174]}>
                            <Popup>I live here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;