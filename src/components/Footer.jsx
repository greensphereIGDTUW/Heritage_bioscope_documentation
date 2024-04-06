import React from "react";
function Footer(){
    return(
        <div>
        <div className="footer-content">
          <div className="Contact-Us">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div>
              <p>IGDTUW, Kashmere Gate, New Delhi, Delhi, India</p>
            </div>
          </div>

          <div className="Icons">
            <div>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="Working-Hours">
            <div>
              <h1>Working Hours</h1>
            </div>
            <div>Monday-Friday</div>
          </div>
        </div>
        <div className="footer-line">
          <p>2023 Greensphere All Rights reserved.</p>
        </div>
        </div>
    );
}
export default Footer;