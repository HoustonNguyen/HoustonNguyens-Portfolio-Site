import React from "react";
import imageOverlay from "../img/bg_pc.jpg";

const SocialLinks = {
  "LinkedIn": "https://www.linkedin.com/in/houstonhuenguyen/",
  "GitHub": "https://github.com/HoustonNguyen"
};

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        {/* <div className="overlay-mf"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdNea4obsroWvDg57OZdxPG6sC2OqUZheyXKXKjM6XLRBmaOg/viewform?embedded=true" 
                      width="1000" height="500" frameborder="0" marginheight="0" marginwidth="0">
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">&#169; {new Date().getFullYear()} Houston Nguyen
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
