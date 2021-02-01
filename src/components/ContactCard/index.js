import React from "react";

function ContactCard() {
  return (
    <main className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
      <div className="card text-center p-3 mb-3">
        {/* Name/Title */}
        <div className="col-12">
          <h2>Dan O'Neil</h2>
          <h4><i>Full Stack Web Developer</i></h4>
        </div>
        {/* Phone */}
        <div className="col-12">
          <a target="blank" href="tel:440.708.3326">
            <h4>(440) 708-3326</h4>
          </a>
        </div>
        {/* Email */}
        <div className="col-12">
          <a target="blank" href="mailto:dhoneil@gmail.com">
            <h4>dhoneil@gmail.com</h4>
          </a>
        </div>
      </div>
    </main>
);
}

export default ContactCard;
