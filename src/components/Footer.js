import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
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
                        <h2>About Us</h2>
                        <Link to="/">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                </div>
                
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Support</Link>
                        <Link to="/">Guide</Link>
                        <Link to="/">Email</Link>
                        <Link to="/">Careers</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
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
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className="copyright">TRVL &copy 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin" to="/" target='_blank' aria-label="Fcebook">
                        <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target='_blank' aria-label="Fcebook">
                        <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link medium" to="/" target='_blank' aria-label="Fcebook">
                        <i className="fab fa-medium"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
