import React from "react";
import Row from "../Row";
import gitHubIcon from "../../images/icons/github.png";
import linkedInIcon from "../../images/icons/linkedin.png";
import stackOverflowIcon from "../../images/icons/stackoverflow.png";
import instagramIcon from "../../images/icons/instagram.png";

function IconCard() {
  return (
    <aside className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
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
          <div className="col-3">
            <a target="blank" href="//github.com/dandandanoneil">
              <img src={gitHubIcon} alt="GitHub icon" className="img-thumbnail w-100 img-fluid" style={{ maxWidth: 128 }} />
            </a>
          </div>
          {/* LinkedIn */}
          <div className="col-3">
            <a target="blank" href="//www.linkedin.com/in/dhoneil/">
              <img src={linkedInIcon} alt="LinkedIn icon" className="img-thumbnail w-100 img-fluid" style={{ maxWidth: 128 }} />
            </a>
          </div>
          {/* Stack Overflow */}
          <div className="col-3">
            <a target="blank" href="//stackoverflow.com/users/14072252/dan-oneil?tab=profile">
              <img src={stackOverflowIcon} alt="Stack Overflow icon" className="img-thumbnail w-100 img-fluid" style={{ maxWidth: 128 }} />
            </a>
          </div>
          {/* Instagram */}
          <div className="col-3">
            <a target="blank" href="//www.instagram.com/dandandanoneil/">
              <img src={instagramIcon} alt="Instagram icon" className="img-thumbnail w-100 img-fluid" style={{ maxWidth: 128 }} />
            </a>
          </div>
        </Row>
      </div>
    </aside>
);
}

export default IconCard;
