import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Title() {
  return (
    <Jumbotron>
      <h1>A Better Parking Calculator</h1>
      <p>
        This project was inspired by an interview challange to "find the bugs"
        in a web app that calculates parking costs.
        <a href="http://adam.goucher.ca/parkcalc/" target="_blank">
          {" "}
          Original app
        </a>
        . Background info{" "}
        <a
          href="https://www.infoq.com/news/2010/05/testing_challenge/"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p>
        If you're super impressed by bootstrap themes, Fullstack mess-arounds
        and pictures of software engineers in the high Sierra check out my{" "}
        <a href="https://github.com/HarryMWinters" target="_blank">
          github
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/code-bio/" target="_blank">
          LinkedIn
        </a>
        .
      </p>
    </Jumbotron>
  );
}

export default Title;
