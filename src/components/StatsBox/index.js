import React from "react";
import headshot from "../../images/dan-oneil-headshot.jpg";

function StatsBox() {
  return (
    <>
      <aside className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3">
        <img src={headshot} alt="Dan O'Neil headshot" className="img-fluid rounded-lg" />
      </aside>

      <section className="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-6 mb-3">
        <div className="card bg-primary p-1">
          <table className="table-sm table-dark ">
            <tbody>
              <tr><th>NAME:</th><td>Dan O'Neil</td></tr>
              <tr><th>PRONOUNS:</th><td>he/him/his <small>(<a href="https://www.mypronouns.org/he-him" target="blank" className="text-light">what's this?</a>)</small></td></tr>
              <tr><th>HOMETOWN:</th><td>Chagrin Falls, OH </td></tr>
              <tr><th>LOCATION:</th><td>Philadelphia, PA </td></tr>
              <tr><th>EDUCATION:</th><td>Certificate, Full Stack Web Development, <i>University of Pennsylvania</i><br/>BFA Theatre, <i>The University of the Arts</i></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default StatsBox;