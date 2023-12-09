import './Footer.css';
import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>individual</p>
                        </a>

                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resourse center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="https://www.rsl.ru/ru/about/">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className= "sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <a target='_blank' href='https://vk.com/leninka_ru'><img src="Vk.png" alt="VK" /></a>
                            <p><img src="twitter.png" alt="Twitter" /></p>
                            <p><img src="Instagram.png" alt="Instagram" /></p>
                            <a target='blank' href='https://t.me/leninka_ru'><img src="telegram.png" alt="Telegram" /></a>
                        </div>
                    </div>
                </div>
        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                <a href="/terms"><div><p>Privacy</p></div></a>
                <a href="/terms"><div><p>Security</p></div></a>
                <a href="/terms"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>

            </div>
        </div>
    )
}