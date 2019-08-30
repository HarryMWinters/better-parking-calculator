import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Title() {
  return (
    <Jumbotron>
      <h1>A Better Parking Calculator</h1>
      <p>
        Inspired by an interview challange to "find the bugs" in a webapp that
        calculates parking costs.
        <a href="http://adam.goucher.ca/parkcalc/"> Original app</a>. More info{" "}
        <a href="https://www.infoq.com/news/2010/05/testing_challenge/">
          here.
        </a>
      </p>
    </Jumbotron>
  );
}

export default Title;
