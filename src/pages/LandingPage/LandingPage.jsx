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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            illo ullam dolores repellat a omnis esse in necessitatibus assumenda
            provident. Ipsam velit obcaecati corporis et maiores non ipsa odit
            asperiores?
          </p>
        </aside>
      </section>
      <aside className="btn-area">
        {/* <Link to="/" className="list-links">
          Home
        </Link> */}
        <Link to="/graduates">
          <Button buttonName={"See all our Graduates"} />
        </Link>
        <Link to="/graduate-form">
          <Button buttonName={"Add Graduate"} />
        </Link>
      </aside>
    </div>
  );
};

export default LandingPage;
