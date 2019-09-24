# The Better Parking Calculator

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

![GitHub issues](https://img.shields.io/github/issues/harrymwinters/better-parking-calculator) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg) ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Docker Automated build](https://img.shields.io/docker/automated/harrymwinters/better-parking-calculator)

## Table of Contents

- [Overview](#Overview)
- [Features](#Features)
- [Getting Started](<#Getting\ Started>)
- [Links](#Links)
- [Acknowledgements](#Acknowledgements)

## Overview

This simple react app was inspired by a QA/QC challenge roughly based on [this](https://www.infoq.com/news/2010/05/testing_challenge/) discussion. The challenge inspired me to get reacquainted with the react and I figured I'd try and build a _slightly_ better version of the calculator. This is the result.

## Features

A simple interface for entering entry and exit time and viewing price and duration of stay (just in hours and minutes for now) and dynamically generated menu of parking options and their price.

<div>
  <img style="float: left;" 
       src="https://github.com/harrymwinters/better-parking-calculator/blob/master/media/Calculator.png" 
       width=40%>
  <img style="float: right;" 
       src="https://github.com/harrymwinters/better-parking-calculator/blob/master/media/Parking Menu.png" 
       width=40% >
<div/>
  
## Getting Started

There are hopefully self explanatory makefile targets that may require an env variable or to depending on whether docker credentials or image tags need to be specified but all the standard npm/react commands should also work.

If there's no link to a hosted version yet the easiest way to spin it up is `docker run -p 8000:80 harrymwinters/better-parking-calculator:v1.0.0` but `npm start` should also work.

## Links

- [Hosted App](https://reverent-kowalevski-7ad05b.netlify.com/)
- [Dockerhub Repo](https://hub.docker.com/r/harrymwinters/better-parking-calculator)
- [My LinkedIn](https://www.linkedin.com/in/code-bio/)

## Acknowledgements

- The fine people at GRAIL who gave me the idea to work on this while interviewing me. Joe Scalisi, Brian Bentson, Margi Kim, Jaz Singh, Neda Ronaghi, Alan Chu and Allie Ahn.
- Mark Levinson at InfoQ for his [article](https://www.infoq.com/news/2010/05/testing_challenge/) which allowed me to actually track down the original calculator and its origin story.
- Adam Goucher at <http://adam.goucher.ca/> who when I first started working on this hosted the originsl calculator [here](http://adam.goucher.ca/parkcalc/). The site has been down for awhile.
- And lastly my deep gratitude to the original author of the buggy ParkingCalc app. Writing code is a humbling experience and I am gratefull to have been inspired by your work.
