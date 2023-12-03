import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import Button from "../../components/Button/Button";

const LandingPage = () => {
  return (
    <div className="homepage">
      <section className="info-area">
        <aside className="picture-area">Place Image here</aside>
        <aside className="page-desc">
          <p>
            Welcome to CodeYourFuture's Graduates' Page where you can view all
            our eligible graduates and either connect with them or view some of
            their wonderful work they have created.
          </p>
        </aside>
      </section>
      <aside className="btn-area">
        <Link to="/graduates" className="button-space">
          <Button buttonName={"See all our Graduates"} />
        </Link>

        <span className="form-info">
          If you would like to be displayed, click button below and fill in the
          form.
        </span>
        <Link to="/form" className="button-space">
          <Button buttonName={"Add Graduate"} />
        </Link>
      </aside>
    </div>
  );
};

export default LandingPage;
