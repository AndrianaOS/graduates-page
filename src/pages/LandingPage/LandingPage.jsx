import React from "react";
import "./landingPage.css";
import Button from "../../components/Button/Button";

const LandingPage = () => {
  return (
    <div>
      <aside className="picture-area">Place Image here</aside>
      <aside className="page-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo
          ullam dolores repellat a omnis esse in necessitatibus assumenda
          provident. Ipsam velit obcaecati corporis et maiores non ipsa odit
          asperiores?
        </p>
      </aside>
      <aside className="btn-area">
        <a href="/graduates">
          <Button buttonName={"See all our Graduates"} />
        </a>
        <a href="/form">
          <Button buttonName={"Add Graduate"} />
        </a>
      </aside>
    </div>
  );
};

export default LandingPage;
