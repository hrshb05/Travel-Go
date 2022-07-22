import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <ul className="social-btns">
                <li className="social-btn">
                    <a href="#"><i className="fab fa-twitter" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="#"><i className="fab fa-linkedin-in" ></i></a>
                </li>
             
                </ul>

                <div className="to-top">
                <a className="rocket" href="#">
                    <img src="/travel.png" alt="ico" /> <br />
                    {/* <p id="trick">Beam me up, Scotty!</p> */}
                </a>
                </div>

                <p className="copyright">
                <i className="far fa-copyright" aria-hidden="true"></i> {new Date().getFullYear()}
                </p>
            </div>
            </footer>
    )
}

export default Footer;
