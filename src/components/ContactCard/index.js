import React from "react";
import { Link } from "react-router-dom";

function ContactCard() {
  return (
    <main className="col-lg-8 col-md-9 col-sm-12 col-xs-12">
      <div className="card text-center p-3 mb-3">
        {/* Name/Title */}
        <div className="col-12">
          <h2>Dan O'Neil</h2>
          <h4><i>Full Stack Web Developer</i></h4>
        </div>
        {/* Phone */}
        <div className="col-12">
          <Link target="_blank" to="tel:440.708.3326">
            <h4>(440) 708-3326</h4>
          </Link>
        </div>
        {/* Email */}
        <div className="col-12">
          <Link target="_blank" to="mailto:dhoneil@gmail.com">
            <h4>dhoneil@gmail.com</h4>
          </Link>
        </div>
      </div>
    </main>
);
}

export default ContactCard;
