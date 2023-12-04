import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import Button from "../../components/Button/Button";
import landingPic from "../../images/landingPic.webp";
import Heading from "../../components/Heading/Heading";

const LandingPage = () => {
  return (
    <div className="homepage">
      <Heading headingName="Welcome" />
      <section className="info-area">
        <aside className="picture-area">
          <img src={landingPic} alt="group graduate pic" />
        </aside>
        <aside className="page-desc">
          <p>
            Welcome to CodeYourFuture's Graduates' Page where you can view all
            our eligible graduates and either connect with them or view some of
            their wonderful work they have created.
            <div className="form-info">
              **NOTE: If you would like to be displayed, click button below and
              fill in the form.
            </div>
          </p>
        </aside>
      </section>
      <aside className="btn-area">
        <Link to="/graduates" className="button-space">
          <Button buttonName={"See all our Graduates"} />
        </Link>

        <Link to="/form" className="button-space">
          <Button buttonName={"Add Graduate"} />
        </Link>
      </aside>
    </div>
  );
};

export default LandingPage;
