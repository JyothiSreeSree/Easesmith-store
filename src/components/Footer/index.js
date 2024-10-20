import './index.css'
import { FaFacebook,FaTwitter ,FaInstagram} from "react-icons/fa";
const Footer=()=>{
    return(
        <footer class="footer">
            <div>
            <div class="newsletter">
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <input type="email" placeholder="Enter your email address" />
                <button>SUBSCRIBE</button>
            </div>

            <div class="footer-columns">
                <div class="about-us">
                <h4>About Us</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Blogs</li>
                    <li>Careers</li>
                </ul>
                </div>

            <div class="our-services">
            <h4>Our Services</h4>
            <ul>
                <li>Book Maali</li>
                <li>Plant Day Care</li>
                <li>Rent Plants</li>
            </ul>
            </div>

            <div class="useful-links">
            <h4>Useful Links</h4>
            <ul>
                <li>My Account</li>
                <li>Orders & Returns</li>
                <li>Track Order</li>
            </ul>
            </div>

            <div class="get-in-touch">
            <h4>GET IN TOUCH</h4>
            <p>Address: F-262, First Floor, Sushant Lok Phase-III,<br/>
            Sector-57, Gurgaon, Haryana, India 122003</p>
            <p>Call: +919958287272</p>
            <p>Email: <a href="mailto:care@chaperoneplants.com">care@chaperoneplants.com</a></p>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-policy">
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Return, Refund & Replacement Policy</li>
            </ul>
            </div>

            
  </div>
  </div>
  <div>
  <div class="social-media">
            <h4>Follow us on</h4>
            <ul>
                <li><FaFacebook/></li>
                <li><FaTwitter/></li>
                <li><FaInstagram/></li>
            </ul>
            </div>
  
  <div class="footer-copy">
    <p>© 2023, chaperone.com All rights reserved.</p>
  </div>
  </div>
</footer>

    )
}
export default Footer