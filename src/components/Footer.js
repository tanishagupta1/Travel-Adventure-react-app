import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subs">
                <p className="footer-subs-heading">
                    JOIN the adventure newsletter to know out latest vacation trips.
                </p>
                <p className="footer-subs-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Enter your Email Address" className="footer-input" />
                        <Button buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <div className="footer-heads">About Us</div>
                        <Link to="/">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <div className="footer-heads">Contact</div>
                        <Link to="/">Support</Link>
                        <Link to="/">Guide</Link>
                        <Link to="/">Email</Link>
                        <Link to="/">Careers</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <div className="footer-heads">Videos</div>
                        <Link to="/">Submit a Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Franchise</Link>
                        <Link to="/">Influencers</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-container">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className="copyright">TRVL &copy; 2021</small>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/tanisha-gupta1/" className="social-icon-link linkedin" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/tanisha_gupta12" className="social-icon-link twitter" aria-label="twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://tanishagupta213.medium.com/" className="social-icon-link medium" aria-label="Medium">
                            <i className="fab fa-medium"></i>
                        </a>
                        <a href="https://github.com/tanishagupta1" className="social-icon-link github" aria-label="Github">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:tanishagupta2201@gmail.com" className="social-icon-link email" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
