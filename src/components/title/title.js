import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Title() {
  return (
    <Jumbotron>
      <h1>A Better Parking Calculator</h1>
      <p>
        This project was inspired by an interview challenge to "find the bugs"
        in a web app that calculates parking costs.
        <a
          href="http://adam.goucher.ca/parkcalc/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Original app
        </a>
        . Background info{" "}
        <a
          rel="noopener noreferrer"
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
        <a
          href="https://github.com/HarryMWinters"
          rel="noopener noreferrer"
          target="_blank"
        >
          github
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/code-bio/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>
    </Jumbotron>
  );
}

export default Title;
