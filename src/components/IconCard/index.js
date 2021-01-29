import React from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import gitHubIcon from "../../images/icons/github.png";
import linkedInIcon from "../../images/icons/linkedin.png";
import stackOverflowIcon from "../../images/icons/stackoverflow.png";
import instagramIcon from "../../images/icons/instagram.png";

function IconCard() {
  return (
    <aside className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
      <div className="card text-center p-3 mb-3">
        {/* Card Title */}
        <Row>
          <div className="col-12">
            <h4 className="card-title">Find me online:</h4>
          </div>
        </Row>
        {/* Online Links */}
        <Row>
          {/* GitHub */}
          <div className="col-lg-6 col-md-12 col-sm-3 col-3">
            <Link target="blank" to="//github.com/dandandanoneil">
              <img src={gitHubIcon} alt="GitHub icon" className="img-thumbnail img-fluid" />
            </Link>
          </div>
          {/* LinkedIn */}
          <div className="col-lg-6 col-md-12 col-sm-3 col-3">
            <Link target="blank" to="//www.linkedin.com/in/dhoneil/">
              <img src={linkedInIcon} alt="LinkedIn icon" className="img-thumbnail img-fluid" />
            </Link>
          </div>
          {/* Stack Overflow */}
          <div className="col-lg-6 col-md-12 col-sm-3 col-3">
            <Link target="blank" to="//stackoverflow.com/users/14072252/dan-oneil?tab=profile">
              <img src={stackOverflowIcon} alt="Stack Overflow icon" className="img-thumbnail img-fluid" />
            </Link>
          </div>
          {/* Instagram */}
          <div className="col-lg-6 col-md-12 col-sm-3 col-3">
            <Link target="blank" to="//www.instagram.com/dandandanoneil/">
              <img src={instagramIcon} alt="Instagram icon" className="img-thumbnail img-fluid" />
            </Link>
          </div>
        </Row>
      </div>
    </aside>
);
}

export default IconCard;
